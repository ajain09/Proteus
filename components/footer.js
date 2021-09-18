class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `<section id="footer">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <h2 style="color: #fff; font-size: 2.2rem;">Find us on</h2>
          <a target="_blank" href="https://www.youtube.com/channel/UCl2xFz0fNma-cW679jgjE0A"><i class="fab fa-youtube icon"></i></a>
          <a target="_blank" href="https://www.instagram.com/proteus.iisertvm/?hl=en"><i class="fab fa-instagram icon"></i></a>
          <a target="_blank" href="https://twitter.com/proteusiisertvm"><i class="fab fa-twitter icon"></i></a>
          <a target="_blank" href="https://www.facebook.com/proteus.iisertvm"><i class="fab fa-facebook-square icon"></i></a>
        </div>
        <div class="col-lg-3">
          <h3 class="footer-head">Share the page</h3>
          <a target="_blank" class="terms" href="http://www.facebook.com/sharer.php?u=https://proteusiisertvm.github.io/Proteus/" target="_blank">Facebook</a><br>
          <a target="_blank" class="terms" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://proteusiisertvm.github.io/Proteus/" target="_blank">LinkedIn</a><br>
          <a target="_blank" class="terms" href="https://twitter.com/share?url=https://proteusiisertvm.github.io/Proteus/&amp;text=Proteus&amp;hashtags=proteusiisertvm" target="_blank">Twitter</a>
        </div>
        <div class="col-lg-3 col-md-12">
          <h3 class="footer-head">Blogs</h3>
          <a target="_blank" class="terms" href="/Proteus/Proteus_blog/Anekdota/Anekdota_Human Soul/blog.html">Weight of The Human Soul</a><br>
          <a target="_blank" class="terms" href="/Proteus_blog/Anthropoid/Anthropoid_Personality/blog.html">Do Animals Have Personalities</a><br>
          <a target="_blank" class="terms" href="/Proteus_blog/Erevna/Erevna_Mammoth/blog12.html">Gene Time Bomb Hurt Mammoths</a><br>
          <a target="_blank" class="terms" href="/archives/archives.html">Archives</a><br>
        </div>
        <div class="col-lg-3 col-md-12">
          <h3 class="footer-head">Quick links</h3>
          <a target="_blank" class="terms" href="http://www.iisertvm.ac.in/">IISER Thiruvananthapuram</a><br>
          <a target="_blank" class="terms" href="http://biology.iisertvm.ac.in/">School of Biology</a><br>
          <a target="_blank" class="terms" href="/Acknowledgements/page.html">Acknowledgements</a><br>
        </div>
        <hr style="border-top: 1px solid #fff; width: 97%; margin-top: 50px">
      </div>
      <div class="row">
        <div class="col-lg-8" style="margin: 30px auto; display: inline-block;">
          <h2 style="font-family: 'David-Libre'; font-size: 2rem; color: #fff;">Proteus</h2>
          <p style="color: grey;">Made with ❤ and a bit of code</p>
        </div>
        <div class=" col-lg-4">
          <a target="_blank" href="https://www.iisertvm.ac.in/"><img title="IISER Thiruvananthapuram website" class="iiser_logo" src="/images/iiser_logo2.png" alt="IISER Thiruvananthapuram logo"></a>
        </div>
      </div>
    </section>`;
    }
  }



customElements.define('footer-component', Footer);
