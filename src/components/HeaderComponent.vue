<template>
    <header>
        <div>
            <h1>BoolFlix</h1>
            <div>
                <label for="search">Inserire parola chiave per la ricerca</label>
                <input type="text" @keyup.enter="sendInputSaved" v-model="inputSaved" name="" id="search">
                <button @click="sendInputSaved">Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'HeaderComponent',
    data(){
        return{
            inputSaved:'',
        }
    },
    methods:{
        sendInputSaved(){
            console.log(this.inputSaved);
            this.$emit('getInputSaved', this.inputSaved);
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        border: 1px solid red;
        background-color: grey;
        & > div{
            max-width: 1200px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>