<template>
    <div class="ggf-card">
        <img v-if="imageUrl" :src="baseURL + 'w92' + imageUrl" alt="title">
        <span else>NO IMG</span>
        <h3>{{title}}</h3>
        <span>{{span}}</span>
        <span>
            Lingua originale: 
            <country-flag v-if="sendflag.includes(span2.toLowerCase())" :country='span2' size="small"/>
            <span v-else>{{ span2 }}</span>
        </span>
        <div>
            <!-- aggiungere fontawesome -->
            <i :key="index" v-for="(item,index) in modifiedScore ">*</i>
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
            modifiedScore: 0
        }
    },
    props: {
        baseURL: String,
        sendflag: Array,
        title: String,
        imageUrl: String,
        span:  String,   
        span2: String,
        score: Number,
    },
    created(){
        this.modifiedScore = parseInt(this.score / 2)
    }
}
</script>

<style lang="scss" scoped>
    .ggf-card{
        margin: 1rem auto;
        padding: 0.5rem;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        div:last-child{
            display: flex;
        }
    }
</style>