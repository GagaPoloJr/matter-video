<template>
  <div>
    <!-- Reviews Area Start -->
    <section id="reviews" class="reviews-area review-area-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title-area text-center">
                        <SectionHeading2 :title="title" :titleInner="titleInner" />
                        <SectionSubHeading :subTitle="subTitle" />
                    </div>
                </div>
            </div>

            <!-- Reviews Slider Area Start -->
            <div class="row reviews-slider-wrapper reviews-slider-wrapper-4">
                <div class="col-12 col-sm-12 col-md-12">
                    <div class="reviews-slider-4 position-relative">
                        
                    <carousel :margin="15" :loop="false" :autoplay="false" :autoplaySpeed="true" :rewind="false" :dots="true" :nav="true" :items="2" :responsive="{0:{items:1,nav:false},600:{items:1,nav:true},900:{items:2,nav:true}}">

                        <!-- single trainer start-->
                        <div class="item">
                            <div class="single-review-slide-box">
                                <div class="review-content">
                                    <span><i class="flaticon-straight-quotes"></i></span>
                                    <p>Travelling was my hobby and gradually I have become addicted to
                                        travelling. This app
                                        helps me every single time when I decide to visit somewhere.
                                        Great app!
                                    </p>
                                    <h2>
                                    <b-img :src="require('../../assets/img/home-4-img/review-slider-img/avatar1.png')"></b-img>
                                        - Diana Prince
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <!-- single trainer end-->

                        <!-- single trainer start-->
                        <div class="item">
                            <div class="single-review-slide-box">
                                <div class="review-content">
                                    <span><i class="flaticon-straight-quotes"></i></span>
                                    <p>Travelling was my hobby and gradually I have become addicted to
                                        travelling. This app
                                        helps me every single time when I decide to visit somewhere.
                                        Great app!
                                    </p>
                                    <h2><b-img :src="require('../../assets/img/home-4-img/review-slider-img/avatar2.png')"></b-img>- Xin Nakamura</h2>
                                </div>

                            </div>
                        </div>
                        <!-- single trainer end-->

                        <!-- single trainer start-->
                        <div class="item">
                            <div class="single-review-slide-box">
                                <div class="review-content">
                                    <span><i class="flaticon-straight-quotes"></i></span>
                                    <p>Travelling was my hobby and gradually I have become addicted to
                                        travelling. This app
                                        helps me every single time when I decide to visit somewhere.
                                        Great app!
                                    </p>
                                    <h2><b-img :src="require('../../assets/img/home-4-img/review-slider-img/avatar1.png')"></b-img>- Xin Nakamura</h2>
                                </div>

                            </div>
                        </div>
                        <!-- single trainer end-->

                        <!-- single trainer start-->
                        <div class="item">
                            <div class="single-review-slide-box">
                                <div class="review-content">
                                    <span><i class="flaticon-straight-quotes"></i></span>
                                    <p>Travelling was my hobby and gradually I have become addicted to
                                        travelling. This app
                                        helps me every single time when I decide to visit somewhere.
                                        Great app!
                                    </p>
                                    <h2><b-img :src="require('../../assets/img/home-4-img/review-slider-img/avatar2.png')"></b-img>- Xin Nakamura</h2>
                                </div>

                            </div>
                        </div>
                        <!-- single trainer end-->

                    </carousel>

                    </div>
                </div>

            </div>
            <!-- Reviews Slider Area End -->
        </div>
    </section>
    <!-- Reviews Area End -->
  </div>
</template>

<script>

// Client Logo Slider
import carousel from 'vue-owl-carousel'

import SectionHeading2 from '@/components/default/SectionHeading2'
import SectionSubHeading from '@/components/default/SectionSubHeading'

export default {
  name: 'Reviews3',
  components: {
    carousel,
    SectionHeading2,
    SectionSubHeading,
  },
  
  data() {
    return {
      title: 'Great Reviews',
      titleInner: 'Some',
      subTitle: 'Goals are great, we all want gains and the positives that come along with them.',
    };
  },

}
</script>

<style>
/* Review Slider */
.reviews-slider-4 .owl-theme .owl-nav {
	text-align: right;
	bottom: 48%;
	position: absolute;
	right: 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.reviews-slider-4 .owl-theme .owl-nav [class*="owl-"] {
	color: #5b667d;
	padding: 18px 18px;
	background: #bdf6dc;
	border-radius: 0;
    text-transform: capitalize;
    position: relative;
}
.reviews-slider-4 .owl-theme .owl-nav .owl-next {
	right: -60px;
}
.reviews-slider-4 .owl-theme .owl-nav .owl-prev {
	left: -60px;
}
.reviews-slider-4 .owl-theme .owl-nav [class*="owl-"]:hover {
	color: #fff;
	background: #fe9f9f !important;
}
.owl-theme .owl-nav .disabled {
    opacity: 1;
}
.owl-theme .owl-dots .owl-dot span {
	display: none;
}
.reviews-slider-4 .owl-carousel button.owl-dot {
	background-color: #dee5ec;
}
.reviews-slider-4 .owl-theme .owl-dots {
	text-align: center !important;
}
</style>