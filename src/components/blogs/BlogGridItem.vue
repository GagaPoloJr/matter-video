<template>
  <!--Single Blog Post Start-->
  <div class="col-12 col-sm-4 col-md-4">
      <div class="single-blog-post">
          <router-link to="/blogsingle">
            <b-img :src="image" fluid :alt="altText"></b-img>
          </router-link>
          <div class="single-blog-content">
              <h4><router-link to="/blogsingle">{{title}}</router-link></h4>
              <h6><router-link to="/blogsingle">{{blogCategory}}</router-link><i class="fas fa-circle"></i>{{publishDate}}</h6>
              <p>{{description}}</p>
          </div>
      </div>
  </div>
  <!--Single Blog Post End-->
</template>

<script>
export default {
  name: 'BlogGridItem',
  props: {
    image: String,
    altText: String,
    title: String,
    blogCategory: String,
    publishDate: String,
    description: String
  }
}
</script>