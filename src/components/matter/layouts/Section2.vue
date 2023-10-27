<template>
  <div class="section-matter-2">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-5">
          <h1>{{ title }}</h1>
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
  name: "SectionMatter2",
  data() {
    return {
      title: "#ContentThatMatter",
      subTitle: `<p>
            <b>We are pioneers in AI automation</b>, committed to transforming your business operations. <br><br>
Our top-notch AI solutions streamline processes, eliminate human error, and boost productivity. <br><br>
With our expertise in machine learning and robotic process automation, we empower businesses to drive growth and deliver unrivalled customer experiences.
            </p>`,
      image: require("../../../assets/img/matter/img-section2.png"),
    };
  },
};
</script>

<style scoped>
.section-matter-2 {
  margin-bottom: 100px;
}

.section-matter-2 h1 {
  background: linear-gradient(
    91deg,
    #f801c8 6.68%,
    #0100ff 46.77%,
    #01a9ed 104.73%
  );
  font-size: 36px;
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 35px;
}

.section-matter-2 p {
  font-size: 16px;
}

.section-matter-2 img {
  max-width: 125%;
  text-align: center;
}

/* replace default */
::v-deep b,
strong {
  font-weight: 600;
}

/* media query */

@media screen and (max-width: 768px) {
  .section-matter-2 h1 {
    font-size: 24px;
  }
  .section-matter-2 img {
    max-width: 100%;
    width: 100%;
    text-align: center;
  }
}
</style>
