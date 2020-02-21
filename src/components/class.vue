<template>
  <div class="">
    <Header/>
    <PageTitle title="CLASS"/>
    <div class="container">
      <p>Your entered class-code : {{ }}</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import PageTitle from './child_components/pagetitle.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Header, Footer, PageTitle
  }
};
</script>

<style lang="scss" scoped>
.container {
  p {
    margin: 100px 0 0 0;
  }
}
</style>
