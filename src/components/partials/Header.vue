<script>

</script>

<template>
  <div class="header container-fluid">
    <nav>
      <li class=""><router-link class="li btn " :to="{name:'home'}">Home</router-link></li>
      <li class=""><router-link class="li btn " :to="{name:'about'}">About</router-link></li>
      <li class=""><router-link class="li btn " :to="{name:'projects'}">Projects</router-link></li>
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
    .li {
      text-decoration: none;
      color: red;
      text-align: center;
      padding: 0 20 px;
      &.active{
        color: yellow;
        }
    }
  }
}

</style>