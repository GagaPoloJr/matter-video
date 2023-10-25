<template>
  <div class="col-12 col-sm-12 col-md-12 col-lg-3">
    <aside class="sidebar" id="sidebar">

      <!-- Sidebar Single Widget Start -->
      <SearchItem />
      <!-- Sidebar Single Widget End -->

      <!-- Sidebar Single Widget Start -->
      <BlogCategoryItem />
      <!-- Sidebar Single Widget End -->

      <!-- Sidebar Single Widget Start -->
      <RecentPostItem />
      <!-- Sidebar Single Widget End -->

      <!-- Sidebar Single Widget Start -->
      <PopularTagItem />
      <!-- Sidebar Single Widget End -->

    </aside>
  </div>
</template>

<script>
import SearchItem from '@/components/blogs/SearchItem'
import BlogCategoryItem from '@/components/blogs/BlogCategoryItem'
import RecentPostItem from '@/components/blogs/RecentPostItem'
import PopularTagItem from '@/components/blogs/PopularTagItem'

export default {
  name: 'BlogSidebar',
  components: {
    SearchItem,
    BlogCategoryItem,
    RecentPostItem,
    PopularTagItem
  }

}
</script>