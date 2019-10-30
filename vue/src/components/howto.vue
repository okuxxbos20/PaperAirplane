<template>
  <div class="">
    <PageTitle title="HOW TO"/>
    <div class="container">
      <div class="row contents">
        <div class="side col-md-3">
          <h5>On this page</h5>
          <ul>
            <li><a href="#">What is the PaperAirplane??</a></li>
            <li><a href="#">Install</a></li>
            <li><a href="#">Set Up</a></li>
            <li><a href="#">What is the PaperAirplane??</a></li>
            <li><a href="#">Install</a></li>
            <li><a href="#">Set Up</a></li>
            <li><a href="#">What is the PaperAirplane??</a></li>
            <li><a href="#">Install</a></li>
            <li><a href="#">Set Up</a></li>
          </ul>
        </div>
        <div class="main col-md-9 shadow-sm">

          <div class="heading">
            <h3>What is the PaperAirplane?</h3>
            <p>You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.<br><br>
            You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
          </div>
          <div class="heading">
            <h3>Step.1 Install</h3>
            <p class="ja">業務システムなど、SPA（シングルページアプリケーション）の技術が主流となり、AngularとReactの両雄が主要どころではありますが、どちらも嫌いという人も少なくはありません。主な理由としては、Angularは難しくて学習コストかかるし、Reactは制限付きBSDライセンスの問題もあって会社での導入は法務部が難色を示すとかの理由で避けたいといったところでしょうか。そうなると３番手ということでVue.Jsでしょ。<br><br>
            You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
          </div>
          <div class="heading">
            <h3>Step.2 Set Up</h3>
            <p>You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.<br><br>
            You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
          </div>

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
  padding: 0;
  margin: 0;

  .side {
    // border: 2px solid #ccc;
    h5 {
      padding-bottom: 5px;
      border-bottom: 1px solid var(--border);
      color: var(--text);
    }
    li {
      margin: 7.5px 0;
    }
    a {
      color: var(--subColor);
    }
  }

  .main {
    background: var(--white);
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
