<template>
  <div id="app">
    <router-link to="/" exact>Home</router-link>
    <router-link to="/vue-HelloWorld">Main</router-link>
    <router-link to="/vue-subComp">Sub</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  margin-right: 10px;
}
.view {
  height:100vh;
  width:100vw;
  background-color:lightgrey;
}
</style>
