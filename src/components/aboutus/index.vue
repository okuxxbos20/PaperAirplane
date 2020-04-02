<template>
  <div class="main">
    <Header/>
    <PageTitle title="ABOUT US"/>
    <div class="container chat">
      there is about us. coming soon.
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
}
</script>

<style lang="scss" scoped>

</style>
