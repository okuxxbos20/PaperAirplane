<template>
  <div class="footer">
    <div class="container">
    <ul class="nav justify-content-center mb-3">
      <ul class="nav flex-column col-md-2">
        <li class="nav-item"><a class="nav-link main" href="#"><b>PRODUCT</b></a></li>
        <li class="nav-item"><a class="nav-link sub" href="faq.html">FAQ</a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Blog</a></li>
      </ul>
      <ul class="nav flex-column col-md-2">
        <li class="nav-item"><a class="nav-link main" href="#"><b>ABOUT US</b></a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Get in touch</a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Support</a></li>
      </ul>
      <ul class="nav flex-column col-md-2">
        <li class="nav-item"><a class="nav-link main" href="#"><b>HOW TO</b></a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Install</a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Set up</a></li>
      </ul>
      <ul class="nav flex-column col-md-2">
        <li class="nav-item"><a class="nav-link main" href="#"><b>COMUNITY</b></a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Terms</a></li>
        <li class="nav-item"><a class="nav-link sub" href="#">Privacy</a></li>
      </ul>
    </ul>
    <ul class="footer-sns text-center mt-5" style="padding: 0;">
      <a href="#"><i class="fab fa-facebook-f" style="margin-right: 30px;"></i></a>
      <a href="#"><i class="fab fa-twitter" style="margin-right: 30px;"></i></a>
      <a href="#"><i class="fab fa-instagram" style="margin-right: 30px;"></i></a>
      <a href="#"><i class="fab fa-gitlab" style="margin-right: 30px;"></i></a>
    </ul>
    <p class="text-center mb-0"><small>Copylight &copy;2019 PaperAirplane, All Rights Reserved.</small></p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--subColor);
  color: var(--white);
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  padding: 30px 0 10px;
  margin-top: 30px;
}

.main {
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1)
  }
}

a {
  color: var(--white);
}

.sub {
  font-size: 13px;
  transition: 0.2s;
  color: var(--white);
  &:hover {
    color: #6c7a89;
  }
}

.fab {
  font-size: 25px;
  transition: 0.3s;
  color: var(--white);
  &:hover {
    transform: scale(1.3);
  }
}
</style>
