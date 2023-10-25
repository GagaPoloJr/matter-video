<template>
  <!-- How it works box start -->
  <div class="col-12 col-sm-12 col-md-4">
    <div class="how-it-works-box">
      <div class="how-works-img">
        <span><b-img :src="image" :img-alt="altText"></b-img></span>
        <i :class="icon"></i>
      </div>
      <h3>{{title}}</h3>
      <p>{{text}}</p>
    </div>
  </div>
  <!-- How it works box end -->
</template>

<script>
export default {
  name: 'WorkItem',
  props: {
    image: String,
    altText: String,
    icon: String,
    title: String,
    text: String,
  }
}
</script>