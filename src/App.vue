<template>
  <div id="app">
    <HeaderComponent @getInputSaved="getInput" />
    <MainComponent  :sentMoviesList="movies" :sentSeriesList="series" />
  </div>
</template>

<script>
import axios from 'axios';
import {apikey} from './apikey';
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
      apiKey: apikey,
      apiUrl:'https://api.themoviedb.org/3/search/',
      inputReadyToSent:'',
      searching: false,
      movies:[],
      series:[],
    }
  },
  methods:{
    // function that has $emit as parameter  received from the header
    getInput(inputSaved){
      this.inputReadyToSent = inputSaved;
      if(!this.searching && this.inputReadyToSent.length > 0 ){
        this.responseAPI();        
      }
    },
    // responses Axios 
    responseAPI(){
      this.queryAPI('movie').then(response=>{
        if(response.status === 200){
          this.searching = false;
          this.movies = response.data.results;
        }
      });
      this.queryAPI('tv').then(response=>{
        if(response.status === 200){
          this.searching = false;
          this.series = response.data.results;
        }
      })
    },
    // return axios promise with custom api url
    queryAPI(kindOfApi){  
        this.searching = true;
        const params = {
          query: this.inputReadyToSent,
          api_key: this.apiKey,
          language: 'it-IT',
        }
        return axios.get(this.apiUrl + kindOfApi, {params}).catch(error=>{
            this.searching = false;
            console.log('error',error)
            })
    },
  },
}
</script>

<style lang="scss">
@import '~/src/styles/general';

#app {
  width: 100%;
}
</style>
