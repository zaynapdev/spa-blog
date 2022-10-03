<template>
  <div>
    <router-link class="link" :to="{ path: path }">
      <h1>{{ title }}</h1>
      <img :src="img" alt="">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PostBlock',
  props:{
    path: String,
    id: Number,
    title: String,
    img: String,
    link: String
  },
  setup() {
      
  },
}
</script>

<style>
</style>