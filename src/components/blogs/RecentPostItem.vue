<template>
  <!-- Sidebar Single Widget Start -->
  <div class="widget widget-recent-posts" id="recent-posts">
    <WidgetTitle title="Recent Posts" />
    <ul>
      <RecentPost v-for="recentPost in recentPosts" :key="recentPost.id" :image="recentPost.image" :altText="recentPost.altText" :title="recentPost.title" :publishDate="recentPost.publishDate" />
    </ul>
  </div>
  <!-- Sidebar Single Widget End -->
</template>

<script>
import WidgetTitle from '@/components/blogs/WidgetTitle'
import RecentPost from '@/components/blogs/RecentPost'

export default {
  name: 'RecentPostItem',
  components: {
    WidgetTitle,
    RecentPost

  },
  data(){
    return {
      recentPosts: [
        {id: 1, 
        image: require('../../assets/img/blog-page-img/recent-post-1.jpg'),
        altText: 'Recent Post',
        title: 'Business tactics of an agency',
        publishDate: 'July 04, 2019'
        },
        {id: 2, 
        image: require('../../assets/img/blog-page-img/recent-post-2.jpg'),
        altText: 'Recent Post',
        title: 'Business tactics of an agency',
        publishDate: 'July 04, 2019'
        },
        {id: 3, 
        image: require('../../assets/img/blog-page-img/recent-post-3.jpg'),
        altText: 'Recent Post',
        title: 'Business tactics of an agency',
        publishDate: 'July 04, 2019'
        },
      ]
    }
  }

}
</script>