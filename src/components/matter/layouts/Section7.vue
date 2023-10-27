<template>
  <section id="pricing" class="section-matter-pricing">
    <div class="container">
      <div
        class="pricing-heading row justify-content-center align-items-center text-center"
      >
        <div class="col-12">
          <h1 class="pricing-title">{{ title }}</h1>
          <p class="pricing-subtitle">{{ subTitle }}</p>
          <p class="pricing-text">{{ text }}</p>
        </div>
      </div>
      <div class="pricing-wrapper">
        <card-price :item="item" v-for="item in items" :key="item.id" />
      </div>
    </div>
  </section>
</template>

<script>
import CardPrice from "@/components/matter/components/CardPrice.vue";

export default {
  name: "SectionMatter7",
  components: {
    CardPrice,
  },
  data() {
    return {
      title: "Matter Pricing",
      subTitle: "Start planning your video with our top picks",
      text: "Sign up in less than 30 second. Try out 7 day risk free trial, upgrade at anytime, no questions, no hassle.",
      items: [
        {
          id: 1,
          badge: "Free",
          price: "$0",
        },
        {
          id: 2,
          badge: "Premium",
          price: "$20",
        },
        {
          id: 3,
          badge: "Pro",
          price: "$50",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-matter-pricing {
  background: #050748;
}

.pricing-heading {
  margin-bottom: 100px;
}
.pricing-title,
.pricing-subtitle,
.pricing-text {
  color: #fff;
}

.pricing-title {
  font-size: 36px;
  font-weight: 700;
}
.pricing-subtitle {
  font-size: 16px;
  font-weight: 800;
  margin-top: 25px;

}
.pricing-text {
  margin-top: 10px;
}

.pricing-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
