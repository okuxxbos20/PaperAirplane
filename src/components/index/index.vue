<template :style="{ background: colorFunc().BackGround }">
  <div
    class="index"
    :style="{ color: colorFunc().text, height: forIndexHeight() }"
  >
    <main>
      <div class="howtoAndInstall">
        <img src="../../assets/logo_deepSkyBlue.svg" alt="logo">
        <h1 class="title"><b>PaperAirplane</b></h1>
        <h6 class="subtitle">{{ subphrase[subPhrase()] }}</h6>
        <div class="btn_parent row justify-content-center">
          <router-link to="/" class="btn btn_install col-md-3">INSTALL</router-link>
          <router-link to="/howto" class="btn btn_howto col-md-3">HOW TO</router-link>
        </div>
        <p>
          <router-link to="/aboutus/blog">
            <code class="version">currently  v1.0.0</code>
          </router-link>
        </p>
      </div>
      <ClassCode @enterButtonClicked="enterButtonClicked" />
    </main>
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
      var BackGround = !this.$store.getters.g_isDark ? this.light.backGround : this.dark.backGround;
      var text = !this.$store.getters.g_isDark ? this.light.text : this.dark.text;
      return { BackGround, text };
    },
    forIndexHeight: function() {
      return window.innerHeight.toString() + 'px';
    },
    enterButtonClicked: function(classcode) {
      console.log(`ENTER BUTTON CLICKED: ${classcode}`);
      this.$router.push('class');
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  text-align: center;
  main {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform : translate(-50%,-50%);
    transform : translate(-50%,-50%);
    width: 100%;
  }
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
    .btn_parent {
      width: 70%;
      margin: 0 auto;
    }
    .btn_howto {
      background: #19b5fe;
      color: var(--white);
      border-radius: 17px;
      transition: 0.3s;
      margin: 5px;
      &:hover{ transform:scale(1.025); }
    }
    .btn_install {
      background: #3bb4c1;
      color: var(--white);
      border-radius: 17px;
      transition: 0.3s;
      margin: 5px;
      &:hover{ transform:scale(1.025); }
    }
    .version {
      color: var(--mainColor);
    }
  }
}
</style>
