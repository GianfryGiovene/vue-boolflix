<template>
    <header>
        <div>
            <h1>BoolFlix</h1>
            <div>
                <SelectComponent @passChoice="sendChoise" :genreList="genreList"/>
                <input type="text" @keyup.enter="sendInputSaved" v-model="inputSaved" name="" placeholder="Cosa vuoi guardare?">
                <button @click="sendInputSaved">Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
import SelectComponent from '@/components/SelectComponent.vue'
export default {
    name:'HeaderComponent',
    data(){
        return{
            inputSaved:'',
            
        }
    },
    components:{
        SelectComponent,
    },
    props:{
        genreList:Array,
    },
    
    methods:{
        // input sent
        sendInputSaved(){
            this.$emit('getInputSaved', this.inputSaved);
        },
        sendChoise(choice){
            this.$emit('passChoice', choice);
        }

        
    },

}
</script>

<style lang="scss" scoped>
@import '~/src/styles/variables';
    header{
        background-color: $bg-header;
        min-height: 80px;
        padding: 10px 0;
        & > div{
            max-width: 1200px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:  10px 0;
            h1{
                color: $font-color-primary;
            }
            div{
                input{
                    margin-right: 20px;
                    display: inline-block;
                    height: 30px;
                    border-radius: 15px;
                    border: none;
                    padding: 0 10px;
                }
                button{
                    padding: 5px 20px;
                    border-radius: 15px;
                    border: 2px solid $font-color-primary;
                    background-color: $bg-header;
                    color: $font-color-primary;
                    cursor: pointer;
                }
            }
        }
    }
</style>