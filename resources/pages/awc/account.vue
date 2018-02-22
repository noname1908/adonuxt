<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <b-card>
          <div slot="header">
            <strong>Thông tin tài khoản</strong>
          </div>
          <p class="help-block text-danger" v-if="formError">{{ formError }}</p>
          <b-form-fieldset
            label="Họ và Tên"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" placeholder="Vui lòng nhập Họ và Tên" v-model="user.fullname"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Tài khoản"
            :label-cols="3"
            :horizontal="true">
            <b-form-input plaintext type="text" v-model="user.username"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Email"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="email" v-model="user.email"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Mật khẩu"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="password" v-model="password" placeholder="Nhập nếu muốn đổi mật khẩu"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Xác nhận mật khẩu"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="password" v-model="password_confirmation" placeholder="Nhập lại mật khẩu"></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary" @click="submit"><i class="fa fa-dot-circle-o"></i> Cập nhật</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'awc-account',
  asyncData ({ store }) {
    return {
      user: {
        id: store.state.authUser.id,
        fullname: store.state.authUser.fullname,
        username: store.state.authUser.username,
        email: store.state.authUser.email
      },
      password: '',
      password_confirmation: '',
      formError: null
    }
  },

  methods: {
    async submit () {
      try {
        if (this.password) {
          this.user.password = this.password
          this.user.password_confirmation = this.password_confirmation
        }
        await this.$store.dispatch('updateAccount', this.user)
        this.showNotify()
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    }
  },
  notifications: {
    showNotify : {
      message: 'Cập nhật tài khoản thành công',
      type: 'success'
    }
  }
}
</script>
