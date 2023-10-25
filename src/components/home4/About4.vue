<template>
  <div>
    <!-- About Area Start -->
    <section id="about" class="about-area">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <div class="about-wrapper">
              <!--About Left Side Start-->
              <div class="about-left-side wow fadeInLeft position-relative">
                <b-img :src="aboutImg1" :img-alt="altText" class="home-2-about-base-img"></b-img>
                <b-img :src="aboutImg2" :img-alt="altText2"  class="home-2-about-float-img"></b-img>
              </div>
              <!--About Left Side End-->

              <!--About Right Side Start-->
              <div class="about-right-side">
                <div class="section-title-area">
                  <SectionHeading :title="title" />
                  <SectionSubHeading :subTitle="subTitle" />  
                </div>

                <!--Counter Area Start-->
                <div class="counter-area wow fadeInDown">
                  <CountItem v-for="countContent in countContents" :key="countContent.id"
                    :countImg="countContent.countImg"
                    :altText="countContent.altText"
                    :endval="countContent.endval"
                    :separator="countContent.separator"
                    :amountText="countContent.amountText"
                    :countText="countContent.countText"
                  />
                </div>
                <!--Counter Area End-->
              </div>
              <!--About Right Side End-->
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- About Area End -->
  </div>
</template>

<script>
import SectionHeading from '@/components/default/SectionHeading'
import SectionSubHeading from '@/components/default/SectionSubHeading'
import CountItem from '@/components/home1/CountItem'

export default {
  name: 'About4',
  components: {
    SectionHeading,
    SectionSubHeading,
    CountItem
  },

  data() {
    return {
      aboutImg1: require('../../assets/img/home-2-img/about-left-1.png'),
      altText: 'About',
      aboutImg2: require('../../assets/img/home-2-img/about-left-2.png'),
      altText2: 'About2',
      title: 'A good decision can change your life forever',
      subTitle: 'A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along with them.',

      // Counter Data
      countContents: [
        {
          id: 1,
          countImg: require('../../assets/img/counter-bg1.png'),
          altText: 'Counter', 
          endval: 1.2,
          separator: '.',
          amountText: 'M',
          countText: 'Downloads' 
        },
        {
          id: 2,
          countImg: require('../../assets/img/counter-bg2.png'),
          altText: 'Counter',           
          endval: 4.8,
          separator: '.',
          amountText: '',
          countText: 'Avg Rating' 
        },
        {
          id: 3,
          countImg: require('../../assets/img/counter-bg3.png'),
          altText: 'Counter', 
          endval: 93,
          separator: '',
          amountText: 'K',
          countText: 'Reviews' 
        },
      ],
      particleImage: require('../../assets/img/home-2-img/home-2-about-bg-effect.png'),
      altText3: 'bg'
    };
  },
}
</script>