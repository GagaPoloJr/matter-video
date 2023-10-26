<template>
  <div>
    <header-matter />
    <hero />
    <card />
    <card-video />
    <card-price />
    <footer-matter />
  </div>
</template>

<script>
import HeaderMatter from "@/components/matter/layouts/Header.vue";
import FooterMatter from "@/components/matter/layouts/Footer.vue";
import Hero from "@/components/matter/Hero.vue";
import Card from "@/components/matter/components/Card.vue";
import CardPrice from "@/components/matter/components/CardPrice.vue";
import CardVideo from "@/components/matter/components/CardVideo.vue";

export default {
  name: "Matter",
  components: {
    HeaderMatter,
    FooterMatter,
    Hero,
    Card,
    CardPrice,
    CardVideo,
  },
};
</script>
