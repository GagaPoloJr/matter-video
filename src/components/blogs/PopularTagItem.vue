<template>
  <!-- Sidebar Single Widget Start -->
  <div class="widget widget-popular-tags" id="popular-tags">
    <WidgetTitle title="Popular Tags" />
    <ul>
      <PopularTag v-for="tag in tags" :key="tag.id" :tagTitle="tag.tagTitle" />
    </ul>
  </div>
  <!-- Sidebar Single Widget End -->
</template>

<script>
import WidgetTitle from '@/components/blogs/WidgetTitle'
import PopularTag from '@/components/blogs/PopularTag'

export default {
  name: 'PopularTagItem',
  components: {
    WidgetTitle,
    PopularTag,
  },
  data(){
    return {
      tags: [
        {id: 1, tagTitle: 'Agency'},
        {id: 2, tagTitle: 'Branding'},
        {id: 3, tagTitle: 'App'},
        {id: 4, tagTitle: 'Web'},
        {id: 5, tagTitle: 'WordPress'},
        {id: 6, tagTitle: 'UX'},
        {id: 7, tagTitle: 'Envato'},
        {id: 8, tagTitle: 'Photography'},
        {id: 9, tagTitle: 'HTML'},
      ]
    }
  }

}
</script>