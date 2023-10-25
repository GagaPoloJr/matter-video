<template>
  <div class="home-2" id="list-of-sections">
    <Header2 />
    <Banner2 />
    <ScreenShots />
    <About2 />
    <DownloadApp2 />
    <Home2Features1 />
    <Home2Features2 />
    <Video1 />
    <Reviews2 />
    <HomeContact1 />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header2 from '@/components/Header2.vue'
import Banner2 from '@/components/home2/Banner2.vue'
import About2 from '@/components/home2/About2.vue'
import Video1 from '@/components/home1/Video1.vue'
import ScreenShots from '@/components/home1/ScreenShots.vue'
import DownloadApp2 from '@/components/home2/DownloadApp2.vue'
import Home2Features1 from '@/components/home2/Home2Features1.vue'
import Home2Features2 from '@/components/home2/Home2Features2.vue'
import Reviews2 from '@/components/home2/Reviews2.vue'
import HomeContact1 from '@/components/home1/HomeContact1.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home2',
  components: {
    Header2,
    Banner2,
    About2,
    Video1,
    ScreenShots,
    DownloadApp2,
    Home2Features1,
    Home2Features2,
    Reviews2,
    HomeContact1,
    Footer,
  }
}
</script>