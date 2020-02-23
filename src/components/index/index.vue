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

    <div class="enterYourClass">
      <h6>Enter Your Class Code.</h6>
        <div>
          <input type="text" class="classCode" maxlength="1" v-model="code1" ref="r1">
          <input type="text" class="classCode" maxlength="1" v-model="code2" ref="r2" @keyup.delete="back2">
          <input type="text" class="classCode" maxlength="1" v-model="code3" ref="r3" @keyup.delete="back3">
          <input type="text" class="classCode" maxlength="1" v-model="code4" ref="r4" @keyup.delete="back4">
          <input type="text" class="classCode" maxlength="1" v-model="code5" ref="r5" @keyup.delete="back5">
          <input type="text" class="classCode" maxlength="1" v-model="code6" ref="r6" @keyup.delete="back6">
        </div>
      <div class="enterBtn">
        <router-link to="/class">
          <button type="submit" ref="enter" @keyup.delete="backEnter">ENTER</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return {
      color, light, dark,
      subphrase: [
        'Where We Talk.', 'For Awesome Presenters.', 'Coming soon.',
        'Do Something Fun.', 'Go Your Way.', 'No border.'],
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      classcode: ['Ω', 'Ω', 'Ω', 'Ω', 'Ω', 'Ω' ]
    }
  },
  watch: {
    code1: function(num) {
      if (num.length >= 1) {
        this.$refs.r2.focus();
        this.classcode[0] = num;
      }
      // num.length >= 1 ? this.$refs.r2.focus(), this.classcode[0] = num;
    },
    code2: function(num) {
      if (num.length >= 1) {
        this.$refs.r3.focus();
        this.classcode[1] = num;
      }
    },
    code3: function(num) {
      if (num.length >= 1) {
        this.$refs.r4.focus();
        this.classcode[2] = num;
      }
    },
    code4: function(num) {
      if (num.length >= 1) {
        this.$refs.r5.focus();
        this.classcode[3] = num;
      }
    },
    code5: function(num) {
      if (num.length >= 1) {
        this.$refs.r6.focus();
        this.classcode[4] = num;
      }
    },
    code6: function(num) {
      if (num.length >= 1) {
        this.$refs.enter.focus();
        this.classcode[5] = num;
        return this.classcode;
      }
    }
  },
  methods: {
    subPhrase: function() {
      return Math.floor(Math.random() * this.subphrase.length);
    },
    back2: function(num) {
      if (num.target.value == "") { this.$refs.r1.focus() }
    },
    back3: function(num) {
      if (num.target.value == "") { this.$refs.r2.focus() }
    },
    back4: function(num) {
      if (num.target.value == "") { this.$refs.r3.focus() }
    },
    back5: function(num) {
      if (num.target.value == "") { this.$refs.r4.focus() }
    },
    back6: function(num) {
      if (num.target.value == "") { this.$refs.r5.focus() }
    },
    backEnter: function() { this.$refs.r6.focus() },
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
.index {
  text-align: center;
  margin: 0 auto; 
  padding: 56px 0 137px;
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

  .enterYourClass {
    margin: 60px 0 0;
    font-family: 'Open Sans', sans-serif;
    h6 {
      font-size: 17px;
      font-weight: bold;
    }
    .classCode {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      font-size: 30px;
      font-weight: bold;
      color: var(--mainColor);
      border: 4px solid var(--mainColor);
      background: transparentize(#000, 1);
      margin: 2px;
      text-align: center;
      @media screen and (max-width: 375px) {
        width: 45px;
        height: 45px;
        border-radius: 15px;
        font-size: 20px;
      }
    }
    .enterBtn {
      margin: 20px 0;
      button {
        width: 250px;
        height: 45px;
        color: var(--white);
        font-weight: bold;
        background: var(--mainColor);
        border: none;
        border-radius: 150px;
        transition: 0.3s;
        &:hover {
          color: var(--mainColor);
          background: var(--backGround);
          border: 4px solid var(--mainColor);
        }
      }
    }
  }

}
</style>
