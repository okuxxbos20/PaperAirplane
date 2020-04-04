<template>
  <main
    class="container"
    :class="{ blur_place: this.showInfo }"
  >
    <div class="person row">

      <div class="profile col-xs-1">
        <img src="../../../assets/okuicon.jpg" alt="logo" class="profile-thumbnail">
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
  </main>
</template>

<script>
import moment from "moment";

export default {
  name: 'ChatWindow',
  props: {},
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
main {
  padding-top: 85px;
  height: 1000px;
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
</style>
