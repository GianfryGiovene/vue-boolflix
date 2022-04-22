<template>
    <select @change="sendChoise" v-model="optionChoises" name="">
        <option value="">All</option>
        <option :key="genre" v-for="genre in genreList" :value="genre">{{ genre }}</option>
    </select>
</template>

<script>
export default {
    name:'SelectComponent',

    data(){
        return{
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