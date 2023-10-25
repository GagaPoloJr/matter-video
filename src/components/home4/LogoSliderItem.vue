<template>
  <div class="item">
    <div class="single-client-logo-box">
      <a href="#!">
        <figure>
          <b-img :src="logoImg" :img-alt="altText"></b-img>
        </figure>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoSliderItem',
  props: {
    logoImg: String,
    altText: String
  }
}
</script>