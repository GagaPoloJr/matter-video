<template>
  <div class="">
    <!-- Video Area Start -->
    <section id="video-area" class="video-area">
      <div class="container">
        <div class="row">
          <div v-for="item in items" :key="item.id" class="col-12 col-md-4 video-card">
            <img
              class="ornament ornament-style-1"
              :src="require('../../../assets/icon/ornament-video-pink.svg')"
              alt=""
            />
            <div class="video-wrapper">
              <b-img class="img" :src="item.posterImg" :img-alt="altText"></b-img>
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
        </div>
      </div>
    </section>
    <!-- Video Area End -->
  </div>
</template>

<script>
export default {
  name: "CardVideo",
  data() {
    return {
      posterImg: require("../../../assets/img/video-area-video-poster.jpg"),
      altText: "Video",
      items: [
        {
          id: 1,
          posterImg: require("../../../assets/img/matter/thumb-video-1.jpg"),
        },
        {
          id: 2,
          posterImg: require("../../../assets/img/matter/thumb-video-2.jpg"),
        },
        {
          id: 3,
          posterImg: require("../../../assets/img/matter/thumb-video-3.jpg"),
        },
      ],
    };
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
  left: 5px;
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
  font-size: 23px;
  height: 70px;
  width: 70px;
}

/* replace end */
</style>
