<template>
  <div id="app">
    <Header/>
    <div style="height: 100px;"></div>
    <div class="container">
      <p>-------router!!!-------</p>
        <router-view class="router_view"></router-view>
      <p>-------router!!!-------</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
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
  &:hover {
    text-decoration: none;
  }
}

.router_view {
  margin: 10px;
  border: 2px solid #ccc;
}
</style>
