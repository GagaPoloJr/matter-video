<template>
  <li>
    <a href="#" class="font-14">
      <i class="far fa-dot-circle"></i>
      <span class="category-text">{{categoryTitle}}</span>
      <span class="cat-number">{{categoryNumber}}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: 'BlogCategory',
  props: {
    categoryTitle: String,
    categoryNumber: Number
  }
}
</script>