<template>
  <nuxt-child/>
</template>

<script>
export default {
  layout: ({ store }) => store.state.authUser ? 'awc' : 'pages',
  middleware: 'awc'
}
</script>

