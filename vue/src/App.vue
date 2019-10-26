<template>
  <div id="app">
    <Header/>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container parent">
      <p>-------router!!!-------</p>
        <router-link to="/product">PRODUCT</router-link>
        <router-link to="/aboutus">ABOUT US</router-link>
        <router-link to="/howto">HOW TO</router-link>
        <router-link to="/comunity">COMUNITY</router-link>
        <router-view class="router_view"></router-view>
      <p>-------router!!!-------</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Header,
    Footer
  }
}
</script>

<style lang="scss">
:root {
  --mainColor: #19b5fe;
  --subColor: #3bb4c1;
  --black: #2e3131;
  --white: #fff;
}
// font we use in Jaoanese by default
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');
// font we use in English by default
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#app {
  margin: 0;
  padding: 0;
  text-align: center;
}

a {
  text-decoration: none;
  margin: 10px;
}

.router_view {
  margin: 10px;
  border: 2px solid #ccc;
}

img {
  margin-top: 100px;
}
</style>
