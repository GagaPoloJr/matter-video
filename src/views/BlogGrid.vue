<template>
  <div class="home home-1" id="list-of-sections">
    <Header1 />
    <PageBanner />
    <BlogGridPageLayout />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import PageBanner from '@/components/default/PageBanner.vue'
import BlogGridPageLayout from '@/components/blogs/BlogGridPageLayout.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header1,
    PageBanner,
    BlogGridPageLayout,
    Footer,
  }
}
</script>
