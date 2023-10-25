<template>
  <div class="row all-blog-posts-wrapper">
    <BlogGridItem v-for="post in posts.slice(0, 3)" :key="post.id"
        :image="post.image"
        :altText="post.altText"
        :title="post.title"
        :blogCategory="post.blogCategory"
        :publishDate="post.publishDate"
        :description="post.description"
      />
</div>
</template>

<script>
import BlogGridItem from '@/components/blogs/BlogGridItem'

export default {
  name: 'HomeBlog1',
  components: {
    BlogGridItem
  },
  data() {
    return {
      posts: [
        { 
          id: 1,
          image: require('../../assets/img/blog-img/blog1.jpg'),
          altText: 'Blog Thumb',
          title: 'Tech Companies Faced Privacy Backlash',
          blogCategory: 'News',
          publishDate: '18 July, 2019',
          description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
        },
        {
          id: 2,
          image: require('../../assets/img/blog-img/blog2.jpg'),
          altText: 'Blog Thumb',
          title: 'Android Apps Those Are Going to Rule 2019',
          blogCategory: 'Tech',
          publishDate: '19 July, 2019',
          description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam' 
        },
        {
          id: 3,
          image: require('../../assets/img/blog-img/blog3.jpg'),
          altText: 'Blog Thumb',
          title: 'Apple Introduces Major Redesign to iOS 13',
          blogCategory: 'Mobile',
          publishDate: '22 July, 2019',
          description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
        },
        {
          id: 4,
          image: require('../../assets/img/blog-img/blog4.jpg'),
          altText: 'Blog Thumb',
          title: 'Apple Introduces Major Redesign to iOS 13',
          blogCategory: 'News',
          publishDate: '22 July, 2019',
          description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
        },
        {
          id: 5,
          image: require('../../assets/img/blog-img/blog5.jpg'),
          altText: 'Blog Thumb',
          title: 'Apple Introduces Major Redesign to iOS 13',
          blogCategory: 'Tech',
          publishDate: '22 July, 2019',
          description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
        },
        {
          id: 6,
          image: require('../../assets/img/blog-img/blog6.jpg'),
          altText: 'Blog Thumb',
          title: 'Apple Introduces Major Redesign to iOS 13',
          blogCategory: 'Mobile',
          publishDate: '22 July, 2019',
          description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam'
        }
      ]
    }
  }
}
</script>