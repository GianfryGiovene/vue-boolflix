<template>
  <div id="app">
    <HeaderComponent @getInputSaved="getInput" />
    <MainComponent/>
  </div>
</template>

<script>
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
      inputReadyToSent:'',
    }
  },
  methods:{
    getInput(inputSaved){
      this.inputReadyToSent = inputSaved;
      console.log('ci siamo',this.inputReadyToSent);
    }
  }
}
</script>

<style lang="scss">
@import '~/src/styles/general';
#app {
  width: 100%;
}
</style>
