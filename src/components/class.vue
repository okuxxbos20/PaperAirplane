<template>
  <div class="chat">

    <div class="chat-header row">
      <router-link to="/" class="previous"><i class="fas fa-chevron-left"></i></router-link>
      <img src="../assets/okuicon.jpg" alt="logo" class="chat-thumbnail">
      <p class="class-code">// wu80p1</p>
      <!-- <p class="n-of-member">5 people in chat</p> -->
    </div>

    <div class="window container">
      <div class="person row">
        <div class="profile col-xs-1">
          <img src="../assets/okuicon.jpg" alt="logo" class="chat-thumbnail">
        </div>
        <div class="zone col-xs-8">
          <div class="" v-for="(item, idx) in this.msgArray" :key="item[idx]">
            <p class="msg">{{ item.msg }}</p>
            <p class="sent_time" v-if="item.status">{{ item.time }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="textarea">
      <input
        class="user_input"
        type="text"
        placeholder="Aa"
        @change="sendText($event.target.value)"
      >
    </div>

  </div>
</template>

<script>
import moment from "moment";

export default {
  components: {  },
  data () {
    var m = moment();
    var currentTime = m.format('H:mm');
    var msgArray = [{
        msg: 'hello world!',
        time: currentTime,
        status: false
      },{
        msg: 'This is chat window. And as you know, it is prototype yet. Coming soon.',
        time: currentTime,
        status: true
      },{
        msg: 'And if you wanna get-in-touch with us, plz send DM!',
        time: currentTime,
        status: false
      },{
        msg: 'what a hell 🤮',
        time: currentTime,
        status: true
      }];
    return { msgArray, currentTime };
  },
  methods: {
    sendText: function (text) {
      var item = {
        msg: text,
        time: this.currentTime,
        status: true
      };
      this.msgArray.push(item);
    }
  }
}
</script>

<style lang="scss" scoped>
template {
  position: relative;
}

.chat {
  // chat-header
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
      border: none;
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
  // chat-header
  // chat-main
  .window {
    padding: 20px 0 0 0;
    .profile {
      margin-left: 10px;
      .chat-thumbnail {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        margin: 0 15px 0 20px;
      }
    }
    .person {
      .zone {
        width: 65%;
        .msg {
          color: #111;
          font-size: 18px;
          background: #eee;
          padding: 8px 15px;
          border-radius: 0 20px 20px 20px;
        }
        .sent_time {
          text-align: center;
        }
      }
    }
  }

  .textarea {
    width: 100%;
    background: #fff;
    text-align: center;
    position: absolute;
    bottom: 0px;
    position: fixed;
    .user_input {
      color: #222;
      font-size: 18px;
      border: 4px solid #19b5fe;
      border-radius: 100px;
      padding: 8px 15px;
      margin: 10px 0;
      width: 40%;
      @media only screen and (max-width: 768px) {
        width: 80%;
      }
      &:focus {
        font-weight: 400;
        outline: none;
      }
    }
  }
}
</style>
