<template>
  <div class="home home-1" id="list-of-sections">
    <Header1 />
    <Banner1 />
    <About1 />
    <Video1 />
    <ScreenShots />
    <DownloadApp />
    <HomeFeatures1 />
    <HomeFeatures2 />
    <Subscribe />
    <Reviews1 />
    <HomeBlog1Section />
    <HomeContact1 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import Banner1 from '@/components/home1/Banner1.vue'
import About1 from '@/components/home1/About1.vue'
import Video1 from '@/components/home1/Video1.vue'
import ScreenShots from '@/components/home1/ScreenShots.vue'
import DownloadApp from '@/components/home1/DownloadApp.vue'
import HomeFeatures1 from '@/components/home1/HomeFeatures1.vue'
import HomeFeatures2 from '@/components/home1/HomeFeatures2.vue'
import Subscribe from '@/components/home1/Subscribe.vue'
import Reviews1 from '@/components/home1/Reviews1.vue'
import HomeBlog1Section from '@/components/home1/HomeBlog1Section.vue'
import HomeContact1 from '@/components/home1/HomeContact1.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home1',
  components: {
    Header1,
    Banner1,
    About1,
    Video1,
    ScreenShots,
    DownloadApp,
    HomeFeatures1,
    HomeFeatures2,
    Subscribe,
    Reviews1,
    HomeBlog1Section,
    HomeContact1,
    Footer,
  }
}
</script>
