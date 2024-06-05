<script>
import axios from 'axios';
import { store } from '../data/store';


export default {
    name: "Contacts",
    data() {
        return {
            name : '',
            email : '',
            message : ''
        }
    },
    methods: {
        sendEmail() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(store.apiUrl + '/sendEmail', data)
                .then(result => {
                    console.log(result.data);
                }) 

            console.log(data);
        }
    },
}

</script>

<template>
   
   <div>
        <form @submit.prevent="sendEmail">
            <div>
                <div>
                    <label for="name"> Nome </label>
                    <input v-model="name" type="text" name="names" id="name"/>
                </div>
                <div>
                    <label for="email"> E-mail </label>
                    <input v-model="email" type="text" name="email" id="email"/>
                </div>
                <div>
                    <label for="message"> Messaggio </label>
                    <textarea v-model="message" name="message" id="message"> </textarea> 
                </div>
                <div>
                    <button type="submit"> Invia </button>
                </div>
            </div>
        </form>
    </div>

</template>

<style>
</style>