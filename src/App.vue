<template>
  <div id="app">
    <HeaderComponent @getInputSaved="getInput" />
    <MainComponent  :sentMoviesList="movies" :sentSeriesList="series" />
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
      searching:false,
      movies:[],
      series:[]
    }
  },
  methods:{
    getInput(inputSaved){
      this.inputReadyToSent = inputSaved;
      if(!this.searching && this.inputReadyToSent.length>0 ){
        this.queryAPI('movie').then(response=>{
            if(response.status===200){
              this.searching = false;
              this.movies = response.data.results;
              console.log('questo movies',this.movies);
            }
          });
        this.queryAPI('tv').then(response=>{
            if(response.status===200){
              this.searching = false;
              this.series = response.data.results;
              console.log('questo serie',this.series);
            }
          })
          console.log('movie',this.movies,'series',this.series)
      }
    },

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
    }
  },
}
</script>

<style lang="scss">
@import '~/src/styles/general';
#app {
  width: 100%;
}
</style>
