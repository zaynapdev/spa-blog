<template>
  <form action="" @submit.prevent="saveUser(name, login, password)">
    <input type="text" v-model="name" placeholder="Name">
    <input type="email" v-model="login" placeholder="E-mail">
    <input type="password"  v-model="password" placeholder="password">
    <input class="submit" type="submit" value="Зарегистрироваться">
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
          const check = store.getters.users.find(user => user.login == login)
          if(name != '' && login != '' && password != '' && !check){
            store.commit('signUp', {name, login, password})
          }
          if(check){alert('this e-mail is already used')}

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