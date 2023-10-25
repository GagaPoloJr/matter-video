<template>
  <div>
    <!-- App Screenshots Slider Area Start -->
    <section class="app-screenshots-slider-area bg-white" id="screenshots">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3">
                    <div class="section-title-area">

                        <!--Section Title Bubble Effect Start-->
                        <div class="section-bubble-effect">
                            <span class="bubble-1"></span>
                            <span class="bubble-2"></span>
                        </div>
                        <!--Section Title Bubble Effect End-->

                        <SectionHeading2 :title="title" :titleInner="titleInner" />
                        <SectionSubHeading :subTitle="subTitle" />
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <!-- Screenshots Slider Wrapper Start-->
                    <div class="screenshots-slider-wrapper position-relative">

                        <div class="screenshots-slider screenshots-slider-5 position-relative">     
                            <carousel :margin="0" :loop="true" :center="true" :autoplay="false" :autoplaySpeed="true" :dots="true" :nav="true" :items="5" :responsive="{0:{items:1,nav:false},480:{items:1,nav:false},600:{items:1,nav:true},900:{items:3,nav:true},1200:{items:5,nav:true}}">
                                
                                <!-- single trainer start-->
                                <div class="item">
                                    <div class="screenshots-box">
                                        <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-2.png')" img-alt="Screenshots"></b-img>
                                    </div>
                                </div>
                                <!-- single trainer end-->

                                <!-- single trainer start-->
                                <div class="item">
                                    <div class="screenshots-box">
                                        <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-3.png')" img-alt="Screenshots"></b-img>
                                    </div>
                                </div>
                                <!-- single trainer end-->

                                <!-- single trainer start-->
                                <div class="item">
                                    <div class="screenshots-box">
                                        <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-4.png')" img-alt="Screenshots"></b-img>
                                    </div>
                                </div>
                                <!-- single trainer end-->

                                <!-- single trainer start-->
                                <div class="item">
                                    <div class="screenshots-box">
                                        <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-5.png')" img-alt="Screenshots"></b-img>
                                    </div>
                                </div>
                                <!-- single trainer end-->

                                <!-- single trainer start-->
                                <div class="item">
                                    <div class="screenshots-box">
                                        <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-2.png')" img-alt="Screenshots"></b-img>
                                    </div>
                                </div>
                                <!-- single trainer end-->

                                <!-- single trainer start-->
                                <div class="item">
                                    <div class="screenshots-box">
                                        <b-img :src="require('../../assets/img/screenshots-slider-img/app-sc-3.png')" img-alt="Screenshots"></b-img>
                                    </div>
                                </div>
                                <!-- single trainer end-->
                            </carousel>
                        </div>

                    </div>
                    <!-- Screenshots Slider Wrapper End-->
                </div>
            </div>
        </div>
    </section>
    <!-- App Screenshots Slider Area End -->
  </div>
</template>

<script>

import SectionHeading2 from '@/components/default/SectionHeading2'
import SectionSubHeading from '@/components/default/SectionSubHeading'

// Client Logo Slider
import carousel from 'vue-owl-carousel'

    export default {
    name: 'ScreenShots5',
    components: {
        carousel,
        SectionHeading2,
        SectionSubHeading,
    },

    data() {
        return {
            title: 'Screenshots',
            titleInner: 'App',
            subTitle: 'Say hello to the all new screens where your travel feed makes it easy to find helpful advice from the travel experts.',
        };
    },
}
</script>

<style>
.screenshots-slider .owl-theme .owl-nav {
	text-align: right;
	bottom: -19px;
	position: absolute;
	right: 0;
	margin-right: 10%;
}
.screenshots-slider .owl-theme .owl-nav [class*="owl-"] {
	color: #fff;
    background: #2f5266;
    border: 1px solid #2f5266;
	padding: 12px 18px;
	border-radius: 0;
    text-transform: capitalize;
}
.screenshots-slider .owl-theme .owl-nav [class*="owl-"]:hover {
	color: #5b667d;
	background: #fff;
}
.screenshots-slider .owl-carousel button.owl-dot {
	background-color: #dee5ec;
	display: inline-block;
}
.owl-theme .owl-nav .disabled {
    opacity: 1;
}
.owl-theme .owl-dots .owl-dot span {
    display: none!important;
}
.owl-theme .owl-dots {
    text-align: left!important;
}
.screenshots-slider .owl-theme .owl-nav [class*="owl-"] {
	padding: 12px 18px;
}
</style>