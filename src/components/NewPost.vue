<template>
  <div class="newpost">
    <input type="text" class="title" placeholder="Title" v-model="title">
    <textarea name="" id="" cols="25" rows="8" v-model="text"></textarea>
    <input type="submit" value="Добавить" class="button" @click="$emit('addpost', title, text)">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'NewPost',
  setup(){
    const title = ref('')
    const text = ref('')

    return {title, text}
  }
}
</script>

<style>
</style>