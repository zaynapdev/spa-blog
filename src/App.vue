<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default{
  components:{
    Header,
    Footer
  },
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
  margin: auto;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
nav {
  padding: 2rem;
}

nav a{
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #276eb6;
}

nav .sign a.router-link-exact-active {
  color: #2c3e50;
}
nav .sign a.router-link-exact-active:hover{
  color: white;
}
.flex{
  display: flex;
  flex-wrap: wrap;
}
input{
  padding: .5rem 1rem;
}
.button{
  padding: 0.6rem 1rem;
  border: 1px solid#2c3e50;
  background: none;
  transition: .2s;
  cursor: pointer;
}
.button:hover{
  background:#276eb6;
  color: white;
}
form, .newpost{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
