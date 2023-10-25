<template>
  <div class="">
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
  name: 'About1',
  components: {
    SectionHeading,
    SectionSubHeading,
    CountItem
  },

  data() {
    return {
      aboutImg: require('../../assets/img/about-page-left.png'),
      altText: 'About',
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
    };
  },
}
</script>
