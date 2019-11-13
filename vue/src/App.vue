<template>
  <div id="app">
    <!-- <Header/> -->
    <!-- <Header02/> -->
    <Header03/>
    <div style="height: 56px;"></div>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
// import Header from './components/Header.vue';
// import Header02 from './components/Header02.vue';
import Header03 from './components/Header03.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    // Header,
    // Header02,
    Header03,
    Footer
  }
};
</script>

<style lang="scss">
:root {
  --mainColor: #19b5fe;
  --subColor: #3bb4c1;
  --backGround: #f9f9f9;
  --text: #333;
  --border: #e7e7e7;
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
  background: var(--white);
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
