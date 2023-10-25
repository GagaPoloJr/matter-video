<template>
  <div>
    <!-- Reviews Area Start -->
    <section id="reviews" class="reviews-area">
        <div class="container">
            <!-- Reviews Slider Area Start -->
            <div class="row reviews-slider-wrapper">
                <div class="col-12 col-sm-12 col-md-6">
                    <div class="reviews-slider reviews-slider-5 position-relative">
                        
                    <carousel :loop="false" :autoplay="false" :autoplaySpeed="true" :rewind="false" :dots="true" :nav="true" :items="5" :responsive="{0:{items:1,nav:false},600:{items:1,nav:true},900:{items:1,nav:true}}">

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
                                    <h2>- Xin Nakamura</h2>
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
                                    <h2>- Xin Nakamura</h2>
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
                                    <h2>- Xin Nakamura</h2>
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
                                    <h2>- Xin Nakamura</h2>
                                </div>

                            </div>
                        </div>
                        <!-- single trainer end-->
                    </carousel>

                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-6">
                    <div class="section-title-area">

                        <!--Section Title Bubble Effect Start-->
                        <div class="section-bubble-effect">
                            <span class="bubble-1"></span>
                            <span class="bubble-2"></span>
                        </div>
                        <!--Section Title Bubble Effect End-->

                        <SectionHeading2 :title="title" :titleInner="titleInner" />

                    </div>
                    <div class="reviews-bg-area">
                        <b-img :src="require('../../assets/img/reviews-slider-bg.jpg')" img-alt="Review"></b-img>
                    </div>
                </div>

            </div>
            <!-- Reviews Slider Area End -->

            <!-- Client Logo Slider Area Start -->
            <div class="row">
                <div class="client-logo-slider">
                    <carousel :margin="15" :loop="true" :center="true" :autoplay="true" :autoplaySpeed="true" :dots="false" :nav="false" :items="5" :responsive="{0:{items:1,nav:false},480:{items:3,nav:false},600:{items:3,nav:false},900:{items:5,nav:false}}">

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/1.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/2.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/3.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/4.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/5.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/3.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/4.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->

                        <!-- Single Client Logo Slider Logo start-->
                        <div class="item">
                            <div class="single-client-logo-box">
                                <a href="#" target="_blank">
                                    <figure>
                                    <b-img :src="require('../../assets/img/client-logo-slider/5.jpg')" img-alt="Logo img"></b-img>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <!-- Single Client Logo Slider Logo end-->
                    </carousel>

                </div>
            </div>
            <!-- Client Logo Slider Area End -->
        </div>
    </section>
    <!-- Reviews Area End -->
  </div>
</template>

<script>
import SectionHeading2 from '@/components/default/SectionHeading2'

// Client Logo Slider
import carousel from 'vue-owl-carousel'

export default {
  name: 'Reviews5',
  components: {
    SectionHeading2,
    carousel
  },
  data() {
    return {
        title: 'Clients’ App Review',
        titleInner: 'Testimonials',
    };
  },
}
</script>

<style>
/* Review Slider */
.reviews-slider .owl-theme .owl-nav {
	text-align: right;
	bottom: -19px;
	position: absolute;
	right: 0;
}
.reviews-slider .owl-theme .owl-nav [class*="owl-"] {
	color: #5b667d;
	padding: 18px 18px;
	background: #fff;
	border-radius: 0;
    text-transform: capitalize;
}
.reviews-slider-5 .owl-theme .owl-nav [class*="owl-"]:hover {
	color: #fff;
	background: #fb238e!important;
}
.owl-theme .owl-nav .disabled {
    opacity: 1;
}
.owl-theme .owl-dots .owl-dot span {
	display: none;
}
/* Client Logo Slider */
.client-logo-slider {
	overflow: hidden;
}
</style>