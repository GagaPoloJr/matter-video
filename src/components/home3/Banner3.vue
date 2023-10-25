<template>
  <div>
    <!-- Header Start -->
    <header id="home" class="home-banner-area-2 home-banner-area-3 position-relative">
      <div class="background-shape position-absolute">
        <b-img :src="particleImage" :img-alt="altText"></b-img>
      </div>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!--Hero Area Wrapper-->
              <div class="hero-area-wrapper position-relative">
                <div class="hero-container">
                  <div class="hero-area-content">
                    <h1>{{heroTitle}} <span>{{heroTitleInner}}</span></h1>
                    <p>{{heroSubTitle}}</p>
                    <div class="hero-button-box">
                      <a href="https://play.google.com/store/apps">
                        <b-img :src="appleBtnImg" :img-alt="altText2"></b-img>
                      </a>
                      <a href="https://apps.apple.com/us/app/apple-store/id375380948">
                        <b-img :src="appleBtnImg2" :img-alt="altText3"></b-img>
                      </a>
                    </div>
                  </div>
                      
                  <div class="hero-right-wrapper">
                    <div class="hero-right-bg wow fadeInRight">
                      <b-img :src="heroImg1" :img-alt="altText4"></b-img>
                      <div class="hero-right-top-frame">
                        <b-img :src="heroImg2" :img-alt="altText5"></b-img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--Hero Area Wrapper-->
            </div>
          </div>
        </div>
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
export default {
  name: 'Banner3',

  data(){
    return {
      particleImage: require('../../assets/img/home-3-img/home-3-hero-bg-effect.png'),
      altText: 'particle',
      heroTitle: 'Biggest App of',
      heroTitleInner: '2019',
      heroSubTitle: 'Spread the word, so that everyone knows',
      appleBtnImg: require('../../assets/img/apple-store-icon.png'),
      altText2: 'Apple Store',
      appleBtnImg2: require('../../assets/img/google-play-store-icon.png'),
      altText3: 'Play Store',
      heroImg1: require('../../assets/img/home-3-img/hero-mobile-bg-effect.png'),
      altText4: 'phone',
      heroImg2: require('../../assets/img/home-3-img/hero-mobile-mockup.png'),
      altText5: 'upper',
    }
  }

}
</script>
