<template>
  <div id="app" :style="{background: BgFunc()}">
    <Header/>
    <div style="height: 56px;"></div>
      <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    const isDark = this.$store.state.isDark;
    return { color, light, dark, isDark };
  },
  methods: {
    BgFunc: function () {
      var currentTheme = !this.$store.getters.rtnIsDark ? this.light.backGround : this.dark.backGround;
      console.log(this.isDark);
      return currentTheme;
    }
  }
};
</script>

<style lang="scss">
:root {
  --mainColor: #19b5fe;
  --subColor: #3bb4c1;
  --backGround: #fff;
  --text: #333;
  --footertext: #ececec;
  --border: #e7e7e7;
  --black: #2e3131;
  --white: #fff;
  --paperBackGround: #fbfbfb;
  // dark mode
  // --backGround: #353535;
  // --text: #ececec;
  // --footertext: #353535;
  // --paperBackGround: #404040;
}
// font we use in Jaoanese by default
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');
// font we use in English by default
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#app {
  margin: 0;
  padding: 0;
  background: var(--backGround);
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
ul {
  list-style: none;
}
</style>
