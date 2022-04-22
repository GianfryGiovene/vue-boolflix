<template>
    <div   @mouseover="isOver" @mouseleave="isLeave" class="ggf-card">
        <div v-if="!cardOver" id="poster">
            <img v-if="imageUrl" :src="baseURL + 'w342' + imageUrl" alt="title">
            <img v-else src="@/assets/no-image-available.jpg" alt="">
        </div>
        <div v-else id="description">
            <perfect-scrollbar>
            <div class="flex-wrap">
                <h4>Titolo:</h4>
                <span>{{title}}</span>
            </div>
            <div class="flex-wrap">
                <h4>Titolo originale:</h4>
                <span>{{span}}</span>
            </div>
            <div class="flex-wrap">
                <h4>Lingua originale: </h4>
                <country-flag v-if="sendflag.includes(span2.toLowerCase())" :country='span2' size="small"/>
                <span v-else>{{ span2 }}</span>
            </div>
            <div class="score-stars flex-wrap">
                <h4>Voto:</h4>
                <font-awesome-icon icon="fa-solid fa-star" :key="index" v-for="(item,index) in modifiedScore"></font-awesome-icon>
            </div>
            <div id="overview">
                <h4>Overview </h4>
                <perfect-scrollbar>
                    <p>{{ paragraph }}</p>
                </perfect-scrollbar>
            </div>
            <div id="cast">
                <h4>Cast</h4>
                <span :key="index" v-for="(member,index) in cast">{{member.name + ',  '}}</span>
                <span v-if="cast != 0">and others</span>
                <span v-else>Vedi il film e scoprilo</span>
            </div>
            <div id="genre">
                <h4>Genre</h4>
                <span :key="index" v-for="(genre,index) in genres">{{genre.name}}</span>
                
            </div>
            </perfect-scrollbar>
        </div>       
    </div>
</template>

<script>
import axios from 'axios';
import CountryFlag from 'vue-country-flag';
export default {
    name: 'CardItem',
    components:{
        CountryFlag,
    },
    data(){
        return{
            modifiedScore: 0,
            cardOver: false,
            actorsApi: 'https://api.themoviedb.org/3/movie/',
            cast:[],
            genres:[]
        }
    },
    props: {
        paragraph: String,
        baseURL: String,
        sendflag: Array,
        title: String,
        imageUrl: String,
        span:  String,   
        span2: String,
        score: Number,
        id: Number,
        whatKindOfShow: String
    },
    created(){
        // converts the float numbers from 0 to 10 in a int from 0 to 5
        this.modifiedScore = Math.ceil(this.score / 2);
    },
    methods:{
        //card over controls 
        isOver(){
            this.cardOver= true;
        },
        isLeave(){
            this.cardOver= false;
        },
        axiosRequestForActors(){
            axios.get(`https://api.themoviedb.org/3/${this.whatKindOfShow}/${this.id}?api_key=941815c5e331ca168a23b432e7f83189&append_to_response=credits`).then(response=>{
                console.log('lo vedo?',response.data.genres)
                this.cast = response.data.credits.cast.slice(0,5);
                this.genres = response.data.genres;
                console.log('genreee',this.genres)
            }).catch(error=>console.log('error',error))
        },
        
    },
    mounted(){
        this.axiosRequestForActors()
    }
    
    
}
</script>

<style lang="scss" scoped>
@import '~/src/styles/variables';
    .ggf-card{
        margin: 1rem auto;
        border: 2px solid $font-color-primary;
        height: 300px;
        width: 210px;
        & > #poster{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            img{
                padding:  0 2.5px;
                height: 295px;
                overflow-y: hidden;
            }
        }
        
        & > #description{
            padding: 5px;
            display: flex;
            width: 206px;
            flex-direction: column;
            background-color: #000;
            height: 100%;
            overflow-y: hidden;
            & > .ps {
                    height: 100%;
                }
            h4{
            font-size: $small-font;
            color: $font-color-primary;
            }
            span{
                font-size: $small-font;
            }
            .flex-wrap{
                display: flex;
            }
            .score-stars {
                color: $yellow;
            }
            #overview{
                .ps {
                    height: 90px;
                }
                p{
                    font-size: $small-font;
                }
            }
        }
    } 
</style>






