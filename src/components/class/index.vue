<template>
  <div>
    <ChatHeader @isBlur="blur"/>
    <ChatWindow
      :isBlur="this.isBlur"
      :msgArray="this.msgArray"
    />
    <ChatTextArea @sendText="pushText"/>
  </div>
</template>

<script>
import moment from "moment";
import ChatHeader from './child_components/ChatHeader.vue';
import ChatWindow from './child_components/ChatWindow.vue';
import ChatTextArea from './child_components/ChatTextArea.vue';

export default {
  components: { ChatHeader, ChatWindow, ChatTextArea },
  data () {
    var m = moment();
    var currentTime = m.format('H:mm');
    var msgArray = [{
        msg: 'Welcome to the PaperAirplane!',
        time: currentTime,
        status: false,
        liked: true,
        likeCnt: 21
      },{
        msg: 'This is chat window. And as you know, it is prototype yet. Coming soon.',
        time: currentTime,
        status: false,
        liked: false,
        likeCnt: 0
      },{
        msg: 'And if you wanna get-in-touch with us, plz send DM!',
        time: currentTime,
        status: false,
        liked: false,
        likeCnt: 0
      },{
        msg: 'Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).In addition to media types, there are also media features. Media features provide more specific details to media queries, by allowing to test for a specific feature of the user agent or display device. For example, you can apply styles to only those screens that are greater, or smaller, than a certain width.',
        time: currentTime,
        status: true,
        liked: false,
        likeCnt: 0
      }];
    return {
      isBlur: false,
      msgArray
    }
  },
  methods: {
    blur () {
      this.isBlur = !this.isBlur;
    },
    pushText (item) {
      const len = this.msgArray.length;
      this.msgArray[len-1].status = false;
      this.msgArray.push(item);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
