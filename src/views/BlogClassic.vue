<template>
  <div class="home home-1" id="list-of-sections">
    <Header1 />
    <PageBanner />
    <BlogClassicSection />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import PageBanner from '@/components/default/PageBanner.vue'
import BlogClassicSection from '@/components/home1/BlogClassicSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'BlogClassic',
  components: {
    Header1,
    PageBanner,
    BlogClassicSection,
    Footer,
  }
}
</script>
