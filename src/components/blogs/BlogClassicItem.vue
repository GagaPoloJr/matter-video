<template>
  <!-- Block 1-->
  <div class="block-1 ">
    <div class="card">
      <router-link to="/blogsingle"><b-img :src="image" fluid :alt="altText"></b-img></router-link>
      <div class="card-body">
          <h2 class="card-title"><router-link to="/blogsingle">{{title}}</router-link></h2>
          <div class="card-footer d-flex">
            <div class="card-footer-box d-flex">
              <div class="author-box"><span>By {{publishBy}}</span></div>
              <div class="blog-date"><i class="far fa-calendar-alt"></i>{{publishDate}}</div>
              <div class="card-footer-share">
                <i class="far fa-comments"></i> {{commentNumber}}
              </div>
            </div>
          </div>
      </div>
    </div>
    <p>{{description}}</p>

    <!-- Classic Blog Read More Button Start -->
    <div class="classic-blog-button-box">
      <router-link to="single-blog.html" class="theme-button">{{btnText}}</router-link>
      <div class="share-box"><button><i class="fas fa-share-alt"></i> <span>{{shareText}}</span></button></div>
    </div>
    <!-- Classic Blog Read More Button End -->

  </div>
  <!-- Block 1-->
</template>

<script>
export default {
  name: 'BlogClassicItem',
  props: {
    image: String,
    altText: String,
    title: String,
    publishBy: String,
    publishDate: String,
    commentNumber: String,
    description: String,
    btnText: String,
    shareText: String
  }
}
</script>