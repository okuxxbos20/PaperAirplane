<template>
  <div class="">
    <ChatHeader/>
    <ChatWindow/>
    <ChatTextArea/>
  </div>
</template>

<script>
import ChatHeader from './child_components/ChatHeader.vue';
import ChatWindow from './child_components/ChatWindow.vue';
import ChatTextArea from './child_components/ChatTextArea.vue';

export default {
  components: { ChatHeader, ChatWindow, ChatTextArea },
  data () {
    return {
    };
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
