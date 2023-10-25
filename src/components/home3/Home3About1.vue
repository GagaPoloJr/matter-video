<template>
  <div>
    <!-- About Area Start -->
    <section id="about" class="about-area about-area-3 home-3-main-about">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <div class="about-wrapper">

              <!--About Right Side Start-->
              <div class="about-right-side">
                <div class="section-title-area">
                  <SmallHeading :smallTitle="smallTitle" />
                  <SectionHeading2 :title="title" :titleInner="titleInner" />
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

              <!--About Left Side Start-->
              <div class="about-left-side wow fadeInLeft position-relative">
                  <b-img :src="aboutImg" :img-alt="altText"></b-img>
              </div>
              <!--About Left Side End-->

            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- About Area End -->
  </div>
</template>

<script>
import SectionHeading2 from '@/components/default/SectionHeading2'
import SmallHeading from '@/components/home3/SmallHeading'
import SectionSubHeading from '@/components/default/SectionSubHeading'
import CountItem from '@/components/home1/CountItem'

export default {
  name: 'Home3About1',
  components: {
    SectionHeading2,
    SmallHeading,
    SectionSubHeading,
    CountItem
  },

  data() {
    return {
      aboutImg: require('../../assets/img/home-3-img/h-3-about-3-left-mobile.png'),
      altText: 'About',
      smallTitle: 'Best App',
      title: 'your purpose right',
      titleInner: 'We designed the app to serve',
      subTitle: 'A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along with them.',
      aboutPoint1: 'We looked into the national gym chains, soliciting opinions from readers and friends',
      aboutPoint2: 'We focused on the free weights they tuck into the far corners of the workout floor',

      // Counter Data
      countContents: [
        {
          id: 1,
          altText: 'Counter', 
          endval: 1.2,
          separator: '.',
          amountText: 'M',
          countText: 'Downloads' 
        },
        {
          id: 2,
          altText: 'Counter',           
          endval: 4.8,
          separator: '.',
          amountText: '',
          countText: 'Avg Rating' 
        },
        {
          id: 3,
          altText: 'Counter', 
          endval: 93,
          separator: '',
          amountText: 'K',
          countText: 'Reviews' 
        },
      ],
    };
  },
}
</script>