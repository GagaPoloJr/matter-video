<template>
  <!-- Single Blog Details Page Area Start -->
  <section class="blog-page-area">
    <div class="container">
      <!-- Row Start-->
      <div class="row">

        <!-- ALl Grid Blog Wrapper -->
        <div class="col-12 col-sm-12 col-md-12 col-lg-9">
          <SinglePageBlog />
        </div>
          <!-- All Grid Blog Wrapper -->

          <!-- Single Blog Aside -->
          <BlogSidebar />
          <!-- Single Blog Aside  -->

      </div>
      <!-- Row End-->

    </div>
  </section>
  <!-- Single Blog Details Page Area End -->
</template>

<script>
import SinglePageBlog from '@/components/blogs/SinglePageBlog'
import BlogSidebar from '@/components/blogs/BlogSidebar'

export default {
  name: 'BlogSinglePageLayout',
  components: {
    SinglePageBlog,
    BlogSidebar
  }
}
</script>