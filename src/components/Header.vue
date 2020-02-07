<template>
<div>
  <header>
    <router-link to="/" class="logo">PaperAirplane</router-link>
    <input class="menu-btn" type="checkbox" id="menu-btn"/>
    <label class="menu-icon" for="menu-btn">
      <span class="nav-icon"></span>
    </label>
    <ul class="menu">
      <li><router-link to="/product" class="nav-link main">PRODUCT</router-link></li>
      <li><router-link to="/howto" class="nav-link main">HOW TO</router-link></li>
    </ul>
  </header>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style lang="scss" scoped>
header {
  // border-bottom: 3px solid var(--mainColor);
  background-color: var(--backGround);
  position: fixed;
  height: 67.5px;
  width: 100%;
  z-index: 3;
  ul{
    background-color: var(--backGround);
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  li a {
    display: block;
    padding: 18px 30px;
    text-decoration: none;
    color: var(--text);
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    transition: .15s;
    &:hover {
      color: var(--mainColor);
      transform: scale(1.015);
    }
    .menu-btn {
      &:hover {
        color: var(--mainColor);
        transform: scale(1.015);
      }
    }
  }
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
  .menu {
    clear: both;
    max-height: 0;
    transition: max-height .4s;
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
  .menu-btn {
    display: none;
    &:checked ~ .menu {
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
}

@media (min-width: 100em) {
  header {
    li {
      float: left;
    }
    li a {
      padding: 20px 20px;
      margin: 0;
    }
    .menu-icon {
      display: none;
    }
  }
}
</style>
