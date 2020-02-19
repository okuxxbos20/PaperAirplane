<template>
  <div class="">
    <PageTitle title="PRODUCT"/>
    <div class="container" :style="{color: colorFunc()}">
      <div class="product row">
        <div class="col-md-6">
          <img src="../../assets/audience.png" class="audience" alt="audience">
          <h5>AUDIENCE</h5>
          <p>You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.</p>
        </div>
        <div class="col-md-6">
          <img src="../../assets/presenter.png" class="presenter" alt="presenter">
          <h5>PRESENTER</h5>
          <p>You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './../child_components/pagetitle.vue';

export default {
  components: {
    PageTitle
  },
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return { color, light, dark };
  },
  methods: {
    colorFunc: function () {
       return !this.$store.getters.rtnIsDark ? this.light.text : this.dark.text;
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  text-align: center;
  .audience {
    width: 200px;
    height: auto;
  }
  .presenter {
    margin-top: 160px;
    width: 300px;
    height: auto;
  }
  h5 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin: 20px 15px;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
}
</style>
