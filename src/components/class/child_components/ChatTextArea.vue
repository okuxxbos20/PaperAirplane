<template>
  <div
    class="textarea"
    :style="{ color: ColorFunc().text, background: ColorFunc().backGround }"
  >
    <input
      class="user_input"
      type="text"
      placeholder="Aa"
      @keyup.enter="sendText($event.target.value)"
      :style="{ color: ColorFunc().text, background: ColorFunc().backGround }"
    >
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: 'ChatTextArea',
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    var currentTime = moment().format('H:mm');
    return { color, light, dark, currentTime };
  },
  methods: {
    sendText (text) {
      var item = {
        msg: text,
        time: this.currentTime,
        status: true,
        liked: false,
        likeCnt: 0
      };
      this.$emit('sendText', item);
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
