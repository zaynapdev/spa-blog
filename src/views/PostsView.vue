<template>
  <div>
    <h1>Привет, тут все посты блога :)</h1>
    <div class="allposts flex">
      <PostBlock class="post" v-for="post in posts" :img="post.img" :path="post.path" :key="post.id" :title="post.title" :link="'more'"/>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import PostBlock from '@/components/Post.vue'
import {computed, onMounted} from 'vue'

export default {
  components:{
    PostBlock
  },
  setup(){
    const store = useStore()
    const posts = computed(()=>{
      return store.getters.posts
    })
    onMounted(()=>{
    })

    return {posts}
  }
}
</script>

<style>
.post{
  width: calc(1400px - 75%);
  box-shadow: inset 0px 0px 1px 0px black;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.post:hover{
  box-shadow:0px 0px 4px 0px black;
}
.post img{
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.post h1{
  height: calc(87% - 217px);
}
</style>