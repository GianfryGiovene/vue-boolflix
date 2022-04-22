<template>
    <main>
        <div>
            <h2>Movies</h2>
            <div>
                <CardItem 
                :key="item.id" 
                v-for="item in sentMoviesList"
                :title="item.title"
                :imageUrl="item.poster_path"
                :span="item.original_title"
                :span2="item.original_language"
                :score="item.vote_average"
                :paragraph="item.overview"
                :baseURL="'https://image.tmdb.org/t/p/'"
                :sendflag="flags"
                :id="item.id"
                :whatKindOfShow="'movie'"
                :apiKey="apiKey"
                />
            </div>
            <h2>Series</h2>
            <div>
                <CardItem 
                :key="item.id" 
                v-for="item in sentSeriesList"
                :title="item.name"
                :imageUrl="item.poster_path"
                :span="item.original_name"
                :span2="item.original_language"
                :score="item.vote_average"
                :paragraph="item.overview"
                :baseURL="'https://image.tmdb.org/t/p/'"
                :sendflag="flags"
                :id="item.id"
                :whatKindOfShow="'tv'"
                :apiKey="apiKey"
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
            flags:['af','ax','al','dz','as','ru','ad','ao','ai','aq','ag','ar','am','aw','au','at','az','bs','bh','bd','bb','by','be','bz','bj','bm','bt','bo','bq','ba','bw','bv','br','vg','io','bn','bg','bf','bi','kh','cm','ca','ky','cl','cn','cz','dk','fi','fr','de','in','it','jp','pl','pt','us','gb'],
        }
    },
    props:{
        sentMoviesList: Array,
        sentSeriesList: Array,
        apiKey: String,
    },
}
</script>

<style lang="scss" scoped>

@import '~/src/styles/variables';

    main{
        color: $font-color-secondary;
        padding: 30px 0 ;
        height: calc(100vh - 80px);
        background-color: $bg-main;
        & > div{
            
            margin: auto;
            & > h2{
                padding: 10px;
                border-bottom: 1px solid #000;
            }
            & > div{
                padding: 0 50px;
                align-items: center;
                flex-shrink: 0;
                display: flex;
                gap: 20px;
                overflow-x: auto;
                *{
                    width: 210px;
                }
            }
        }
    }
</style>