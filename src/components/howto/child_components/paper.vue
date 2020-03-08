<template>
  <div class="main col-md-9 shadow-sm">
    <div class="heading">
      <h3 id="OnThisPage_01">{{ paperTitle.OnThisPage[0] }}</h3>
      <p>You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.<br><br>
      You can Install it from url below.You can Install it from url below.You can install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
    </div>
    <div class="heading">
      <h3 id="OnThisPage_02">Step.1 {{ paperTitle.OnThisPage[1] }}</h3>
      <p class="ja">業務システムなど、SPA（シングルページアプリケーション）の技術が主流となり、AngularとReactの両雄が主要どころではありますが、どちらも嫌いという人も少なくはありません。主な理由としては、Angularは難しくて学習コストかかるし、Reactは制限付きBSDライセンスの問題もあって会社での導入は法務部が難色を示すとかの理由で避けたいといったところでしょうか。そうなると３番手ということでVue.Jsでしょ。<br><br>
      You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
    </div>
    <div class="heading">
      <h3 id="OnThisPage_03">Step.2 {{ paperTitle.OnThisPage[2] }}</h3>
      <p>You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.<br><br>
      You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
    </div>
    <div class="heading">
      <h3 id="OnThisPage_01">{{ paperTitle.OnThisPage[0] }}</h3>
      <p>You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.<br><br>
      You can Install it from url below.You can Install it from url below.You can install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
    </div>
    <div class="heading">
      <h3 id="OnThisPage_02">Step.1 {{ paperTitle.OnThisPage[1] }}</h3>
      <p class="ja">業務システムなど、SPA（シングルページアプリケーション）の技術が主流となり、AngularとReactの両雄が主要どころではありますが、どちらも嫌いという人も少なくはありません。主な理由としては、Angularは難しくて学習コストかかるし、Reactは制限付きBSDライセンスの問題もあって会社での導入は法務部が難色を示すとかの理由で避けたいといったところでしょうか。そうなると３番手ということでVue.Jsでしょ。<br><br>
      You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
    </div>
    <div class="heading">
      <h3 id="OnThisPage_03">Step.2 {{ paperTitle.OnThisPage[2] }}</h3>
      <p>You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.<br><br>
      You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Paper',
  props: {
    paperTitle: Object
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px;
  display: block;
  .heading {
    margin-bottom: 55px;
    h3 {
      border-bottom: 1px solid var(--border);
      padding: 0 0 10px 0;
    }
    .ja {
      font-family: 'Noto Sans JP', sans-serif;
    }
  }
}
@media screen and (max-width: 580px) {
  .main {
    margin: 0 15px;
  }
}
</style>
