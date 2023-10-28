<template>
  <div class="section-matter-5">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-5">
          <div class="heading" v-html="title"></div>
          <div v-html="subTitle"></div>
        </div>
        <div class="col-1"></div>
        <div data-aos="fade-left" class="col-12 col-lg-6 mt-5 mt-md-0">
          <div class="img-wrapper">
            <img
              class="ornament ornament-style-1"
              :src="ornaments.pink"
              alt=""
            />
            <img
              class="ornament ornament-style-3"
              :src="ornaments.blue"
              alt=""
            />
            <img class="img" :src="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionMatter5",
  data() {
    return {
      title: `Online video editing for<span> Everyone </span>`,
      subTitle: `<p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br><br>
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>`,
      image: require("@/assets/img/matter/section5.png"),
      ornaments: {
        pink: require("@/assets/icon/ornament-video-pink.png"),
        blue: require("@/assets/icon/ellipse-blue.png"),
      },
    };
  },
};
</script>

<style scoped>
.section-matter-5 {
  margin-bottom: 100px;
  overflow-x: hidden;

}

.section-matter-5 .heading {
  font-size: 36px;
  margin-bottom: 35px;
}

::v-deep .heading span {
  background: linear-gradient(
    126deg,
    #f801c8 28.29%,
    #0100ff 60.67%,
    #3699ff 83.81%
  );
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-matter-5 p {
  font-size: 16px;
}

.section-matter-5 img {
  max-width: 100%;
  text-align: center;
}

.img-wrapper {
  background: #050748;
  max-width: 552px;
  height: 283px;
  border-radius: 30px;
  position: relative;
}

.img {
  position: absolute;
  z-index: 2;
  overflow: hidden;
  max-width: 100%;
  right: 0;
  bottom: 0;
  border-radius: 10px 10px 30px 0;
}

/* ornament */

.ornament {
  position: absolute;
}

.ornament-style-1 {
  top: 0;
  left: 0;
  z-index: 1;
}

.ornament-style-3 {
  bottom: 50px;
  left: -30px;
  z-index: 4;
  width: 60px;
}

/* media query */

@media screen and (max-width: 768px) {
  .section-matter-5 h1 {
    font-size: 24px;
  }
}
@media screen and (max-width: 578px) {
  .img-wrapper {
    /* height: 150px; */
  }
  .img {
    height: 95%;
    object-fit: cover;
    object-position: left;
  }
  .ornament-style-1 {
    /* width: 100px; */
    /* right: -20px; */
  }
  
  .ornament-style-3 {
    width: 50px;
  }
}
</style>
