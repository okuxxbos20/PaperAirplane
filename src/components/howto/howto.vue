<template>
  <div class="howto">
    <Header/>
    <PageTitle title="HOW TO"/>
    <div class="container">
      <div class="row contents" :style="{color: BgFunc().text}">
        <div class="side col-md-3">
          <h5>OnThisPage</h5>
          <ul>
            <li v-for="words in sidebar.OnThisPage" v-bind:key="words">{{ words }}</li>
          </ul>
          <h5>Product</h5>
          <ul>
            <li v-for="words in sidebar.Product" v-bind:key="words">{{ words }}</li>
          </ul>
          <h5>Details</h5>
          <ul>
            <li v-for="words in sidebar.Details" v-bind:key="words">{{ words }}</li>
          </ul>
        </div>
        <Paper :paperTitle="sidebar" :style="{background: BgFunc().paperBackGround, color: BgFunc().text}"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import PageTitle from './../child_components/pagetitle.vue';
import Paper from './child_components/paper.vue';

export default {
  components: { Header, Footer, PageTitle, Paper },
  data () {
    const color = this.$store.state.color;
    const light = color.lightMode;
    const dark = color.darkMode;
    return {
      sidebar: {
        OnThisPage: ['What is the PaperAirplane??','Install','Set Up'],
        Details: ['Terms', 'Privacy', 'works'],
        Product: ['For Presenters', 'For Audience']
      },
      color, light, dark
    };
  },
  methods: {
    BgFunc: function () {
      var paperBackGround = !this.$store.getters.rtnIsDark ? this.light.paperBackGround : this.dark.paperBackGround;
      var text = !this.$store.getters.rtnIsDark ? this.light.text : this.dark.text;
      return { paperBackGround, text };
    }
  }
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 0;
  margin: 0;
  .side {
    h5 {
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border);
    }
    ul {
      padding: 0 0 15px 10px;
      li {
        margin: 7.5px 0;
        color: var(--subColor);
      }
    }
  }
}
</style>
