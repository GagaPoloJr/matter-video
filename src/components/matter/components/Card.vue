<template>
  <div
    :class="[
      'card-default card-linear',
      { 'is-hovered': item.id === hoveredCardId },
    ]"
    @mouseover="setHoveredCard(item.id)"
    @mouseout="setHoveredCard(null)"
  >
    <div class="card-wrapper">
      <img :src="item.icon" alt="" class="image-hover" />
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      hoveredCardId: null,
    };
  },
  methods: {
    setHoveredCard(id) {
      this.hoveredCardId = id;
    },
  },
};
</script>

<style scoped>
.card-default {
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  border: 0.5px solid #6a6a8e;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  background: white;
}

.card-linear {
  transition: all 0.5s ease-in-out;
}

.card-linear.is-hovered {
  background: linear-gradient(
    142deg,
    #f801c8 -3.16%,
    #0100ff 49.07%,
    #01a9ed 104.67%
  );
  color: #fff;
  opacity: 1;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 0.5s ease-in-out;
  gap: 30px;
}

.card-wrapper p {
  width: 100%;
  color: #6a6a8e;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}

.card-linear.is-hovered > .card-wrapper p {
  color: #fff;
}

.card-linear > .card-wrapper .image-hover {
  width: 73px;
  height: 73px;
  transition: filter 0.3s ease-in-out;
}

.card-linear.is-hovered > .card-wrapper .image-hover {
  filter: brightness(0) invert(1);
}
</style>
