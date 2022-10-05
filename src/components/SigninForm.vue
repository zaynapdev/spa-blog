<template>
  <form action="" @submit.prevent="auth(loginin, passwordin)">
    <input type="email" v-model="loginin" id="a" placeholder="E-mail">
    <input type="password" v-model="passwordin" placeholder="password">
    <input type="submit" value="Войти">
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  name: 'Signin',
  setup(){
    const loginin = ref('')
    const passwordin = ref('')
    const store = useStore()

    const auth=(l, p)=>{
      const checkUser = store.getters.users.find(user=> user.login == l)
      if (l == '') {
        console.log('input login')
      }else if(!checkUser){
        console.log('wrong login')
      } else if (p == '') {
        console.log('input passwordw')
      } else if (p != checkUser.password) {
        console.log('wrong password')
      } else {
        store.commit('signIn')
        console.log(true)
      }
    }


    return {loginin, passwordin, store, auth}
  }
}
</script>

<style>

</style>