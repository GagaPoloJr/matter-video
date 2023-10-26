<template>
  <section class="section-matter-video">
    <div class="container">
      <div class="wrapper">
        <div class="heading">
          <h3 class="colored">Make your videos like a Pro</h3>
        </div>
        <div class="wrapper-style">
          <card-video :item="item" v-for="item in items" :key="item.id" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardVideo from "@/components/matter/components/CardVideo.vue";
export default {
  name: "SectionMatter6",
  components: {
    CardVideo,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          altText: "Video",
          posterImg: require("../../../assets/img/matter/thumb-video-1.jpg"),
        },
        {
          id: 2,
          altText: "Video",
          posterImg: require("../../../assets/img/matter/thumb-video-2.jpg"),
        },
        {
          id: 3,
          altText: "Video",
          posterImg: require("../../../assets/img/matter/thumb-video-3.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-matter-video .wrapper {
  text-align: center;
}

.heading {
  margin-bottom: 25px;
}
.heading h3 {
  font-weight: 300;
}
.heading .colored {
    background: linear-gradient(
    91deg,
    #f801c8 10.68%,
    #0100ff 76.77%,
    #01a9ed 104.73%
  );
  font-weight: 500;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.wrapper-style {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
}
</style>
