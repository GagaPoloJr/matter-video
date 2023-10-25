<template>
  <!-- Sidebar Single Widget Start -->
  <div class="widget widget-categories" id="categories">
    <WidgetTitle title="Categories" />
    <ul>
      <BlogCategory v-for="blogCategorie in blogCategories" :key="blogCategorie.id" :categoryTitle="blogCategorie.categoryTitle" :categoryNumber="blogCategorie.categoryNumber" />
    </ul>
  </div>
  <!-- Sidebar Single Widget End -->
</template>

<script>
import WidgetTitle from '@/components/blogs/WidgetTitle'
import BlogCategory from '@/components/blogs/BlogCategory'

export default {
  name: 'BlogCategoryItem',
  components: {
    WidgetTitle,
    BlogCategory,
  },
  data(){
    return {
      blogCategories: [
        {id: 1, categoryTitle: 'Web Application', categoryNumber: 15},
        {id: 2, categoryTitle: 'App Development', categoryNumber: 10},
        {id: 3, categoryTitle: 'Branding', categoryNumber: 21},
        {id: 4, categoryTitle: 'UX Design', categoryNumber: 74},
        {id: 5, categoryTitle: 'Photography', categoryNumber: 38},
      ]
    }
  }

}
</script>