<template>
  <div>
    <!-- Header Start -->
    <header id="home" class="home-banner-area home-banner-area-2 home-banner-area-4 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--Hero Area Wrapper-->
            <div class="hero-area-wrapper position-relative">
              <div class="hero-container">
                <div class="hero-area-content">
                  <h1>{{ heroTitle }}</h1>
                  <p>{{heroSubTitle}}</p>
                  <div class="hero-button-box">
                      <a href="https://play.google.com/store/apps" class="theme-button">Download Now</a>
                  </div>
                </div>
                <div class="hero-right-wrapper">
                  <div class="hero-right-bg wow fadeInRight">
                    <b-img :src="heroImg1" :img-alt="altText1"></b-img>
                    <div class="hero-right-top-frame">
                      <b-img :src="heroImg2" :img-alt="altText2"></b-img>
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
  name: 'Banner1',

  data(){
    return {
      particleImage: require('../../assets/img/hero-bg-effect.png'),
      altText: 'particle',
      heroTitle: 'The Future Surrounds You.',
      heroSubTitle: 'Get a glimpse of it',

      heroImg1: require('../../assets/img/home-4-img/hero-mobile-1.png'),
      altText1: 'phone',
      heroImg2: require('../../assets/img/home-4-img/hero-mobile-2.png'),
      altText2: 'upper',
    };
  }

}
</script>