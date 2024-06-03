<script>

import axios from 'axios';
import Header from './components/partials/Header.vue';

export default {
  components: {
      Header
  },
  /*methods: {
   
    },
    data() {
      return {
        'projects': []
      }
    },
    getApi(){
      axios.get("http://127.0.0.1:8000/api/projects")
      .then ( result => this.projects = result.data
      )
    },*/
  mounted(){
   /*this.getApi()*/
  }
}
</script>

<template>
  <div class="main-wrapper">
   <div class="container-fluid">
    <Header />
   </div>
   <div>
    <RouterView></RouterView>
   </div>
  
  </div>
</template>

<style>

</style>