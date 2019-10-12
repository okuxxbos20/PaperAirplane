<template>
  <div id="app">
    <Header/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    Footer
  }
}
</script>

<style>
:root {
  --mainColor: #19b5fe;
  --subColor: #3bb4c1;
  --black: #2e3131;
  --white: #fff;
}

#app {
  margin: 0;
  padding: 0;
  text-align: center;
}

img {
  margin-top: 100px;
}
</style>
