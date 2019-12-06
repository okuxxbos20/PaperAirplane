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

    <div class="enterYourClass">
      <h6>Enter Your Class Code.</h6>
        <input type="tel" class="classCode" maxlength="1">
        <input type="tel" class="classCode" maxlength="1">
        <input type="tel" class="classCode" maxlength="1">
        <input type="tel" class="classCode" maxlength="1">
      <div class="enterBtn">
        <router-link to="/aboutus">
          <button type="submit">ENTER</button>
        </router-link>
      </div>
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
      font-family: 'Open Sans', sans-serif;
      font-size: 17px;
      font-weight: bold;
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

  .enterYourClass {
    margin: 60px 0;
    font-family: 'Open Sans', sans-serif;
    h6 {
      font-size: 17px;
      font-weight: bold;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    .classCode {
      width: 70px;
      height: 70px;
      border-radius: 20px;
      font-size: 30px;
      font-weight: bold;
      color: var(--mainColor);
      border: 4px solid var(--mainColor);
      margin: 2px;
      @media screen and (max-width: 320px) {
        width: 60px;
        height: 60px;
        border-radius: 17.14px;
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
          background: var(--white);
          border: 4px solid var(--mainColor);
        }
      }
    }
  }

}
</style>
