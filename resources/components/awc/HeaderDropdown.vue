<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <img src="/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Tài khoản</strong></b-dropdown-header>
        <b-dropdown-item :to="{ name: 'awc-account' }"><i class="fa fa-user"></i> Thông tin tài khoản</b-dropdown-item>
        <b-dropdown-item @click="logout"><i class="fa fa-lock"></i> Đăng xuất</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown',
    data: () => {
      return { itemsCount: 42 }
    },
    methods: {
      async logout () {
        try {
          await this.$store.dispatch('logout')
          this.$router.replace({ name: 'awc-login' })
        } catch (e) {

        }
      }
    }
  }
</script>

