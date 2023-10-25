<template>
  <div class="home home-1" id="list-of-sections">
    <Header1 />
    <PageBanner />
    <BlogSinglePageLayout />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import PageBanner from '@/components/default/PageBanner.vue'
import BlogSinglePageLayout from '@/components/blogs/BlogSinglePageLayout.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'BlogSingle',
  components: {
    Header1,
    PageBanner,
    BlogSinglePageLayout,
    Footer,
  },

}
</script>
