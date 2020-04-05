<template>
  <header
    class="chat-header row"
    :style="{ color: ColorFunc().text, background: ColorFunc().backGround }"
  >
    <router-link to="/" class="go-back">
      <i class="fas fa-chevron-left"></i>
    </router-link>
    <div class="h-info">
      <img
        src="../../../assets/okuicon.jpg"
        alt="logo"
        class="chat-thumbnail"
        @click="chatHeaderInfo()"
        style="display: inline-block"
      >
      <p class="class-code" style="display: inline-block"><code>@test01234</code></p>
    </div>

    <!-- overlay -->
    <div class="overlay" v-show="this.showInfo">
      <div
        class="overlay_content"
        :style="{ background: ColorFunc().backGround }"
      >
        <ul class="options">
          <li><i class="fas fa-times close-icon" @click="chatHeaderInfo()"></i></li>
        </ul>
        <div class="class-info row">
          <img src="../../../assets/okuicon.jpg" alt="logo" class="chat-thumbnail col-xs-2">
          <p class="ppl-num col-xs-9"><code>50</code>Audiencies</p>
        </div>
        <div class="bio">this is infomation.Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).this is infomation.Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).this is infomation.Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.</div>
      </div>
    </div>
    <!-- overlay -->

  </header>
</template>

<script>
export default {
  name: 'ChatHeader',
  props: {},
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return {
      color,
      light,
      dark,
      showInfo: false
    };
  },
  methods: {
    chatHeaderInfo () {
      this.showInfo = !this.showInfo;
    },
    ColorFunc: function () {
      var backGround = !this.$store.getters.g_isDark ? this.light.backGround : this.dark.backGround;
      var text = !this.$store.getters.g_isDark ? this.light.text : this.dark.text;
      return { backGround, text };
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 65px;
  width: 100%;
  border-bottom: 2px solid #eee;
  padding: 0 20px;
  margin: 0 auto;
  position: fixed;
  z-index: 100;
  .go-back {
    color: var(--mainColor);
    font-size: 20px;
    margin: 17.5px 0;
  }
  .h-info {
    padding: 0;
    margin: auto;
  }
  .chat-thumbnail {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    margin: 12.5px;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
  }
  .class-code {
    code { color: var(--mainColor); }
    height: 40px;
    font-size: 20px;
    padding: 4px 0;
    margin: 12.5px 0;
  }
  .overlay {
    z-index: 100;
    .options {
      padding: 0;
      li {
        float: right;
        padding: 0 10px;
      }
      .close-icon {
        font-size: 20px;
        color: var(--mainColor);
        border: none;
        border-radius: 100px;
        transition: 0.2s;
        &:hover {
          cursor: pointer;
          transform: scale(1.15);
        }
      }
    }
    .class-info {
      padding: 0;
      margin: 0;
      li {
        float: left;
        padding: 0 10px;
        height: 55px;
      }
      .ppl-num {
        color: #777;
        font-weight: 600;
        padding: 10px 0;
        margin: 0;
        code {
          color: var(--mainColor);
          font-style: italic;
          padding-right: 5px;
          font-size: 20px;
        }
      }
    }
    .chat-thumbnail {
      margin: 5px 12.5px 10px;
    }
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .overlay_content {
      position: absolute;
      top: 10%;
      z-index: 100;
      padding: 12px;
      border-radius: 8px;
      width: 480px;
      @media only screen and (max-width: 500px) {
        width: 90%;
      }
      background: #fff;
      box-shadow: 2px 2px 25px #ccc;
      .bio {
        padding: 0 15px;
      }
    }
  }
}

</style>
