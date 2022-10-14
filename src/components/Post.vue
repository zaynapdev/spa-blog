<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'PostBlock',
  props:{
    path: String,
    id: Number,
    title: String,
    img: String
  },
  setup() {
      
  },
}
</script>

<style>
</style>