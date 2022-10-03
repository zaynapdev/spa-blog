<template>
  <form action="" @submit.prevent="saveUser(name, login, password)">
    <input type="text" v-model="name">
    <input type="email" name="" v-model="login">
    <input type="password" name=""  v-model="password">
    <input type="submit">
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    name: 'Signup',
    setup(){
        const name = ref('')
        const login = ref('')
        const password = ref('')
        const store = useStore()

        const saveUser = (name, login, password)=>{
          if(name != '' && login != '' && password != ''){
            store.commit('addNewUser', {name, login, password})
            console.log(store.getters.users)
          }
        }
        
        return {name, login, password, store, saveUser}
    },
}
</script>

<style>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
</style>