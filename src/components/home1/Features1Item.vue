<template>
  <!-- Single Features Box-->
  <div class="single-features-1-box wow fadeInUp">
      <div class="single-features-1-text">
          <h4>{{title}}</h4>
          <p>{{featureText}}</p>
      </div>
      <div class="single-features-1-img position-relative">
        <b-img :src="image" :img-alt="altText"></b-img>
      </div>
  </div>
  <!-- Single Features Box-->
</template>

<script>
export default {
  name: 'Features1Item',
  props: {
    title: String,
    featureText: String,
    image: String,
    altText: String
  }
}
</script>
