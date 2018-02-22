<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>CMS</h1>
                <p class="text-muted">Đăng nhập tài khoản</p>
                <p class="help-block text-danger" v-if="loginError">{{ loginError }}</p>

                <form @submit.prevent="submit">
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <input type="text" class="form-control" v-model="username" placeholder="Tài khoản">
                  </div>
                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input type="password" class="form-control" v-model="password" placeholder="Mật khẩu">
                  </div>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4" :disabled="!submittable" type="submit">Đăng nhập</b-button>
                    </b-col>
                  </b-row>
                </form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      loginError: null
    }
  },
  computed: {
    submittable () {
      return this.username && this.password
    }
  },
  methods: {
    async submit () {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
        this.username = ''
        this.password = ''
        this.loginError = null

        this.$router.replace({ name: 'awc' })
      } catch (e) {
        this.loginError = e.message
      }
    }
  }
}
</script>
