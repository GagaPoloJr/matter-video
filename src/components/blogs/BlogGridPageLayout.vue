<template>
  <!-- All Blog Posts Area Start -->
  <section id="blog" class="all-blog-posts-area bg-primary">
    <div class="container">
      <!-- All Blog Posts Wrapper-->
        <GridPageBlog1 />
      <!-- All Blog Posts Wrapper-->
    </div>
  </section>
  <!-- All Blog Posts Area End -->
</template>

<script>
import GridPageBlog1 from '@/components/blogs/GridPageBlog1'

export default {
  name: 'BlogGridPageLayout',
  components: {
    GridPageBlog1
  }
}
</script>