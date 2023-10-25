<template>
  <div class="">
    <!-- Header Start -->
    <header id="home" class="home-banner-area position-relative">
        <div class="particle-bg">
          <b-img :src="particleImage" :img-alt="altText"></b-img>
          </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!--Hero Area Wrapper-->
                    <div class="hero-area-wrapper position-relative wow fadeInLeft">
                        <div class="hero-area-content">
                            <h1>{{ heroTitle }}</h1>
                            <p>{{heroSubTitle}}</p>
                            <div class="hero-button-box">
                                <a href="https://play.google.com/store/apps" class="theme-button"><i class="fab fa-google-play"></i>Play Store</a>
                                <a href="https://apps.apple.com/us/app/apple-store/id375380948" class="theme-button"><i class="fab fa-apple"></i>App Store</a>
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
      heroTitle: 'Organize your personal and social life',
      heroSubTitle: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia meaque ipte tres quet'
    }
  }

}
</script>
