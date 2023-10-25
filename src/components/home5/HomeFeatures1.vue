<template>
  <div>
    <!-- Features 1 Area Start -->
    <section id="features" class="features-1-area">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="features-1-wrapper">
              <div class="features-1-all-box">

                <Features1Item v-for="feature in features" :key="feature.id"
                  :title="feature.title"
                  :featureText="feature.featureText"
                  :image="feature.image"
                  :altText="feature.altText"
                />

              </div>

              <div class="features-1-mobile-mockup">
                <b-img :src="mockupImg" :img-alt="altText2"></b-img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Effect Images-->
      <div class="background-shape position-absolute">
        <b-img :src="shapeImg" :img-alt="altText3"></b-img>
      </div>
      <div class="background-corner-bg-img position-absolute">
        <b-img :src="cornorImg" img-alt="altText4"></b-img>
      </div>
      <!-- Background Effect Images-->
    </section>
    <!-- Features 1 Area End -->
  </div>
</template>

<script>
import Features1Item from '@/components/home1/Features1Item.vue'

export default {
  name: 'HomeFeatures1',
  components:{
    Features1Item
  },
  data(){
    return{
      features: [
        {
          id: 1,
          title: 'clean design',
          featureText: 'Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce phare tra, diam in hendrerit',
          image: require('../../assets/img/features1-icon-1.png'),
          altText: 'Icon 1'
        },
        {
          id: 2,
          title: 'Hardware Accelaration',
          featureText: 'Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce phare tra, diam in hendrerit',
          image: require('../../assets/img/features1-icon-2.png'),
          altText: 'Icon 2'
        },
        {
          id: 3,
          title: 'Multi-Core Decoding',
          featureText: 'Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce phare tra, diam in hendrerit',
          image: require('../../assets/img/features1-icon-3.png'),
          altText: 'Icon 3'
        }
      ],
      mockupImg: require('../../assets/img/features-1-mockup.png'),
      altText2: 'Features',
      shapeImg: require('../../assets/img/hero-bg-effect.png'),
      altText3: 'bg',
      cornorImg: require('../../assets/img/corner.png'),
      altText4: 'Corner'

    }
  }
}
</script>