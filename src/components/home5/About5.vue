<template>
  <div>
    <!-- About Area Start -->
    <section id="about" class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <div class="about-wrapper">
              <!--About Left Side Start-->
              <div class="about-left-side wow fadeInLeft">
                <b-img :src="aboutImg" :img-alt="altText"></b-img>
              </div>
              <!--About Left Side End-->

              <!--About Right Side Start-->
              <div class="about-right-side">
                <div class="section-title-area">

                  <!--Section Title Bubble Effect Start-->
                  <div class="section-bubble-effect">
                    <span class="bubble-1"></span>
                    <span class="bubble-2"></span>
                  </div>
                  <!--Section Title Bubble Effect End-->

                  <SectionHeading2 :title="title" :titleInner="titleInner" />
                  <SectionSubHeading :subTitle="subTitle" />  

                  <a href="https://play.google.com/store/apps" class="theme-button">Download Now</a>                         
                </div>
              </div>
              <!--About Right Side End-->
            </div>

          </div>
        </div>
      </div>
      <!-- Background Effect Images-->
      <div class="background-corner-bg-img position-absolute">
        <b-img :src="cornorbgImg" :img-alt="altText2"></b-img>
      </div>
      <!-- Background Effect Images-->
    </section>

    <!-- About Area End -->
  </div>
</template>

<script>
import SectionHeading2 from '@/components/default/SectionHeading2'
import SectionSubHeading from '@/components/default/SectionSubHeading'

export default {
  name: 'About1',
  components: {
    SectionHeading2,
    SectionSubHeading,
  },

  data() {
    return {
      aboutImg: require('../../assets/img/home-5-img/about-page-left.png'),
      altText: 'About',
      title: 'RATH Apps',
      titleInner: 'Meet',
      subTitle: 'Say hello to the all new app where your travel feed makes it easy to find helpful advice from the friends and travel experts you follow, along with millions of traveler reviews.',

      cornorbgImg: require('../../assets/img/corner.png'),
      altText2: 'Cornor'
    };
  },
}
</script>