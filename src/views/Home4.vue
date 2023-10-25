<template>
  <div class="home-2 home-4" id="list-of-sections">
    <Header4 />
    <Banner4 />
    <LogoSlider />
    <About4 />
    <DownloadApp4 />
    <Home4Features1 />
    <ScreenShots />
    <PopularQuestions />
    <Reviews3 />
    <HomeBlog1Section />
    <HomeContact1 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header4 from '@/components/Header4.vue'
import Banner4 from '@/components/home4/Banner4.vue'
import LogoSlider from '@/components/home4/LogoSlider.vue'
import About4 from '@/components/home4/About4.vue'
import DownloadApp4 from '@/components/home4/DownloadApp4.vue'
import Home4Features1 from '@/components/home4/Home4Features1.vue'
import ScreenShots from '@/components/home1/ScreenShots.vue'
import PopularQuestions from '@/components/home4/PopularQuestions.vue'
import Reviews3 from '@/components/home4/Reviews3.vue'
import HomeBlog1Section from '@/components/home1/HomeBlog1Section.vue'
import HomeContact1 from '@/components/home1/HomeContact1.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home4',
  components: {
    Header4,
    Banner4,
    LogoSlider,
    About4,
    DownloadApp4,
    Home4Features1,
    ScreenShots,
    PopularQuestions,
    Reviews3,
    HomeBlog1Section,
    HomeContact1,
    Footer,
  }
}
</script>
