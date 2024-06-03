<script>

import axios from 'axios';
import Header from './components/partials/Header.vue';
import { store } from './data/store';

export default {
  components: {
      Header
  },
  mounted(){
  }
}
</script>

<template>
  <div class="main-wrapper">
   
    <div class="container-fluid">
    <Header />
   </div>

   <main>
    <RouterView></RouterView>
   </main>
  
  </div>
</template>

<style>

</style>