<template>
  <div class="index container">
    <div class="howtoAndInstall">
      <img src="../assets/logo_deepSkyBlue.svg" alt="logo">
      <h1 class="title"><b>PaperAirplane</b></h1>
      <h6 id="js-target">For Awesome Presenters.</h6>
        <router-link to="/howto" class="btn btn-howto col-md-3 mb-2">HOW TO</router-link>
        <router-link to="/" class="btn btn-install col-md-3 mb-2">INSTALL</router-link>
      <p><code style="color: #19b5fe;">currently  v1.0.0</code></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.index {
  text-align: center;
  .howtoAndInstall{
    img {
      height: 200px;
      width: 200px;
    }
    .title {
      font-family: 'Open Sans', sans-serif;
      color: var(--mainColor);
    }
    h6 {
      font-size: 17px;
    }
    .btn {
      color: #fff;
      border-radius: 17px;
    }
    .btn-howto {
      background: #19b5fe;
      transition: 0.3s;
      margin-right: 15px;
      &:hover{
        transform:scale(1.025);
        color: var(--white);
      }
    }
    .btn-install {
      background: #3bb4c1;
      transition: 0.3s;
      &:hover{
        transform:scale(1.025);
        color: var(--white);
      }
    }
  }
}
</style>
