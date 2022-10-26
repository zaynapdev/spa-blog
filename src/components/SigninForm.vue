<template>
  <form action="" @submit.prevent="auth()">
    <input type="email" v-model="login" id="a" placeholder="E-mail">
    <input type="password" v-model="password" placeholder="password">
    <input type="submit" value="Войти" class="button">
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import router from '@/router'

export default {
  name: 'Signin',
  setup(){
    const login = ref('')
    const password = ref('')
    const store = useStore()

    const auth = ()=>{
      store.dispatch('signIn', {email: login.value, password: password.value})
      router.replace('/')
    }


    return {login, password, store, auth}
  }
}
</script>

<style>

</style>