<template>
  <form action="" @submit.prevent="auth(loginin, passwordin)">
    <input type="email" v-model="loginin" id="a" placeholder="E-mail">
    <input type="password" v-model="passwordin" placeholder="password">
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
        console.log('input password')
      } else if (p != checkUser.password) {
        console.log('wrong password')
      } else {
        store.commit('signIn', checkUser)
        router.replace({name: 'home'})
      }
    }


    return {loginin, passwordin, store, auth}
  }
}
</script>

<style>

</style>