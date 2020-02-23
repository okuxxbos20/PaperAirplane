<template>
  <div class="howto">
    <Header/>
    <PageTitle title="HOW TO"/>
    <div class="container">
      <div class="contents row" :style="{color: BgFunc().text}">

        <div class="side col-md-3">
          <h5>OnThisPage</h5>
          <ul>
            <router-link to="/"><li v-scroll-to="'#OnThisPage_01'">What is the PaperAirplane??</li></router-link>
            <router-link to="/"><li v-scroll-to="'#OnThisPage_02'">Install</li></router-link>
            <router-link to="/"><li v-scroll-to="'#OnThisPage_03'">Set Up</li></router-link>
          </ul>
          <h5>Product</h5>
          <ul>
            <router-link to="/product-presenters"><li>For Presenters</li></router-link>
            <router-link to="/product-audience"><li>For Audience</li></router-link>
          </ul>
          <h5>Details</h5>
          <ul>
            <router-link to="/Terms"><li>Terms</li></router-link>
            <router-link to="/Privacy"><li>Privacy</li></router-link>
            <router-link to="/"><li>works</li></router-link>
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
        Product: ['For Presenters', 'For Audience'],
        Details: ['Terms', 'Privacy', 'works']
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
  display: flex;
  display: -webkit-flex;
  .side {
    position: -webkit-sticky;
    position: sticky;
    z-index: 1;
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
