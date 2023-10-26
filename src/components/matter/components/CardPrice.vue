<template>
  <div class="wrapper">
    <div
      v-for="item in items"
      :key="item.id"
      class="card-price card-price-style"
    >
      <div class="card-price-top">
        <h3>Free</h3>
      </div>
      <div class="card-price-body">
        <div class="price">
          <h1>$20</h1>
          <span>/month</span>
        </div>
        <div class="price-info">
          <ul>
            <li>Matter Feature</li>
            <li>Matter Feature</li>
            <li>Matter Feature</li>
            <li>Matter Feature</li>
            <li>Matter Feature</li>
          </ul>
        </div>
        <div class="price-btn">
          <a href="">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardPrice",
  data() {
    return {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
}
.card-price {
  width: 100%;
  max-width: 373px;
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
.price-btn a {
  border-radius: 50px;
  border: 1px solid #01a9ed;
  padding: 16px 42px;
}
</style>
