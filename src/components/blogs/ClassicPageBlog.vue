<template>
  <div id="content">
    <BlogClassicItem v-for="post in posts" :key="post.id"
        :image="post.image"
        :altText="post.altText"
        :title="post.title"
        :publishBy="post.publishBy"
        :publishDate="post.publishDate"
        :commentNumber="post.commentNumber"
        :description="post.description"
        :btnText="post.btnText"
        :shareText="post.shareText"
      />

    <!-- Blog Pagination Box-->
    <nav class="pagination-area">

      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        :per-page="perPage"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last">
      </b-pagination>

    </nav>

    <!-- Blog Pagination Box-->
</div>
</template>

<script>
import BlogClassicItem from '@/components/blogs/BlogClassicItem'

export default {
  name: 'ClassicPageBlog',
  components: {
    BlogClassicItem
  },
  data() {
    return {
      posts: [
        { 
          id: 1,
          image: require('../../assets/img/blog-page-img/blog-page-img-1.jpg'),
          altText: 'Blog Thumb',
          title: 'Silly Mistakes People Do Starting a Startup',
          publishBy: 'Admin',
          publishDate: '06 Sep, 2019',
          commentNumber: '07 Comments ',
          description: 'Nulla quntum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos.',
          btnText: 'Read More',
          shareText: 'Share this article'
        },
        {
          id: 2,
          image: require('../../assets/img/blog-page-img/blog-page-img-2.jpg'),
          altText: 'Blog Thumb',
          title: 'Silly Mistakes People Do Starting a Startup',
          publishBy: 'Admin',
          publishDate: '06 Sep, 2019',
          commentNumber: '07 Comments ',
          description: 'Nulla quntum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos.',
          btnText: 'Read More',
          shareText: 'Share this article'
        },
        {
          id: 3,
          image: require('../../assets/img/blog-page-img/blog-page-img-3.jpg'),
          altText: 'Blog Thumb',
          title: 'Silly Mistakes People Do Starting a Startup',
          publishBy: 'Admin',
          publishDate: '06 Sep, 2019',
          commentNumber: '07 Comments ',
          description: 'Nulla quntum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos.',
          btnText: 'Read More',
          shareText: 'Share this article'
        },
      ],
      // Pagination Data
      rows: 100,
      perPage: 9,
      currentPage: 1
    }
  }
}
</script>