<template>
  <div v-if="user">
    <h1>Привет, тут все ваши посты :> <button class="button" @click="newPost">Добавить</button></h1>
    <NewPost v-if="checkAdding" @addpost="addNewPost"/>
    <div class="allposts flex" v-else>
      <router-link class="post" :to="post.path" v-for="post in posts" :key="post.id">
        <PostBlock class="post-content"  :img="post.img" :title="post.title" link="more"/>
      </router-link>
    </div>
  </div>
  <div v-else>
    <h1>Авторизуйтесь чтобы видеть посты</h1>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import PostBlock from '@/components/Post.vue'
import NewPost from '@/components/NewPost.vue'
import {computed, onMounted, ref} from 'vue'

export default {
  components:{
    PostBlock,
    NewPost
  },
  setup(){
    const store = useStore()
    const user = store.getters.checkIfLogged
    const checkAdding = ref(false)
    const posts = computed(()=>{
      return store.getters.posts.filter(post => post.userId == user.id)
    })
    const newPost = ()=>{
      checkAdding.value = !checkAdding.value
    }
    const addNewPost = (title, text)=>{
      store.commit('addNewPost', {userId: user.id, title, text})
      checkAdding.value = !checkAdding.value
      console.log(user)
    }

    return {posts, user, newPost, checkAdding, addNewPost}
  }
}
</script>

<style>
.post{
  width: calc(1400px - 75%);
  /* box-shadow: inset 0px 0px 1px 0px black;
  padding: 1rem 2rem;
  flex-direction: column;
  align-items: center;
  position: relative; */
}
.post-content{
  height: 100%;
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