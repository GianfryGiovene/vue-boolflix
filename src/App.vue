<template>
  <div id="app">
    <HeaderComponent 
      @getInputSaved="getInput"
      @passChoice="getChoice"
      :genreList="genres"
    />
    <MainComponent  
      :sentMoviesList="filterMoviesByGenre" 
      :sentSeriesList="filterSeriesByGenre" 
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
    filterMoviesByGenre(){
      let filteredMovieByGenre = this.movies
      if(this.selectedChoice !== ''){
        filteredMovieByGenre = filteredMovieByGenre.filter(({genre_ids})=> genre_ids.includes(this.selectedChoice));
        console.log(filteredMovieByGenre, 'cosa sto filtrando?', this.selectedChoice)
      }
      return filteredMovieByGenre;
    },
    filterSeriesByGenre(){
      let filteredSeriesByGenre = this.series
      if(this.selectedChoice !== ''){
        filteredSeriesByGenre = filteredSeriesByGenre.filter(({genre_ids})=> genre_ids.includes(this.selectedChoice));
      }
      return filteredSeriesByGenre;
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
    getChoice(choice){
      this.selectedChoice = choice;
    },
    // responses Axios 
    responseAPI(){
      this.queryAPI('movie').then(response=>{
        if(response.status === 200){
          this.searching = false;
          this.movies = response.data.results;
          console.log(this.movies, 'vediamo array di film')
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
                console.log(response, 'qui vediamo di capire il filtr genere')
                this.moviesGenres = response.data.genres;
                console.log('genre movie',this.moviesGenres);
            })
            this.queryApiForSelect('tv').then(response=>{
                this.seriesGenres = response.data.genres;
                this.noDuplicateGenre()
                console.log('genre serie',this.seriesGenres);
            })
        },

        queryApiForSelect(kindOfApi){
            return axios.get(`https://api.themoviedb.org/3/genre/${kindOfApi}/list?api_key=${this.apiKey}&language=it-IT`)
            .catch(error=>console.log('error',error))
        },

        noDuplicateGenre(){
            const  genreDuplicate = [...this.moviesGenres, ...this.seriesGenres];
            const ids = genreDuplicate.map(genre => genre.id);
            this.genres = genreDuplicate.filter(({id},index)=> !ids.includes(id,index + 1))
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
