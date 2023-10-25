<template>
  <h4 class="widget-title position-relative">{{title}}</h4>
</template>

<script>
export default {
  name: 'WidgetTitle',
  props: {
    title: String,
    icon: String
  }
}
</script>