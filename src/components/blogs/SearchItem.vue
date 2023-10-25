<template>
  <!-- Sidebar Single Widget Start -->
  <div class="widget widget-search" id="search">
    <b-form inline @submit.prevent>
      <b-input type="text" id="blog_search" placeholder="Search"></b-input>
      <b-button type="submit" variant="transparent"><i class="fas fa-search"></i></b-button>
    </b-form>
  </div>
  <!-- Sidebar Single Widget End -->
</template>

<script>

export default {
  name: 'SearchItem',
}
</script>