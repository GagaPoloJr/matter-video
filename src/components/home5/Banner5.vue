<template>
  <div>
    <!-- Header Start -->
    <header id="home" class="home-banner-area position-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!--Hero Area Wrapper-->
            <div class="hero-area-wrapper position-relative">
              <div class="hero-container">
                <div class="hero-area-content">
                  <h1><span>{{heroUpperTitle}}</span>{{ heroTitle }}</h1>
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
                    <b-img :src="mockupImg1" :img-alt="altText4"> </b-img>
                    <div class="hero-right-top-frame">
                      <b-img :src="mockupImg2" :img-alt="altText5"> </b-img>
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
  name: 'Banner5',

  data(){
    return {
      heroUpperTitle: 'Introducing',
      heroTitle: 'Biggest App of 2019',
      heroSubTitle: 'I watched the storm, so beautiful yet terrific. It was going to be a lonely trip back.',
      appleBtnImg: require('../../assets/img/apple-store-icon.png'),
      altText2: 'Apple Store',
      appleBtnImg2: require('../../assets/img/google-play-store-icon.png'),
      altText3: 'Play Store',

      mockupImg1: require('../../assets/img/home-5-img/hero-phone-2.png'),
      altText4: "phone",
      mockupImg2: require('../../assets/img/home-5-img/hero-phone-1.png'),
      altText5: "upper",
    }
  }

}
</script>