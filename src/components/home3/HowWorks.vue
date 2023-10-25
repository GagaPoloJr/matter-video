<template>
<!-- How It Works Area Start -->
<section id="how-it-works" class="how-it-works-area how-it-works-area-3">
  <div class="container">
    <div class="section-title-area">
      <SectionHeading2 :title="title" :titleInner="titleInner" />
    </div>

    <div class="row">
      <div class="col-12">

        <div class="how-it-works-wrapper">                    
          <!-- How it works box start -->
          <WorkItem v-for="work in works" :key="work.id"
            :icon="work.icon"
            :title="work.title"
            :text="work.text"
            :arrowImg="work.arrowImg"
            :altText="work.altText"
          />
          <!-- How it works box end -->
        </div>
      </div>

    </div>
  </div>
</section>
<!-- How It Works Area End -->
</template>

<script>
import WorkItem from '@/components/home3/WorkItem.vue'
import SectionHeading2 from '@/components/default/SectionHeading2.vue'

export default {
  name: 'HowWorks',
  components: {
    WorkItem,
    SectionHeading2
  },
  data(){
    return {
      title: 'Works',
      titleInner: 'How it',

      works:[
        {
          id: 1,
          icon: 'flaticon-download',
          title: 'Install App',
          text: 'Download the app from Apple and Android app store. It’s free and always will be',
          arrowImg: require('../../assets/img/home-3-img/how-it-arrow-line-1.png'),
          altText: 'arrow'
        },
        {
          id: 2,
          icon: 'flaticon-user',
          title: 'Sign In',
          text: 'Sign in with required information shown on the screen to create a profile',
          arrowImg: require('../../assets/img/home-3-img/how-it-arrow-line-2.png'),
          altText: 'arrow'
        },
        {
          id: 3,
          icon: 'flaticon-gym',
          title: 'Start Workout',
          text: 'Choose your best category and start workout. Make the most use of the app',
          arrowImg: '',
          altText: 'arrow'
        }
      ]
    };
  }

}
</script>