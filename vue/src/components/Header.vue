<template>
  <div class="header">
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#" class="title"><b>PaperAirplane</b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" class="item" active>PRODUCT</b-nav-item>
        <b-nav-item href="#" class="item" active>ABOUT US</b-nav-item>
        <b-nav-item href="#" class="item" active>HOW TO</b-nav-item>
        <b-nav-item href="#" class="item" active>COMUNITY</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
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

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

.header {
  background-color: var(--mainColor);
  position: fixed;
  width: 100%;
  z-index: 10;
}

.title {
  font-family: 'Open Sans', sans-serif;
  color: var(--white);
}

.item {
  transition: 0.3s;
}

.item:hover {
  transform: scale(1.1);
}
</style>
