<template>
  <header :style="{ background: BgFunc().backGround }">
    <router-link to="/" class="logo">PaperAirplane</router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn"/>
    <label class="menu-icon" for="menu-btn">
      <span class="nav-icon"></span>
    </label>
    <ul class="dropdown" :style="{ background: BgFunc().backGround, color: BgFunc().text }">
      <li><router-link to="/product" class="nav-link">Product</router-link></li>
      <li><router-link to="/aboutus/blog" class="nav-link">Blog</router-link></li>
      <li><router-link to="/aboutus/get-in-touch" class="nav-link">Get in touch</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  },
  data() {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return { color, light, dark };
  },
  methods: {
    BgFunc: function () {
      var backGround = !this.$store.getters.g_isDark ? this.light.backGround : this.dark.backGround;
      var text = !this.$store.getters.g_isDark ? this.light.text : this.dark.text;
      return { backGround, text };
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  height: 67.5px;
  width: 100%;
  z-index: 3;
  .logo {
    color: var(--mainColor);
    display: inline-block;
    float: left;
    font-size: 25px;
    padding: 12px 20px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
  .menu-btn {
    display: none;
    &:checked ~ .dropdown {
      max-height: 240px;
    }
    &:checked ~ .menu-icon .nav-icon {
      background: transparent;
    }
    &:checked ~ .menu-icon .nav-icon {
      &:before {
        transform: rotate(-45deg);
        top:0;
      }
      &:after {
        transform: rotate(45deg);
        top:0;
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    float: right;
    padding: 28px 30px;
    position: relative;
    user-select: none;
    .nav-icon {
      background: var(--mainColor);
      display: block;
      height: 2.5px;
      position: relative;
      top: 7px;
      transition: .1s ease-out;
      width: 20px;
      border-radius: 10px;
      &:before, &:after {
        background: var(--mainColor);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all .1s ease-out;
        width: 120%;
        border-radius: 10px;
      }
      &:before {
        top: 8px;
      }
      &:after {
        top: -8px;
      }
    }
  }
  .dropdown {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    clear: both;
    max-height: 0;
    transition: .4s;
    .nav-link {
      color: var(--mainColor);
      padding: 18px 30px;
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      transition: .15s;
      &:hover {
        color: var(--mainColor);
        transform: scale(1.015);
      }
    }
  }
}
</style>
