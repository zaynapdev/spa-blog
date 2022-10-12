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
import {computed} from 'vue'

export default{
  components:{
    PostBlock
  },
  setup(){
    const store = useStore()
    const route = useRoute()
    const id = route.params.id
    const user = store.getters.checkIfLogged
    const post = computed(()=>{
      return store.getters.posts[user.id][id-1]
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
</style>