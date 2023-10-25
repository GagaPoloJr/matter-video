<template>
  <li>
    <a href="#">{{tagTitle}}</a>
  </li>
</template>

<script>
export default {
  name: 'PopularTag',
  props: {
    tagTitle: String
  }
}
</script>