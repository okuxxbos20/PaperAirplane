<template>
  <div class="">
    <div class="room"></div>
    <div class="component_name">
      <p><b>{{ title }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.room {
  height: 65px;
}
.component_name {
  height: 130px;
  background: var(--subColor);
  position: relative;
  margin-bottom: 33px;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    color: var(--white);
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
  }
}
</style>
