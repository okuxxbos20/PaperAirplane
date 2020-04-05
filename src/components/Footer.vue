<template>
<div class="footer">
  <div :class="{darka : this.$store.getters.rtnIsDark, lighta : !this.$store.getters.rtnIsDark}" :style="{color: FooterTextFunc()}">
    <ul class="nav justify-content-center mb-3">
      <ul class="parent nav flex-column col-md-2 col-xs-1">
        <li class="nav-item"><router-link to="/product" class="nav-link main"><b>PRODUCT</b></router-link></li>
        <li class="nav-item"><router-link to="/product-presenters" class="nav-link sub">For Presenters</router-link></li>
        <li class="nav-item"><router-link to="/product-audience" class="nav-link sub">For Audiences</router-link></li>
      </ul>
      <ul class="parent nav flex-column col-md-2 col-xs-1">
        <li class="nav-item"><router-link to="/aboutus" class="nav-link main"><b>ABOUT US</b></router-link></li>
        <li class="nav-item"><router-link to="/blog" class="nav-link sub">Blog</router-link></li>
        <li class="nav-item"><router-link to="/get-in-touch" class="nav-link sub">Get in touch</router-link></li>
      </ul>
      <ul class="parent nav flex-column col-md-2 col-xs-1">
        <li class="nav-item"><router-link to="/howto" class="nav-link main"><b>HOW TO</b></router-link></li>
        <li class="nav-item"><router-link to="/terms" class="nav-link sub">Terms</router-link></li>
        <li class="nav-item"><router-link to="/privacy" class="nav-link sub">Privacy</router-link></li>
      </ul>
    </ul>

    <ul class="footer-sns">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/paperairplane.jp/"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-gitlab"></i></a>
    </ul>
    <button
      type="button"
      name="button"
      class="switch"
      :style="style_switchbg()"
      @click="DarkMode()"
    >
      <i class="far fa-moon moon" v-show="!r_isDark()"></i>
      <i class="far fa-lightbulb light" v-show="r_isDark()"></i>
    </button>
    <p class="copylight"><small lang="en">©2020 PaperAirplane Inc.</small></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    const icon = {
      sun: 'SUN', moon: 'MOON'
    };
    return { color, light, dark, icon };
  },
  methods: {
    DarkMode: function() {
      this.$store.commit('LightToDark');
    },
    FooterTextFunc: function() {
      return !this.$store.getters.rtnIsDark ? this.light.footertext : this.dark.footertext;
    },
    r_isDark: function () {
      return !this.$store.getters.rtnIsDark;
    },
    style_switchbg: function () {
      return { background: this.r_isDark() ? '' : '#353535' };
    }
  }
}
</script>

<style lang="scss" scoped>
.lighta a {
  color: var(--footertext);
}

.darka a {
  color: #353535;
}

.footer {
  position: relative;
  background: var(--subColor);
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding: 20px 0 10px;
  margin-top: 30px;
  .parent {
    padding: 0;
    width: 125px;
  }
  .main {
    padding: 8px 16px;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      transform: scale(1.1)
    }
  }
  .sub {
    padding: 8px 0;
    text-align: center;
    font-size: 13px;
    transition: 0.2s;
    &:hover {
      color: #6c7a89;
    }
  }
  .footer-sns {
    text-align: center;
    margin: 35px 0 15px;
    .fab {
      font-size: 25px;
      transition: 0.3s;
      margin-right: 30px;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  .switch {
    font-size: 18px;
    width: 40px;
    height: 40px;
    padding: 3px;
    position: absolute;
    right: 1.8%;
    bottom: 5%;
    border: none;
    border-radius: 50%;
    transition: 0.5s;
    &:focus {
      outline: none;
    }
    .moon {
      color: #eee;
    }
    .light {
      color: #777;
    }
  }
  .copylight {
    text-align: center;
    margin-bottom: 5px;
    font-size: 15px;
  }
}
</style>
