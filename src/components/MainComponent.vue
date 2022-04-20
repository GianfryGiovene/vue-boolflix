<template>
    <main>
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
            />
        </div>
        <h2>series</h2>
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
            />
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
    main{
        width: 100%;
        & > div{
            max-width: 1200px;
            margin: auto;
            display: flex;
            flex-wrap: wrap;
            border: 1px solid black;
            *{
                width: calc(100% / 5 - 2rem);
            }
        }
    }
</style>