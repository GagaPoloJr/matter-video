<template>
  <div class="card-price card-price-style" :class="proBadge">
    <div class="card-price-top">
      <h3>{{ item.badge }}</h3>
    </div>
    <div class="card-price-body">
      <div class="price">
        <h1>{{ item.price }}</h1>
        <span>/month</span>
      </div>
      <div class="price-info">
        <ul>
          <li class="price-feat" v-for="(item, index) in listItem" :key="index">
            <img :src="require('@/assets/icon/checkbox.svg')" alt="" />
            {{ item.feat }}
          </li>
        </ul>
      </div>
      <div class="price-btn-wrap">
        <a v-if="item.badge !== 'Pro'" class="price-btn" href="">Get Started</a>
        <cta-button v-else size="xtra-large" text="Get Started" />
      </div>
    </div>
  </div>
</template>

<script>
import CtaButton from "./CtaButton.vue";

export default {
  name: "CardPrice",
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    proBadge() {
      return {
        "pro-style": this.item.badge === "Pro",
      };
    },
  },
  data() {
    return {
      listItem: [
        {
          feat: "Matter Feature",
        },
        {
          feat: "Matter Feature",
        },
        {
          feat: "Matter Feature",
        },
        {
          feat: "Matter Feature",
        },
        {
          feat: "Matter Feature",
        },
      ],
    };
  },
  components: { CtaButton },
};
</script>

<style scoped>
.card-price {
  height: 545px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.1);
}

.card-price-style {
  text-align: center;
  padding: 30px 0;
  transition: all 0.3s ease-in-out;
}

.card-price-style:hover {
  transform: scale(1.01);
}

/* pro style card */

.pro-style{
  height: 600px;
}

.pro-style .card-price-top h3{
  color: #0100FF ;
}

/* end pro style card */

.card-price-top {
  padding-bottom: 30px;
  border-bottom: 1px solid #e2d4d4;
}
.price {
  display: flex;
  justify-content: center;
  align-items: end;
}
.price h1 {
  color: #0100ff;
  font-size: 64px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
.price span {
  padding-bottom: 18px;
}

.card-price-body {
  position: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 10px 0 70px 0;
}

.price-info li {
  line-height: 40px;
}
.price-feat {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.price-btn-wrap .price-btn {
  border-radius: 50px;
  border: 1px solid #01a9ed;
  padding: 16px 42px;
  color: #01a9ed;
}
</style>
