<template>
    <div class="ggf-card">  
        <h3>{{title}}</h3>
        <span>{{span}}</span>
        <span>Lingua originale: <country-flag v-if="sendflag.includes(span2.toLowerCase())" :country='span2' size="small"/><span v-else>{{ span2 }}</span></span>
        <span>il voto è: {{score}}</span>
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    name: 'CardItem',
    components:{
        CountryFlag,
    },
    props: {
        sendflag: Array,
        title: String,
        imageUrl: String,
        span:  String,   
        span2: String,
        score: Number,
    },
}
</script>

<style lang="scss" scoped>
    .ggf-card{
        margin: 1rem auto;
        padding: 0.5rem;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
    }
</style>