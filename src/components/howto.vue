<template>
  <div class="howto">
    <PageTitle title="HOW TO"/>
    <div class="container">
      <div class="row contents">

        <div class="side col-md-3">
          <h5>OnThisPage</h5>
          <ul>
            <li v-for="words in sidebar.OnThisPage" v-bind:key="words">{{ words }}</li>
          </ul>
          <h5>Details</h5>
          <ul>
            <li v-for="words in sidebar.Details" v-bind:key="words">{{ words }}</li>
          </ul>
        </div>

        <Paper :paperTitle="sidebar"/>

      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from './child_components/pagetitle.vue';
import Paper from './child_components/paper.vue';

export default {
  components: {
    PageTitle,
    Paper
  },
  data () {
    return {
      sidebar: {
        OnThisPage: ['What is the PaperAirplane??','Install','Set Up'],
        Details: ['Terms', 'Privacy', 'works']
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contents {
  padding: 0;
  margin: 0;

  .side {
    // border: 2px solid #ccc;
    h5 {
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border);
      color: var(--text);
    }
    ul {
      padding: 0 0 15px 10px;
      li {
        margin: 7.5px 0;
        color: var(--subColor);
      }
    }
  }

  .main {
    background: #fbfbfb;
    padding: 20px;
    .heading {
      margin-bottom: 55px;

      h3 {
        border-bottom: 1px solid var(--border);
        padding: 0 0 10px 0;
      }
      p {
        color: var(--text);
      }
      .ja {
        font-family: 'Noto Sans JP', sans-serif;
      }
    }

  }
}
</style>
