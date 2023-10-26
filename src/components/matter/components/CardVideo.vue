<template>
  <div class="video-card">
    <img
      class="ornament ornament-style-1"
      :src="require('../../../assets/icon/ornament-video-pink.svg')"
      alt=""
    />
    <div class="video-wrapper">
      <b-img class="img" :src="item.posterImg" :img-alt="item.altText"></b-img>
      <a
        class="venobox play-button"
        data-vbtype="video"
        data-autoplay="true"
        href="http://youtu.be/ik7SkKD3lcI"
        target="_blank"
        ><i class="fas fa-play"></i
      ></a>
    </div>
    <img
      class="ornament ornament-style-2"
      :src="require('../../../assets/icon/ornament-video-blue.svg')"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "CardVideo",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.video-card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 20px;
  background: #fff;
  height: 218px;
  box-shadow: 13px 16px 27px 4px rgba(0, 0, 0, 0.18);
}

.ornament {
  position: absolute;
  width: auto;
}
.ornament-style-1 {
  top: -10px;
  left: -10px;
  z-index: 1;
}
.ornament-style-2 {
  bottom: -50px;
  right: -50px;
  z-index: 4;
}

/* replace the default style.css */

.video-wrapper {
  position: relative;
  border-radius: 20px;
  height: 218px;
  padding: 20px;
}

.video-wrapper img {
  position: relative;
  z-index: 3;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: unset; /**replace the default style.css */
}

.play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  font-size: 18px;
  height: 50px;
  width: 50px;
}

/* replace end */
</style>
