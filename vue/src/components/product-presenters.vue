<template>
  <div class="">
    <PageTitle title="PRESENTER"/>
    <div class="container">
      <div class="product row">
        <div class="col-md-6">
          <img src="../assets/presenter.png" class="presenter" alt="presenter">
          <h5>PRESENTER</h5>
        </div>
        <div class="col-md-6 description">
          <p>You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.</p>
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
.product {
  text-align: center;
  .presenter {
    margin-top: 160px;
    width: 300px;
    height: auto;
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: var(--text);
    }
  }
  h5 {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    margin: 20px 15px;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    color: var(--text);
    // text-align: justify;
    // text-justify: inter-ideograph;
  }
}
</style>
