<template>
    <select @change="sendChoise" v-model="optionChoises" name="">
        <option value=''>All</option>
        <option :key="genre.id" v-for="genre in genreList" :value="genre.id">{{ genre.name }}</option>
    </select>
</template>

<script>
export default {
    name:'SelectComponent',

    data(){
        return{
            // potrebbe essere un number
            optionChoises: '',
        }
    },

    props:{
        genreList:Array,
    },
    methods:{
        sendChoise(){
            this.$emit('passChoice', this.optionChoises)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>