<template>
  <div>
    <!-- Header Start -->
    <header class="page-banner-area" id="home">
      <div class="section-overlay d-flex">
        <div class="container">
          <div class="header-caption">
            <h1 class="header-caption-heading text-capitalize">Blog</h1>
            <nav aria-label="breadcrumb">
              <b-breadcrumb :items="items"></b-breadcrumb>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  data() {
    return {
      items: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'Blog',
          active: true
        }
      ]
    }
  }
}
</script>