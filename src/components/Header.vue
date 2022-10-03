<template>
  <nav>
    <div class="sign nav">
      <router-link to="/signin">sign in</router-link>
      <router-link to="/signup">sign up</router-link>
    </div>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
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
  gap: 2rem;
}
.sign button{
  background-color: none;
  border-color: #2c3e50;
  cursor: pointer;
}
.sign button:hover{
  background-color: #2c3e50;
  color: white;
}
</style>