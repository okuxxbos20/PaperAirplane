<template>
  <div class="chat">
    <div class="chat-header row">
      <router-link to="/" class="previous"><i class="fas fa-chevron-left"></i></router-link>
      <img src="../assets/okuicon.jpg" alt="logo" class="chat-thumbnail">
      <p class="class-code">// wu80p1</p>
      <!-- <p class="n-of-member">5 people in chat</p> -->
    </div>
    <div class="chat-main container">
      <p>hello world</p>
    </div>
  </div>
</template>

<script>
// const h = window.innerHeight;
// console.log('height: ' + h);
</script>

<style lang="scss" scoped>
.chat {
  .chat-header {
    height: 80%;
    position: relative;
    border-bottom: 2px solid var(--mainColor);
    margin: 0 20px;
    .previous {
      color: var(--mainColor);
      font-size: 20px;
      padding: 26px 0 38px;
    }
    .chat-thumbnail {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid #eee;
      margin: 20px;
    }
    .class-code {
      font-weight: bold;
      font-family: 'Open Sans', sans-serif;
      color: var(--mainColor);
      font-size: 20px;
      padding: 24px 10px;
      margin: 0;
    }
    .n-of-member {
      padding: 4px 10px;
      position: absolute;
      top: 78%;
      -webkit-transform : translate(0%,-50%);
      transform : translate(0%,-50%);
    }
  }
  .chat-main {
    height: 1000px;
    padding: 0;
  }
}
</style>
