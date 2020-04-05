<template>
  <div
    class="textarea"
    :style="{ color: ColorFunc().text, background: ColorFunc().backGround }"
  >
    <input
      class="user_input"
      type="text"
      placeholder="Aa"
      @change="sendText($event.target.value)"
      :style="{ color: ColorFunc().text, background: ColorFunc().backGround }"
    >
  </div>
</template>

<script>
export default {
  name: 'ChatTextArea',
  props: {},
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return { color, light, dark };
  },
  methods: {
    sendText (text) {
      var len = this.msgArray.length;
      var item = {
        msg: text,
        time: this.currentTime,
        status: true,
        liked: false,
        likeCnt: 0
      };
      this.msgArray[len-1].status = false;
      this.msgArray.push(item);
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
.textarea {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  position: fixed;
  .user_input {
    font-size: 18px;
    border: 3px solid #19b5fe;
    border-radius: 100px;
    padding: 8px 15px;
    margin: 10px 0;
    width: 40%;
    @media only screen and (max-width: 768px) {
      width: 80%;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
