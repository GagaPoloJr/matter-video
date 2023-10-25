<template>
  <div class="home-3" id="list-of-sections">
    <Header3 />
    <Banner3 />
    <LogoSlider />
    <Video3 />
    <About3 />
    <Home3About1 />
    <HowWorks />
    <ScreenShots3 />
    <Reviews3 />
    <DownloadApp3 />
    <Team />
    <PopularQuestions />>
    <HomeContact3 />
    <Subscribe3 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header3 from '@/components/Header3.vue'
import Banner3 from '@/components/home3/Banner3.vue'
import LogoSlider from '@/components/home3/LogoSlider.vue'
import Video3 from '@/components/home3/Video3.vue'
import About3 from '@/components/home3/About3.vue'
import Home3About1 from '@/components/home3/Home3About1.vue'
import HowWorks from '@/components/home3/HowWorks.vue'
import ScreenShots3 from '@/components/home3/ScreenShots3.vue'
import Reviews3 from '@/components/home3/Reviews3.vue'
import DownloadApp3 from '@/components/home3/DownloadApp3.vue'
import Team from '@/components/home3/Team.vue'
import PopularQuestions from '@/components/home3/PopularQuestions.vue'
import HomeContact3 from '@/components/home3/HomeContact3.vue'
import Subscribe3 from '@/components/home3/Subscribe3.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home3',
  components: {
    Header3,
    Banner3,
    LogoSlider,
    Video3,
    About3,
    Home3About1,
    HowWorks,
    ScreenShots3,
    Reviews3,
    DownloadApp3,
    Team,
    PopularQuestions,
    Subscribe3,
    HomeContact3,
    Footer,
  }
}
</script>
