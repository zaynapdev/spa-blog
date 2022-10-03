<template>
  <form action="" @submit.prevent="ishere">
    <input type="email" v-model="login">
    <input type="password" name="" id="" v-model="password">
    <input type="text">
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    name: 'Signin',
    setup(){
        const login = ref('')
        const password = ref('')
        const store = useStore()

        ishere=()=>{
            console.log(store.getters.users)
        }

        return {login, password, store}
    }
}
</script>

<style>

</style>