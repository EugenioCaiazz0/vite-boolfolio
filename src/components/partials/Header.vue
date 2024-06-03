<script>

</script>

<template>
  <div class="header container-fluid">
    <nav>
      <li class=""><router-link class="li-style btn btn-outline-secondary" :to="{name:'home'}">Home</router-link></li>
      <li class=""><router-link class="li-style btn btn-outline-secondary" :to="{name:'about'}">About</router-link></li>
      <li class=""><router-link class="li-style btn btn-outline-secondary" :to="{name:'projects'}">Projects</router-link></li>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  background-color: skyblue;
  nav{
    display: flex;
    width: 100%;
    list-style: none;
    .li-style {
      text-decoration: none;
      color: white;
      text-align: center;
    }
  }
}
</style>