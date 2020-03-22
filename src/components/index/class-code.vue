<template>
  <div class="enterYourClass">
    <h6>Enter Your Class Code.</h6>
    <div>
      <input type="text" class="classCode" maxlength="1" v-model="code1" ref="r1">
      <input type="text" class="classCode" maxlength="1" v-model="code2" ref="r2" @keyup.delete="back2">
      <input type="text" class="classCode" maxlength="1" v-model="code3" ref="r3" @keyup.delete="back3">
      <input type="text" class="classCode" maxlength="1" v-model="code4" ref="r4" @keyup.delete="back4">
      <input type="text" class="classCode" maxlength="1" v-model="code5" ref="r5" @keyup.delete="back5">
      <input type="text" class="classCode" maxlength="1" v-model="code6" ref="r6" @keyup.delete="back6">
    </div>
    <div class="enterBtn">
      <router-link to="/class">
        <button type="submit" ref="enter" @keyup.delete="backEnter">ENTER</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassCode',
  props: {},
  data() {
    return {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      classcode: ['Ω', 'Ω', 'Ω', 'Ω', 'Ω', 'Ω' ]
    }
  },
  watch: {
    code1: function(num) {
      if (num.length >= 1) {
        this.$refs.r2.focus();
        this.classcode[0] = num;
      }
      // num.length >= 1 ? this.$refs.r2.focus(), this.classcode[0] = num;
    },
    code2: function(num) {
      if (num.length >= 1) {
        this.$refs.r3.focus();
        this.classcode[1] = num;
      }
    },
    code3: function(num) {
      if (num.length >= 1) {
        this.$refs.r4.focus();
        this.classcode[2] = num;
      }
    },
    code4: function(num) {
      if (num.length >= 1) {
        this.$refs.r5.focus();
        this.classcode[3] = num;
      }
    },
    code5: function(num) {
      if (num.length >= 1) {
        this.$refs.r6.focus();
        this.classcode[4] = num;
      }
    },
    code6: function(num) {
      if (num.length >= 1) {
        this.$refs.enter.focus();
        this.classcode[5] = num;
        return this.classcode;
      }
    }
  },
  methods: {
    back2: function(num) {
      if (num.target.value == "") { this.$refs.r1.focus() }
    },
    back3: function(num) {
      if (num.target.value == "") { this.$refs.r2.focus() }
    },
    back4: function(num) {
      if (num.target.value == "") { this.$refs.r3.focus() }
    },
    back5: function(num) {
      if (num.target.value == "") { this.$refs.r4.focus() }
    },
    back6: function(num) {
      if (num.target.value == "") { this.$refs.r5.focus() }
    },
    backEnter: function() { this.$refs.r6.focus() }
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
  .enterBtn {
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
  .enterFocus {
    color: var(--mainColor);
    background: var(--backGround);
    border: 4px solid var(--mainColor);
  }
}
</style>
