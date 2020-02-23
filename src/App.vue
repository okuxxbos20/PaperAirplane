<template>
  <div id="app" :style="{background: BgFunc()}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return { color, light, dark };
  },
  methods: {
    BgFunc: function () {
      return !this.$store.getters.rtnIsDark ? this.light.backGround : this.dark.backGround;
    }
  }
};
</script>

<style lang="scss">
:root {
  --mainColor: #19b5fe;
  --subColor: #3bb4c1;
  --white: #fff;
}
// font we use in Jaoanese by default
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap');
// font we use in English by default
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#app {
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
ul {
  list-style: none;
}
</style>
