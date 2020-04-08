<template>
  <main
    class="container"
    :class="{ blur_place: isBlur }"
  >
    <div class="person row">

      <div class="profile col-xs-1">
        <img
          src="../../../assets/okuicon.jpg"
          alt="profile"
          class="profile-thumbnail"
        >
      </div>

      <div class="zone col-xs-8">
        <div v-for="(item, idx) in msgArray" :key="item[idx]" ref="scroll">
          <p
            class="msg"
            @click="showDetail(idx)"
            :style="{ color: colorFunc().text, background: colorFunc().msgBg }"
          >
            {{ item.msg }}
          </p>
          <p
            class="sent_time"
            v-show="item.status"
            :style="{ color: colorFunc().text }"
          >
            {{ item.time }}
            <i class="far fa-heart not_like" v-show="!item.liked" @click="msgLike(idx)">
              <code class="likeCnt" :style="{ color: colorFunc().text }">{{ item.likeCnt }}</code>
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
export default {
  name: 'ChatWindow',
  props: {
    isBlur: {
      type: Boolean,
      default: false
    },
    msgArray: {
      type: Array
    },
    currentTime: {
      type: String
    }
  },
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return { color, light, dark };
  },
  methods: {
    showDetail (idx) {
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
    },
    colorFunc () {
      var msgBg = !this.$store.getters.g_isDark ? this.light.paperBackGround : this.dark.paperBackGround;
      var text = !this.$store.getters.g_isDark ? this.light.text : this.dark.text;
      return { msgBg, text };
    },
    scrollToEnd() {
      const chatLog = this.$refs.scroll;
      if (!chatLog) {
        return chatLog.scrollTop = chatLog.scrollHeight;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding: 85px 0 69px;
  overflow: visible;
  .profile {
    margin-left: 10px;
    .profile-thumbnail {
      width: 40px;
      height: 40px;
      margin: 0 15px 0 20px;
      border-radius: 50%;
      border: none;
    }
    img {
      object-position: bottom;
    }
  }
  .person {
    .zone {
      width: 65%;
      .msg {
        font-size: 18px;
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
.blur_place {
  filter: blur(1.5px);
}
</style>
