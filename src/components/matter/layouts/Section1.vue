<template>
  <section id="feature" class="section-matter-editing">
    <div class="container">
      <div class="wrapper">
        <div class="heading">
          <h3>Make your editing <span class="colored">Easier</span></h3>
        </div>
        <div data-aos="fade-down" class="wrapper-style">
          <card :item="item" v-for="item in items" :key="item.id" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/matter/components/Card.vue";

export default {
  name: "SectionMatter1",
  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          icon: require("@/assets/icon/media.svg"),
          text: "Upload media, or choose a template",
        },
        {
          id: 2,
          icon: require("@/assets/icon/video.svg"),
          text: "Edit your project Trim or Crop Video",
        },
        {
          id: 3,
          icon: require("@/assets/icon/text.svg"),
          text: "Add text, transitions and effects",
        },
        {
          id: 4,
          icon: require("@/assets/icon/add-logo.svg"),
          text: "Add your logo and any subtitles",
        },
        {
          id: 5,
          icon: require("@/assets/icon/resize.svg"),
          text: "Resize and save in your resolution choose",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-matter-editing .wrapper {
  background: #fff;
  padding: 60px 30px;
  border-radius: 20px;
  box-shadow: 20px 20px 40px 0px rgba(167, 167, 167, 0.1);
}

.heading {
  margin-bottom: 25px;
}
.heading h3 {
  font-weight: 300;
}
.heading .colored {
  color: #0100ff;
  font-weight: 800;
}
.wrapper-style {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(198px, 1fr));
  justify-content: center;
}
</style>
