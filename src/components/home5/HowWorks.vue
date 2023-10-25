<template>
  <!-- How It Works Area Start -->
  <section id="how-it-works" class="how-it-works-area">
    <div class="container">
      <div class="section-title-area">
        <SectionHeading :title="title" />
        <SectionSubHeading :subTitle="subTitle" />
      </div>

      <div class="row">                  
        <!-- How it works box start -->
        <WorkItem v-for="work in works" :key="work.id"
          :icon="work.icon"
          :title="work.title"
          :text="work.text"
          :image="work.image"
          :altText="work.altText"
        />
        <!-- How it works box end -->

      </div>
    </div>
  </section>
  <!-- How It Works Area End -->
</template>

<script>
import WorkItem from '@/components/home5/WorkItem.vue'
import SectionHeading from '@/components/default/SectionHeading.vue'
import SectionSubHeading from '@/components/default/SectionSubHeading.vue'

export default {
  name: 'HowWorks',
  components: {
    WorkItem,
    SectionHeading,
    SectionSubHeading
  },
  data(){
    return {
      title: 'How It Works',
      subTitle: 'Say hello to the all-new andLAND where your travel feed makes it easy to find helpful advice from travel experts.',

      works:[
        {
          id: 1,
          image: require('../../assets/img/home-5-img/how-it-works-love.png'),
          altText: 'Love',
          icon: 'flaticon-travel',
          title: 'Find Locations',
          text: 'Discover new places now and then to visit with our location directory listing which is easy.',
        },
        {
          id: 2,
          image:require('../../assets/img/home-5-img/how-it-works-love.png'),
          altText: 'Love',
          icon: 'flaticon-teamwork',
          title: 'Connect People',
          text: 'Discover new places now and then to visit with our location directory listing which is easy.',
        },
        {
          id: 3,
          image: require('../../assets/img/home-5-img/how-it-works-love.png'),
          altText: 'Love',
          icon: 'flaticon-game',
          title: 'Start Explore',
          text: 'Discover new places now and then to visit with our location directory listing which is easy.',
        }
      ]
    };
  }

}
</script>