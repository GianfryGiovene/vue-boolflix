<template>
    <div   @mouseover="isOver" @mouseleave="isLeave" class="ggf-card">
        <div v-if="!cardOver">
            <img v-if="imageUrl" :src="baseURL + 'w342' + imageUrl" alt="title">
            <span v-else>NO IMG</span>
        </div>
        <div v-else>
            <div class="flex-wrap">
                <h4>Titolo:</h4>
                <span>{{title}}</span>
            </div>
            <div class="flex-wrap">
                <h4>Titolo originale:</h4>
                <span>{{span}}</span>
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
                <span>Voto:</span>
                <font-awesome-icon icon="fa-solid fa-star" :key="index" v-for="(item,index) in modifiedScore"></font-awesome-icon>
            </div>
            <div id="overview">
                <h4>Overview </h4>
                <p>{{ paragraph }}</p>
            </div>    
        </div>       
    </div>
</template>

<script>
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
    },
    created(){
        // converts the float numbers from 0 to 10 in a int from 0 to 5
        this.modifiedScore = Math.ceil(this.score / 2)
    },
    methods:{
        //card over controls 
        isOver(){
            this.cardOver= true;
        },
        isLeave(){
            this.cardOver= false;
        }
    }
}
</script>

<style lang="scss" scoped>
    .ggf-card{
        margin: 1rem auto;
        h4{
            font-size: 0.8rem;
        }
        span{
            font-size: 0.8rem;
        }
        & > div:first-child{
            img{
                width: 100%;
            }
        }
        
        & > div:last-child{
            width: 100%;
            background-color: #000;
            .flex-wrap{
                display: flex;
        }
        & > div:nth-child(5){
            
            #overview{
                overflow-y: auto;
                max-height: 80px;
            }
        }
        }
    }
    
    
</style>