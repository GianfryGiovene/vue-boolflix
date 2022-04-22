<template>
    <select v-model="optionChoises" name="">
        <option value=""></option>
    </select>
</template>

<script>
export default {
    name:'SelectComponent',
    data(){
        return{
            optionChoises: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>