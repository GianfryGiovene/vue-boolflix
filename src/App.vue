<template>
  <div id="app">
    <HeaderComponent @getInputSaved="getInput" />
    <MainComponent  :sendList="movies"/>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue'

export default {
  name: 'App',
  components: { 
    HeaderComponent,
    MainComponent
  },
  data(){
    return{
      apiKey:'941815c5e331ca168a23b432e7f83189',
      apiUrl:'https://api.themoviedb.org/3/search/',
      inputReadyToSent:'',
      movies:[]
    }
  },
  methods:{
    getInput(inputSaved){
      this.inputReadyToSent = inputSaved;
      console.log('ci siamo',this.inputReadyToSent,);
      this.queryAPI('movie')
    },

    queryAPI(kindOfApi){
      
        const params = {
          query: this.inputReadyToSent,
          api_key: this.apiKey,
          language: 'it-IT',
        }
        axios.get(this.apiUrl + kindOfApi, {params}).then(response=>{
          if(response.status===200)
            this.movies = response.data.results
            console.log('i film',this.movies);
        }).catch(error=>console.log('error',error))
    }
  },
  // mounted(){
  //   this.queryAPI('movie')
  // }

  

}
</script>

<style lang="scss">
@import '~/src/styles/general';
#app {
  width: 100%;
}
</style>
