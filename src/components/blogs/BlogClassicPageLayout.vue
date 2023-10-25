<template>
  <!-- Single Blog Details Page Area Start -->
  <section class="blog-page-area">
    <div class="container">
      <!-- Row Start-->
      <div class="row">

        <!-- ALl Grid Blog Wrapper -->
        <div class="col-12 col-sm-12 col-md-12 col-lg-9">
            <ClassicPageBlog/>
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
import ClassicPageBlog from '@/components/blogs/ClassicPageBlog'
import BlogSidebar from '@/components/blogs/BlogSidebar'

export default {
  name: 'BlogClassicPageLayout',
  components: {
    ClassicPageBlog,
    BlogSidebar
  }
}
</script>