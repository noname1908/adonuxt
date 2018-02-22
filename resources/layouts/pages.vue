<template>
  <nuxt/>
</template>

<script>
  export default {
    name: 'layout-awc-page',
  }
</script>

<style lang="scss">
/* Import Font Awesome Icons Set */
$fa-font-path: 'font-awesome/fonts/';
@import 'font-awesome/css/font-awesome.min.css';

/* Import Simple Line Icons Set */
$simple-line-font-path: 'simple-line-icons/fonts/';
@import 'simple-line-icons/css/simple-line-icons.css';

/* Import Bootstrap Vue Styles */
@import 'bootstrap-vue/dist/bootstrap-vue.css';

/* Main style */
@import '../assets/sass/style';
</style>
