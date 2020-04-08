<template>
  <div class="enterYourClass">
    <h6 v-show="!this.isError">Enter Your Class Code.</h6>
    <h6 class="error" v-show="this.isError"><span>Error</span> Code must be 6 characters.</h6>
    <div>
      <input type="text" class="classCode" maxlength="1" @input="code1($event.target.value)" ref="r1" @keyup.delete="back1">
      <input type="text" class="classCode" maxlength="1" @input="code2($event.target.value)" ref="r2" @keyup.delete="back2">
      <input type="text" class="classCode" maxlength="1" @input="code3($event.target.value)" ref="r3" @keyup.delete="back3">
      <input type="text" class="classCode" maxlength="1" @input="code4($event.target.value)" ref="r4" @keyup.delete="back4">
      <input type="text" class="classCode" maxlength="1" @input="code5($event.target.value)" ref="r5" @keyup.delete="back5">
      <input type="text" class="classCode" maxlength="1" @input="code6($event.target.value)" ref="r6" @keyup.delete="back6">
    </div>
    <div class="btn_enter">
      <button
        type="submit"
        ref="enter"
        @keyup.delete="backEnter"
        @click="enterClass"
      >ENTER</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassCode',
  data() {
    return {
      classcode: ['', '', '', '', '', ''],
      isError: false
    }
  },
  mounted: function () {
    this.$refs.r1.focus();
    console.log(this.classcode);
  },
  watch: {
    classcode: function (newcode) {
        console.log(newcode);
    }
  },
  methods: {
    code1 (text) {
      if (text.length >= 1) {
        this.classcode.splice(0, 1, text);
        this.$refs.r2.focus();
      }
    },
    code2 (text) {
      if (text.length >= 1) {
        this.classcode.splice(1, 1, text)
        this.$refs.r3.focus();
      }
    },
    code3 (text) {
      if (text.length >= 1) {
        this.classcode.splice(2, 1, text)
        this.$refs.r4.focus();
      }
    },
    code4 (text) {
      if (text.length >= 1) {
        this.classcode.splice(3, 1, text)
        this.$refs.r5.focus();
      }
    },
    code5 (text) {
      if (text.length >= 1) {
        this.classcode.splice(4, 1, text)
        this.$refs.r6.focus();
      }
    },
    code6 (text) {
      if (text.length >= 1) {
        this.classcode.splice(5, 1, text)
        this.$refs.enter.focus();
        console.log(this.classcode);
      }
    },
    back1 () {
      this.classcode.splice(0, 1, '');
    },
    back2 () {
      this.classcode.splice(1, 1, '');
      this.$refs.r1.focus();
    },
    back3 () {
      this.classcode.splice(2, 1, '');
      this.$refs.r2.focus();
    },
    back4 () {
      this.classcode.splice(3, 1, '');
      this.$refs.r3.focus();
    },
    back5 () {
      this.classcode.splice(4, 1, '');
      this.$refs.r4.focus();
    },
    back6 () {
      this.classcode.splice(5, 1, '');
      this.$refs.r5.focus();
    },
    backEnter: function() {
      this.$refs.r6.focus();
    },
    checkError: function () {
      return this.isError;
    },
    enterClass () {
      if (this.classcode.includes('')) {
        this.isError = true;
      } else {
        this.$emit('enterButtonClicked', this.classcode);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.enterYourClass {
  margin: 60px 0 0;
  font-family: 'Open Sans', sans-serif;
  h6 {
    font-size: 17px;
    font-weight: bold;
  }
  .classCode {
    width: 60px;
    height: 60px;
    font-size: 30px;
    font-weight: bold;
    color: var(--mainColor);
    border: none;
    border-bottom: 4px solid var(--mainColor);
    background: transparentize(#000, 1);
    margin: 2px;
    text-align: center;
    &:focus {
    outline: none;
    }
    @media screen and (max-width: 375px) {
      width: 45px;
      height: 45px;
      font-size: 20px;
    }
  }
  .btn_enter {
    margin: 20px 0;
    button {
      width: 250px;
      height: 45px;
      color: var(--white);
      font-weight: bold;
      background: var(--mainColor);
      border: none;
      border-radius: 150px;
      transition: 0.3s;
      &:hover {
        color: var(--mainColor);
        background: var(--backGround);
        border: 4px solid var(--mainColor);
      }
      &:focus {
        outline: none;
        color: var(--mainColor);
        background: var(--backGround);
        border: 4px solid var(--mainColor);
      }
    }
  }
}
.error {
  color: #f03434;
  span {
    color: #fff;
    background: #f03434;
    padding: 2px 10px;
    margin-right: 8px;
    border: none;
    border-radius: 100px;
  }
}
</style>
