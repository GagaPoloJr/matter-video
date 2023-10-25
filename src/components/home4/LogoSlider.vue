<template>
  <!-- Client Logo Slider Area Start -->
  <section class="client-logo-slider-area padding-zero">
    <div class="container">
      <!-- Client Logo Slider Area Start -->
      <div class="row">
        <div class="col-12">
          <div class="client-logo-slider">
            <carousel :margin="15" :loop="true" :center="true" :autoplay="true" :autoplaySpeed="true" :dots="false" :nav="false" :items="5" :responsive="{0:{items:1,nav:false},480:{items:3,nav:false},600:{items:3,nav:false},900:{items:5,nav:false}}">
              
              <!-- Single Client Logo Slider Logo start-->
              <LogoSliderItem v-for="item in items" :key="item.id" :logoImg="item.logoImg" :altText="item.altText" />
              <!-- Single Client Logo Slider Logo end-->

            </carousel>
          </div>
        </div>
      </div>
      <!-- Client Logo Slider Area End -->
    </div>
  </section>
  <!-- Client Logo Slider Area End -->
</template>

<script>
// Client Logo Slider
import carousel from 'vue-owl-carousel'
import LogoSliderItem from '@/components/home4/LogoSliderItem.vue'

export default {
  name: 'LogoSlider',
  components: {
    carousel,
    LogoSliderItem
  },

  data(){
    return {
      items: [
        {
          id: 1,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/1.png'),
          altText: 'Logo img'
        },
        {
          id: 2,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/2.png'),
          altText: 'Logo img'
        },
        {
          id: 3,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/3.png'),
          altText: 'Logo img'
        },
        {
          id: 4,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/4.png'),
          altText: 'Logo img'
        },
        {
          id: 5,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/5.png'),
          altText: 'Logo img'
        },
        {
          id: 6,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/2.png'),
          altText: 'Logo img'
        },
        {
          id: 7,
          logoImg: require('../../assets/img/home-4-img/client-logo-slider/3.png'),
          altText: 'Logo img'
        }

      ]
    };
  }

}
</script>

<style>
/* Client Logo Slider */
.client-logo-slider {
	overflow: hidden;
}
</style>