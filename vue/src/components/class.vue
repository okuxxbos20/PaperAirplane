<template>
  <div class="">
    <PageTitle title="CLASS"/>
    <div class="container">
      <p>Your entered class-code : {{ }}</p>
    </div>
  </div>
</template>

<script>
import PageTitle from './child_components/pagetitle.vue';

export default {
  components: {
    PageTitle
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
