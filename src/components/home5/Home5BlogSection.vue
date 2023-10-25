<template>
  <!-- All Blog Posts Area Start -->
  <section id="blog" class="all-blog-posts-area bg-primary">
    <div class="container">

      <div class="row">
        <div class="col-12">
          <div class="section-title-area">
            
            <!--Section Title Bubble Effect Start-->
            <div class="section-bubble-effect">
              <span class="bubble-1"></span>
              <span class="bubble-2"></span>
            </div>
            <!--Section Title Bubble Effect End-->

            <SectionHeading2 :title="title" :titleInner="titleInner" />
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
import SectionHeading2 from '@/components/default/SectionHeading2'
import SectionSubHeading from '@/components/default/SectionSubHeading'
import HomeBlog1 from '@/components/blogs/HomeBlog1'

export default {
  name: 'Home5BlogSection',
  components: {
    SectionHeading2,
    SectionSubHeading,
    HomeBlog1
  },
  data() {
    return {
        title: 'Stories and News',
        titleInner: 'Blogs',
    };
  },
}
</script>