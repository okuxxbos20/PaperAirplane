<template>
<div class="footer">
  <div>
    <ul class="nav justify-content-center mb-3">
      <ul class="parent nav flex-column col-md-2 col-xs-1">
        <li class="nav-item"><router-link to="/product" class="nav-link main"><b>PRODUCT</b></router-link></li>
        <li class="nav-item"><router-link to="/product-presenters" class="nav-link sub">For Presenters</router-link></li>
        <li class="nav-item"><router-link to="/product-audience" class="nav-link sub">For Audiences</router-link></li>
      </ul>
      <ul class="parent nav flex-column col-md-2 col-xs-1">
        <li class="nav-item"><router-link to="/aboutus" class="nav-link main"><b>ABOUT US</b></router-link></li>
        <li class="nav-item"><router-link to="/get-in-touch" class="nav-link sub">Get in touch</router-link></li>
        <li class="nav-item"><router-link to="/support" class="nav-link sub">Support</router-link></li>
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
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-gitlab"></i></a>
    </ul>
    <toggle-button
      @change="DarkMode"
      color="#373737"
      class="switch"
      :width="40"
      :value="true"
      :labels="{ checked: '', unchecked: ''}"
      />
    <p class="copylight"><small lang="en">©2020 PaperAirplane Inc.</small></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  },
  methods: {
    DarkMode: function () {
      alert('hey');
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: var(--footertext);
}

.footer {
  position: relative;
  background-color: var(--subColor);
  color: var(--footertext);
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding: 30px 0 10px;
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
    color: var(--footertext);
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
      color: var(--footertext);
      margin-right: 30px;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
  .switch {
    position: absolute;
    right: 1.5%;
  }
  .copylight {
    text-align: center;
    color: var(--footertext);
    margin-bottom: 5px;
    font-size: 15px;
  }
}
</style>
