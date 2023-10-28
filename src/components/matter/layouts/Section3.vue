<template>
  <div class="section-matter-3">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-6">
          <div class="heading" v-html="title"></div>
          <div v-html="subTitle"></div>
        </div>
        <div class="col-1"></div>
        <div data-aos="fade-left" class="col-12 col-lg-5">
          <div class="img-wrapper">
            <img
              class="ornament ornament-style-1"
              :src="ornaments.pink"
              alt=""
            />
            <img
              class="ornament ornament-style-2"
              :src="ornaments.blueLight"
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
  name: "SectionMatter3",
  data() {
    return {
      title: `Choose your favourite <span> Template </span>`,
      subTitle: `<p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br><br>
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>`,
      image: require("@/assets/img/matter/section3.png"),
      ornaments: {
        pink: require("@/assets/icon/ellipse-pink.png"),
        blue: require("@/assets/icon/rect-blue-small.png"),
        blueLight: require("@/assets/icon/rect-blue.png"),
      },
    };
  },
};
</script>

<style scoped>
.section-matter-3 {
  margin-bottom: 100px;
  overflow-x: hidden;

}

.section-matter-3 .heading {
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

.section-matter-3 p {
  font-size: 16px;
}

.section-matter-3 img {
  max-width: 100%;
  text-align: center;
}

.img-wrapper {
  background: #050748;
  max-width: 552px;
  max-height: 283px;
  border-radius: 30px;
  position: relative;
}

.img{
  position: relative;
  z-index: 2;
}

/* ornament */

.ornament{
  position: absolute;
}

.ornament-style-1{
top: 20px;
right:-20px;
z-index: 1;
}
.ornament-style-2{
bottom: -80px;
left:-50px;
}
.ornament-style-3{
bottom: -80px;
right:0;
z-index: 4;
}
/* media query */

@media screen and (max-width: 768px) {
  .section-matter-3 h1 {
    font-size: 24px;
  }
}

@media screen and (max-width:578px){
  .ornament-style-1{
    width: 30px;
    right:-20px;
  }
  .ornament-style-2{
    bottom: -40px;
    width: 100px;
    left:-20px;
  }
}
</style>
