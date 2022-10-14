<template>
  <nav>
    <div class="nav" v-if="store.getters.checkIfLogged">
      <router-link to="/signin">
        <button @click="store.commit('logOut')" class="button" >log out</button>
      </router-link>
    </div>
    <div class="sign nav" v-else>
      <router-link to="/signin" class="button">sign in</router-link>
      <router-link to="/signup" class="button">sign up</router-link>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'Header',
  setup(){
    const store = useStore()

    return {store}
  }
}
</script>

<style>
nav{
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.nav{
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>