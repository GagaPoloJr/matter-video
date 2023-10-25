<template>
  <div class="home-5" id="list-of-sections">
    <Header5 />
    <Banner5 />
    <About5 />
    <HowWorks />
    <ScreenShots5 />
    <Video5 />
    <HomeFeatures2 />
    <DownloadApp/>
    <Reviews5 />
    <Home5BlogSection />
    <Home5Contact1 />
    <Footer5 />
  </div>
</template>

<script>
// @ is an alias to /src
import Header5 from '@/components/Header5.vue'
import Banner5 from '@/components/home5/Banner5.vue'
import About5 from '@/components/home5/About5.vue'
import HowWorks from '@/components/home5/HowWorks.vue'
import ScreenShots5 from '@/components/home5/ScreenShots5.vue'
import Video5 from '@/components/home5/Video5.vue'
import DownloadApp from '@/components/home1/DownloadApp.vue'
import HomeFeatures2 from '@/components/home1/HomeFeatures2.vue'
import Reviews5 from '@/components/home5/Reviews5.vue'
import Home5BlogSection from '@/components/home5/Home5BlogSection.vue'
import Home5Contact1 from '@/components/home5/Home5Contact1.vue'
import Footer5 from '@/components/Footer5.vue'

export default {
  name: 'Home5',
  components: {
    Header5,
    Banner5,
    About5,
    HowWorks,
    ScreenShots5,
    Video5,
    DownloadApp,
    HomeFeatures2,
    Reviews5,
    Home5BlogSection,
    Home5Contact1,
    Footer5,
  }
}
</script>
<style>
  .home-5 .single-blog-content p {
    display: none;
  }
</style>