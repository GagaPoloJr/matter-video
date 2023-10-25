<template>
  <div>
    <!-- Get Free Download Area Start -->
    <section id="download" class="get-free-download-area get-free-download-area-3 bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="get-free-download-wrapper">

                      <div class="section-title-area">
                        
                          <SectionHeading :title="title" />
                          <SectionSubHeading :subTitle="subTitle" />                           
                        
                          <div class="hero-button-box">
                            <a href="https://play.google.com/store/apps">
                              <b-img :src="btnImg1" :img-alt="altText1"></b-img>
                            </a>
                            <a href="https://apps.apple.com/us/app/apple-store/id375380948">
                              <b-img :src="btnImg2" :img-alt="altText2"></b-img>
                            </a>
                          </div>
                      </div>

                      <div class="free-download-mobile-mockup wow fadeInRight">
                        <b-img :src="mockUpImg1" :img-alt="altText3"></b-img>
                        <b-img :src="mockUpImg2" :img-alt="altText4"></b-img>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Get Free Download Area End -->
  </div>
</template>

<script>
import SectionHeading from '@/components/default/SectionHeading'
import SectionSubHeading from '@/components/default/SectionSubHeading'

export default {
  name: 'DownloadApp3',
  components: {
    SectionHeading,
    SectionSubHeading
  },
  data(){
    return{
      title: 'Download the app for free',
      subTitle: 'Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue, egestas egestas purus diam at felis.',
      btnImg1: require('../../assets/img/apple-store-icon.png'),
      altText1: 'Apple Store',
      btnImg2: require('../../assets/img/google-play-store-icon.png'),
      altText2: 'Play Store',
      mockUpImg1: require('../../assets/img/get-free-download1.png'),
      altText3: 'Mockup',
      mockUpImg2: require('../../assets/img/get-free-download2.png'),
      altText4: 'Mockup'
    }
  }
}
</script>
