<template>
  <div class="wrapper">
    <div v-for="item in items" :key="item.id" class="card-default card-linear">
      <div class="card-wrapper">
        <img
          :src="require('@/assets/icon/media.svg')"
          alt=""
          class="image-hover"
        />
        <p>Upload media, or choose a template</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
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
  gap: 20px;
}

.card-default {
  max-width: 198px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 20px;
  border: 0.5px solid #6a6a8e;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out; /* Apply transition specifically to the 'background' property */
}

.card-linear {
  background-image: linear-gradient(
    142deg,
    #f801c8 -3.16%,
    #0100ff 49.07%,
    #01a9ed 104.67%
  );
  background-position: 0% -100%;
  background-size: 200% 200%;
  background-repeat: no-repeat;
}

.card-linear:hover {
  background-position: 0% 100%;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-wrapper p {
  color: #6a6a8e;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}

.card-linear > .image-hover {
  width: 73px;
  height: 73px;
  transition: filter 0.5s ease-in-out; /* Apply transition to the filter property for smooth effect */
}
.card-linear > .image-hover:hover {
  filter: brightness(0) invert(1); /* Change image to white when hovering */
}
</style>
