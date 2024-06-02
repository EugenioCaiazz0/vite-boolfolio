<script>

import axios from 'axios';

export default {
  methods: {
    data() {
      return {
        'projects': []
      }
    },
    getApi(){
      axios.get("http://127.0.0.1:8000/api/projects")
      .then ( result => this.projects = result.data
      )
    },
  },
  mounted(){
   this.getApi()
  }
}
</script>

<template>
  <div class="main-wrapper">
   
   <ul>
    <li v-for="project in projects" 
    :key="project.id">
      {{$project.title}} 
      <!--{{$project.author}} 
      {{$project.date_of_creation}} 
      {{$project.description}} -->
    </li>
   </ul>

  </div>
</template>

<style>

</style>