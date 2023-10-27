<template>
  <div>
    <!-- Footer Start -->
    <div class="footer-copyright">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-12">
            <p class="text-white text-center">
              {{ copyright }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  </div>
</template>

<script>
export default {
  name: "FooterCopyright",
  data() {
    return {
      copyright: `© 2023 Copyright (Matter) All Rights Reserved.`,
    };
  },
};
</script>

<style scoped>
.footer-copyright {
  background: #050748;
  padding: 25px 0;
}
</style>
