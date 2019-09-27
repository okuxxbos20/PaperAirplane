// header template
Vue.component("header-template", {
  template: `
  <header>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light custom-hamburger">
    <a class="navbar-brand" href="index.html" style="color: #19b5fe; font-family: 'Open Sans', sans-serif;"><b>PaperAirplane</b></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="border-color: #fff;">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link" href="product.html">PRODUCT</a></li>
        <li class="nav-item"><a class="nav-link" href="aboutus.html">ABOUT US</a></li>
        <li class="nav-item"><a class="nav-link" href="howto.html">HOW TO</a></li>
        <li class="nav-item"><a class="nav-link" href="howto.html">COMUNITY</a></li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
      </form>
    </div>
  </nav>
  </header>
  `
});

new Vue({el: "#template_header"});
// header template

// footer template
Vue.component("footer-template", {
  template: `
  <footer class="py-4">
  <div class="container" id="footer">
    <ul class="nav justify-content-center mb-3 pl-5">
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
        <li class="nav-item"><a class="nav-link main" href="#"><b>Comunity</b></a></li>
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
    <p class="text-center"><small>Copylight &copy;2019 PaperAirplane, All Rights Reserved.</small></p>
  </div>
  </footer>
  `
})

new Vue({el: "#template_footer"});
// footer template
