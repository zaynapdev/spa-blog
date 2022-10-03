<template>
    <div class="post-view">
        <PostBlock class="fullpost" :img="post.img" :title="post.title" :id="post.id" :path="'#'" :link="'back'"/>
        <p>{{post.text}}</p>
        <router-link to="/posts">back</router-link>
    </div>
</template>

<script>
import PostBlock from '@/components/Post.vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {computed, onMounted} from 'vue'

export default{
  components:{
    PostBlock
  },
  setup(){
    const store = useStore()
    const route = useRoute()
    const id = route.params.id
    const post = computed(()=>{
      return store.getters.posts[id-1]
    })
    onMounted(()=>{
    })

    return {post}
  }
  
}
</script>

<style>
.fullpost{
  width: 100%;
}
.fullpost *{
  cursor: inherit;
}
a{
  color: #2c3e50;
  text-decoration: none;
}
</style>