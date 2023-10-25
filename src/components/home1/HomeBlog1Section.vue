<template>
  <!-- All Blog Posts Area Start -->
  <section id="blog" class="all-blog-posts-area bg-primary">
      <div class="container">

          <div class="row">
              <div class="col-12">
                  <div class="section-title-area">
                      <SectionHeading title="News & Blogs" />
                      <SectionSubHeading subTitle="An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer" />
                  </div>
              </div>
          </div>

          <!-- All Blog Posts Wrapper-->
            <HomeBlog1 />
          <!-- All Blog Posts Wrapper-->

          <div class="row">
              <router-link to="/bloggrid" class="theme-button">More Blogs</router-link>
          </div>

      </div>

  </section>
  <!-- All Blog Posts Area End -->
</template>

<script>
import SectionHeading from '@/components/default/SectionHeading'
import SectionSubHeading from '@/components/default/SectionSubHeading'
import HomeBlog1 from '@/components/blogs/HomeBlog1'

export default {
  name: 'HomeBlog1Section',
  components: {
    SectionHeading,
    SectionSubHeading,
    HomeBlog1
  }
}
</script>
