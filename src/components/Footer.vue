<template>
  <footer>
    <div class="info">blog about cats <br>©2022</div>
    <div class="icons">more</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
footer{
  background: gainsboro;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.info{
  text-align: left;
}
</style>