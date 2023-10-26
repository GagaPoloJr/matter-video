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
              <div class="row justify-content-center align-items-center">
                <div class="col-6">
                  <div class="hero-area-content">
                    <h1>{{ heroTitle }}</h1>
                    <h3>{{ heroSubTitle }}</h3>
                    <p>{{ heroText }}</p>
                  </div>
                </div>
                <div class="col-6">
                  <img
                    :src="require('../../assets/img/matter/hero.png')"
                    alt=""
                  />
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
  name: "Hero",

  data() {
    return {
      particleImage: require("../../assets/img/hero-bg-effect.png"),
      altText: "particle",
      heroTitle: "Online Video Editor",
      heroSubTitle: "with many of the features you need.",
      heroText:
        "Create a video editor that exceeds your expectations, easy to drag and drop in the browser and no download required",
    };
  },
};
</script>

<style scoped>
.hero-area-content h3 {
  font-size: 32px;
  font-weight: 300;
  text-wrap: nowrap;
}

/* replace the default style css */

.home-banner-area {
  background-image: unset;
  margin-top: 150px;
}
.hero-area-content {
  width: unset;
}
.hero-area-content h1 {
  background: linear-gradient(
    90.63deg,
    #f801c8 2.71%,
    #0100ff 55.78%,
    #01a9ed 106.04%
  );
  font-size: 40px;
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* end */
</style>
