<template>
  <div id="app">
    <HeaderComponent 
      @getInputSaved="getInput"
      @passChoice="getChoice"
      :genreList="genres"
    />
    <MainComponent  
      :sentMoviesList="movies" 
      :sentSeriesList="series" 
      :apiKey="apiKey" 
    />
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
      // data for cards
      movies:[],
      series:[],
      // data for select
      moviesGenres:[],
      seriesGenres:[],
      genres: [],
      selectedChoice:'',
    }
  },
  computed:{
    // DA COMPLETAREEE 
    // filterMoviesByGenre(){
    //   const filteredMovieByGenre = this.movies
    //   if(this.selectedChoice !==''){
    //     filteredMovieByGenre = filteredMovieByGenre.filter(({title})=>)
    //   }
    // }
  },
  methods:{
    // function that has $emit as parameter  received from the header
    getInput(inputSaved){
      this.inputReadyToSent = inputSaved;
      if(!this.searching && this.inputReadyToSent.length > 0 ){
        this.responseAPI();      
      }
    },
    getChoice(choice){
      this.selectedChoice = choice;
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

    // prova passaggio array genere
        askForGenres(){
            
            this.queryApiForSelect('movie').then(response=>{
                this.moviesGenres = response.data.genres.map(item => item.name);
                
                console.log('genre movie',this.moviesGenres);
            })
            this.queryApiForSelect('tv').then(response=>{
                this.seriesGenres = response.data.genres.map(item => item.name);
                this.noDuplicateGenre()
            console.log('genre serie',this.seriesGenres);
            })

            
        },

        queryApiForSelect(kindOfApi){
            return axios.get(`https://api.themoviedb.org/3/genre/${kindOfApi}/list?api_key=${this.apiKey}&language=it-IT`)
            .catch(error=>console.log('error',error))
        },

        noDuplicateGenre(){
            
            const  genresDuplicate = [...this.moviesGenres, ...this.seriesGenres];
            this.genres = [...new Set(genresDuplicate)];
            
        }
  },
  created(){
      this.askForGenres();
      
  }

}
</script>

<style lang="scss">
@import '~/src/styles/general';

#app {
  width: 100%;
}
</style>
