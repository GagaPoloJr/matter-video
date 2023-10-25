<template>
  <router-link to="#!"><i :class="iconClass"></i></router-link>
</template>

<script>
export default {
  name: 'AuthorSocialLinkItem',
  props: {
    iconClass: String
  }
}
</script>