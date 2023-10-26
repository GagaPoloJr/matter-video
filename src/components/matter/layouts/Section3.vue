<template>
  <div class="section-matter-3">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-5">
          <div class="heading" v-html="title"></div>
          <div v-html="subTitle"></div>
        </div>
        <div class="col-12 col-lg-7">
          <img :src="image" alt="" />
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
      image: require("../../../assets/img/matter/img-section2.png"),
    };
  },
};
</script>

<style scoped>
.section-matter-3 {
  margin-bottom: 100px;
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

/* media query */

@media screen and (max-width: 768px) {
  .section-matter-3 h1 {
    font-size: 24px;
  }
}
</style>
