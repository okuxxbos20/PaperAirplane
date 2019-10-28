<template>
  <div class="header">
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="/" class="title">
      <router-link to="/" class="title"><b>PaperAirplane</b></router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="hamberger"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item"><router-link to="/product" class="nav-link main">PRODUCT</router-link></li>
        <li class="nav-item"><router-link to="/aboutus" class="nav-link main">ABOUT US</router-link></li>
        <li class="nav-item"><router-link to="/howto" class="nav-link main">HOW TO</router-link></li>
        <li class="nav-item"><router-link to="/comunity" class="nav-link main">COMUNITY</router-link></li>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" active>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">日本語</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
.header {
  background: var(--white);
  position: fixed;
  width: 100%;
  // z-index: 10;
}

.title {
  font-family: 'Open Sans', sans-serif;
  color: var(--mainColor)!important;
}

.navbar-toggler {
  color: var(--black)!important;
}

.main {
  color: rgba(0, 0, 0, 0.5) !important;
}

.item {
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
