<template>
  <div class="chat">

    <div class="chat-header row">
      <router-link to="/" class="go-back">
        <i class="fas fa-chevron-left"></i>
      </router-link>
      <ul class="h-info">
        <li><img src="../assets/okuicon.jpg" alt="logo" class="chat-thumbnail" @click="chatHeaderInfo()"></li>
        <li><p class="class-code"><code>@cal01234</code></p></li>
      </ul>
    </div>

    <div class="window container">
      <div class="person row">
        <div class="profile col-xs-1">
          <img src="../assets/okuicon.jpg" alt="logo" class="profile-thumbnail">
        </div>
        <div class="zone col-xs-8">
          <div class="" v-for="(item, idx) in this.msgArray" :key="item[idx]">
            <p class="msg" @click="showTime(idx)">{{ item.msg }}</p>
            <p class="sent_time" v-show="item.status">{{ item.time }}
              <i class="far fa-heart not_like" v-show="!item.liked" @click="msgLike(idx)">
                <code class="likeCnt">{{ item.likeCnt }}</code>
              </i>
              <i class="fas fa-heart liked" v-show="item.liked" @click="msgLike(idx)">
                <code class="likeCnt">{{ item.likeCnt }}</code>
              </i>
            </p>
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
    return { msgArray, currentTime };
  },
  methods: {
    chatHeaderInfo () {
      alert('yo');
    },
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
    showTime (idx) {
      this.msgArray[idx].status = !this.msgArray[idx].status ? true : false;
    },
    msgLike (idx) {
      if (!this.msgArray[idx].liked) {
        this.msgArray[idx].likeCnt ++;
        this.msgArray[idx].liked = true;
        return;
      }
      if (this.msgArray[idx].liked) {
        this.msgArray[idx].likeCnt --;
        this.msgArray[idx].liked = false;
        return;
      }
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
    height: 65px;
    border-bottom: 2px solid #eee;
    margin: 0 20px;
    .go-back {
      color: var(--mainColor);
      font-size: 20px;
      margin: 17.5px 0;
    }
    .h-info {
      li { float:left; }
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
  }
  // chat-header
  // chat-main
  .window {
    padding: 20px 0 0 0;
    .profile {
      margin-left: 10px;
      .profile-thumbnail {
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
          margin: 15px 0 0 0;
          border-radius: 0 20px 20px 20px;
          &:hover {
            cursor: pointer;
            background: #ddd;
          }
        }
        .sent_time {
          margin: 2px 0 0 20px;
          .not_like {
            margin-left: 10px;
            padding: 8px;
            border-radius: 100px;
            transition: 0.2s;
            &:hover {
              cursor: pointer;
              background: #eee;
            }
            .likeCnt {
              padding-left: 6px;
              color: #222;
            }
          }
          .liked {
            margin-left: 10px;
            color: #f64747;
            padding: 8px;
            border-radius: 100px;
            transition: 0.2s;
            &:hover {
              cursor: pointer;
              background: #f1a9a0;
            }
            .likeCnt {
              padding-left: 6px;
            }
          }
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
