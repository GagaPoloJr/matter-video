<template>
  <li>
    <router-link to="blogsingle" class="d-flex align-items-center">
      <img :src="image" :alt="altText">
      <p>{{title}}<span>{{publishDate}}</span></p>
    </router-link>
  </li>
        
</template>

<script>
export default {
  name: 'RecentPost',
  props: {
    image: String,
    altText: String,
    title: String,
    publishDate: String,
  }
}
</script>