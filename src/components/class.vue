<template>
  <div class="chat">

    <div class="chat-header row">
      <router-link to="/" class="go-back">
        <i class="fas fa-chevron-left"></i>
      </router-link>
      <ul class="h-info">
        <li>
          <img src="../assets/okuicon.jpg" alt="logo" class="chat-thumbnail" @click="chatHeaderInfo()">
        </li>
        <li><p class="class-code"><code>@cal01234</code></p></li>
      </ul>

      <div class="overlay" v-show="this.showInfo">
        <div class="overlay_content">
          <ul class="options">
            <li><i class="fas fa-times close-icon" @click="chatHeaderInfo()"></i></li>
          </ul>
          <div class="class-info row">
            <img src="../assets/okuicon.jpg" alt="logo" class="chat-thumbnail col-xs-2">
            <p class="ppl-num col-xs-9"><code>50</code>Audiencies</p>
          </div>
          <div class="bio">this is infomation.Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).this is infomation.Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).this is infomation.Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.</div>
        </div>
      </div>

    </div>

    <div class="window container" :class="{ blur_place: this.showInfo }">
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
    return {
      msgArray,
      currentTime,
      showInfo: false
   };
  },
  methods: {
    chatHeaderInfo () {
      this.showInfo = !this.showInfo ? true : false;
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
  .blur_place {
    filter: blur(1.5px);
  }
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
    .overlay {
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
      z-index: 99;
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
