<template>
  <div class="">
    <!-- Header Start -->
    <header id="home" class="home-banner-area home-banner-area-2 position-relative">
      <div class="particle-bg">
        <b-img :src="particleImage" :img-alt="altText"></b-img>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--Hero Area Wrapper-->
            <div class="hero-area-wrapper position-relative">
              <div class="hero-container">
                <div class="hero-area-content">
                    <h1>{{ heroTitle }}</h1>
                    <p>{{heroSubTitle}}</p><div class="hero-button-box">
                      <a href="https://play.google.com/store/apps" class="theme-button"><i class="fab fa-google-play"></i>Play Store</a>
                      <a href="https://apps.apple.com/us/app/apple-store/id375380948" class="theme-button"><i class="fab fa-apple"></i>App Store</a>
                  </div>
                </div>
                <div class="hero-right-wrapper">
                  <div class="hero-right-bg  wow fadeInRight">
                    <img :src="heroRightBg1" :alt="altText2">
                    <div class="hero-right-top-frame">
                      <img :src="heroRightBg2" :alt="altText3">
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
  name: 'Banner2',

  data(){
    return {
      particleImage: require('../../assets/img/hero-bg-effect.png'),
      altText: 'particle',
      heroTitle: 'The Future Surrounds You',
      heroSubTitle: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia meaque ip',
      heroRightBg1: require('../../assets/img/home-2-img/hero-mobile-bg.png'),
      altText2: 'phone',
      heroRightBg2: require('../../assets/img/home-2-img/hero-mobile-upper.png'),
      altText3: 'upper',
    }
  }

}
</script>
