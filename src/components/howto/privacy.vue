<template>
  <div class="">
    <Header/>
    <PageTitle title="PRIVACY"/>
    <div class="container">
      <p>privacy contents below</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import PageTitle from './../child_components/pagetitle.vue';

export default {
  components: { Header, Footer, PageTitle }
};
</script>

<style lang="scss" scoped>
</style>
