<template>
  <div>
    <header-matter />
    <hero />
    <section-matter1 />
    <section-matter2 />
    <div class="section-white bg-white">
      <section-matter3 />
      <section-matter4 />
      <section-matter5 />
    </div>

    <section-matter6 />
    <section-matter7 />
    <footer-matter />
  </div>
</template>

<script>
import HeaderMatter from "@/components/matter/layouts/Header.vue";
import FooterMatter from "@/components/matter/layouts/Footer.vue";
import Hero from "@/components/matter/Hero.vue";
import SectionMatter1 from "@/components/matter/layouts/Section1.vue";
import SectionMatter2 from "@/components/matter/layouts/Section2.vue";
import SectionMatter3 from "@/components/matter/layouts/Section3.vue";
import SectionMatter4 from "@/components/matter/layouts/Section4.vue";
import SectionMatter5 from "@/components/matter/layouts/Section5.vue";
import SectionMatter6 from "@/components/matter/layouts/Section6.vue";
import SectionMatter7 from "@/components/matter/layouts/Section7.vue";

export default {
  name: "Matter",
  components: {
    HeaderMatter,
    FooterMatter,
    Hero,
    SectionMatter1,
    SectionMatter2,
    SectionMatter3,
    SectionMatter4,
    SectionMatter5,
    SectionMatter6,
    SectionMatter7,
  },
};
</script>

<style scoped>
.section-white {
  padding: 40px 0;
}
</style>
