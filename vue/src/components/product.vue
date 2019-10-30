<template>
  <div class="">
    <PageTitle title="PRODUCT"/>
    <div class="container">
      <div class="row contents">
      <div class="presenters col-md-6 shadow-sm">
        <h5>presenters</h5>
      </div>
      <div class="audiences col-md-6 shadow-sm">
        <h5>audiences</h5>
      </div>
      </div>
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
.contents {
  height: 300px;

  .presenters {
    background: var(--white);
    height: 300px;
    h5 {
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border);
      color: var(--text);
    }

  }
  .audiences {
    background: var(--white);
    height: 300px;
    h5 {
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border);
      color: var(--text);
    }

  }
}
</style>
