<template>
  <a
    :class="computedClasses"
    href="#download"
    target="_self"
    class="js-scroll-trigger"
  >
    {{ text }}</a
  >
</template>

<script>
export default {
  name: "CtaButton",
  props: {
    size: {
      type: String,
      default: "normal",
    },
    text: {
      type: String,
    },
  },
  computed: {
    computedClasses() {
      return {
        "linear-button": true, // Common class
        "cta-btn-small": this.size === "small", 
        "cta-btn-large": this.size === "large", 
        "cta-btn-xtra-large": this.size === "xtra-large", 
      };
    },
  },
};
</script>

<style scoped>
/* linear button */

.cta-btn-small {
  padding: 5px 15px;
  font-size: 14px;
  width: auto;
}

.cta-btn-large {
  padding: 10px 30px;
  width: auto;
}

.cta-btn-xtra-large {
  padding: 16px 42px !important;
  width: auto;
  font-weight: 400;

}

.linear-button {
  position: relative;
  color: #ffffff !important;
  display: inline-block;
  cursor: pointer;
  transition: all 0.7s ease 0s;
  outline: none;
  text-transform: capitalize;
  z-index: 99;
  padding: 10px 30px;
  font-weight: bold;
  border-radius: 50px;
  font-size: 14px;

}
.linear-button::before {
  content: "";
  position: absolute;
  background: linear-gradient(
    281deg,
    #f801c8 -20.6%,
    #0100ff 44.75%,
    #01a9ed 104.87%
  );
  opacity: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 50px;
  transition: all 0.7s ease 0s;
}
.linear-button:hover::before {
  opacity: 0;
}
.linear-button::after {
  content: "";
  position: absolute;
  background: linear-gradient(
    80deg,
    #f801c8 -20.6%,
    #0100ff 44.75%,
    #01a9ed 104.87%
  );
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 50px;
  transition: all 0.7s ease 0s;
}
.linear-button:hover::after {
  color: #ffffff !important;

  opacity: 1;
}
</style>
