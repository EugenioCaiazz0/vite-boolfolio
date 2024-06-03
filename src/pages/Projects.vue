<script>
import axios from 'axios';
import {store} from '../data/store';

export default {
    name: "Projects",
    data() {
      return {
        projects: []
      }
    },
    methods: {
        getApi(){
            axios.get(store.apiUrl)
            .then(result => {
                console.log(result.data);
                this.projects = result.data.data;
            })
            .catch(error => {
                console.log(error.message);
            })
        }
    },
    mounted() {
        this.getApi();
    },
}

</script>

<template>
    <div>
        <h1>I miei progetti</h1>
        <ul>
            <li v-for="project in projects" 
            :key="project.id">
            {{ project.title }} - {{ project.author }}
            </li>
        </ul>
    </div>
</template>

<style>
</style>