<template>
  <div>
    <!-- About Area Start -->
    <section id="home-3-about-2" class="about-area about-area-3 home-3-about-2">
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
                            <SmallHeading :smallTitle="smallTitle" />
                            <SectionHeading2 :title="title" :titleInner="titleInner" />
                            <SectionSubHeading :subTitle="subTitle" />                           
                          </div>

                          <!--Counter Area Start-->
                          <div class="counter-area h-3-about-3-point-area wow fadeInDown">
                            <p><i class="fas fa-angle-right"></i>{{aboutPoint1}}</p>
                            <p><i class="fas fa-angle-right"></i>{{aboutPoint2}}</p>                           
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
import SectionHeading2 from '@/components/default/SectionHeading2'
import SmallHeading from '@/components/home3/SmallHeading'
import SectionSubHeading from '@/components/default/SectionSubHeading'

export default {
  name: 'About3',
  components: {
    SectionHeading2,
    SmallHeading,
    SectionSubHeading,
  },

  data() {
    return {
      aboutImg: require('../../assets/img/home-3-img/h-3-about-3-left-mobile.png'),
      altText: 'About',
      smallTitle: 'Be productive',
      title: 'change your life forever',
      titleInner: 'A good excercise can',
      subTitle: 'A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along with them.',
      aboutPoint1: 'We looked into the national gym chains, soliciting opinions from readers and friends',
      aboutPoint2: 'We focused on the free weights they tuck into the far corners of the workout floor'
    };
  },
}
</script>
