<template>
  <div class="index container" :style="{color: colorFunc()}">
    <div class="howtoAndInstall">
      <img src="../../assets/logo_deepSkyBlue.svg" alt="logo">
      <h1 class="title"><b>PaperAirplane</b></h1>
      <h6 class="subtitle">{{ subphrase[subPhrase()] }}</h6>
      <div class="row justify-content-center mx-5">
        <router-link to="/" class="btn btn-install col-md-3 mb-2">INSTALL</router-link>
        <router-link to="/howto" class="btn btn-howto col-md-3 mb-2">HOW TO</router-link>
      </div>
      <p><code style="color: #19b5fe;">currently  v1.0.0</code></p>
    </div>

    <ClassCode/>
  </div>
</template>

<script>
import ClassCode from './class-code.vue';

export default {
  components: { ClassCode },
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return {
      color, light, dark,
      subphrase: [
        'Where We Talk.', 'For Awesome Presenters.', 'Coming soon.',
        'Do Something Fun.', 'Go Your Way.', 'No border.'],
    }
  },
  methods: {
    subPhrase: function() {
      return Math.floor(Math.random() * this.subphrase.length);
    },
    colorFunc: function() {
      return !this.$store.getters.rtnIsDark ? this.light.text : this.dark.text;
    }
  }
}
const w = window.innerWidth;
const h = window.innerHeight;
console.log('width: ' + w);
console.log('height: ' + h);
</script>

<style lang="scss" scoped>
html {
  height: 100%;
}

.index {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  .howtoAndInstall {
    img {
      height: 200px;
      width: 200px;
    }
    .title {
      font-family: 'Open Sans', sans-serif;
      color: var(--mainColor);
    }
    .subtitle {
      font-family: 'Open Sans', sans-serif;
      font-size: 17px;
      font-weight: bold;
    }
    .btn-howto {
      background: #19b5fe;
      color: var(--white);
      border-radius: 17px;
      transition: 0.3s;
      margin: 5px;
      &:hover{
        transform:scale(1.025);
      }
    }
    .btn-install {
      background: #3bb4c1;
      color: var(--white);
      border-radius: 17px;
      transition: 0.3s;
      margin: 5px;
      &:hover{
        transform:scale(1.025);
      }
    }
  }
}
</style>
