<template>
  <!-- How it works box start -->
  <div class="how-it-works-box">
    <div class="how-works-img">
      <i :class="icon"></i>
    </div>
    <h3>{{title}}</h3>
    <p>{{text}}</p>
    <div class="works-dash-line position-absolute">
      <b-img :src="arrowImg" :img-alt="altText"></b-img>
    </div>
  </div>
  <!-- How it works box end -->
</template>

<script>
export default {
  name: 'WorkItem',
  props: {
    icon: String,
    title: String,
    text: String,
    arrowImg: String,
    altText: String
  }
}
</script>