<template>
    <main>
        <div>
            <h2>Movies</h2>
            <div>
                <CardItem 
                :baseURL="'https://image.tmdb.org/t/p/'"
                :sendflag="flag"
                :key="index" 
                v-for="(item,index) in sentMoviesList"
                :title="item.title"
                :imageUrl="item.poster_path"
                :span="item.original_title"
                :span2="item.original_language"
                :score="item.vote_average"
                :paragraph="item.overview"
                />
            </div>
            <h2>Series</h2>
            <div>
                <CardItem 
                :baseURL="'https://image.tmdb.org/t/p/'"
                :sendflag="flag"
                :key="index" 
                v-for="(item,index) in sentSeriesList"
                :title="item.name"
                :imageUrl="item.poster_path"
                :span="item.original_name"
                :span2="item.original_language"
                :score="item.vote_average"
                :paragraph="item.overview"
                />
            </div>
        </div>
    </main>
</template>

<script>
import CardItem from '@/components/CardItem.vue';

export default {
    name:'MainComponent',
    components:{
        CardItem,
    },
    data(){
        return{
            flag:['af','ax','al','dz','as','ad','ao','ai','aq','ag','ar','am','aw','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','bq','ba','bw','bv','br','vg','io','bn','bg','bf','bi','kh','cm','ca','ky','cl','cn','cz','dk','fi','fr','de','in','it','jp','pl','pt','us','gb'],
        }
    },
    props:{
        sentMoviesList: Array,
        sentSeriesList:Array
    },
}
</script>

<style lang="scss" scoped>

@import '~/src/styles/variables';

    main{
        color: $font-color-secondary;
        padding: 30px 0 ;
        //height: calc(100vh - 80px);
        background-color: $bg-main;
        & > div{
            max-width: 1200px;
            margin: auto;
            & > h2{
                padding: 10px;
                border-bottom: 1px solid #000;
            }
            & > div{
                justify-content: center;
                align-items: center;
                display: flex;
                flex-wrap: wrap;
                *{
                    width: calc(100% / 5 - 2rem);

                }
            }
        }
    }
</style>