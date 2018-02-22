export const state = () => ({
  authToken: null,
  authUser: null
})

export const mutations = {
  SET_USER: (state, user) => {
    state.authUser = user
  },
  SET_TOKEN: (state, token) => {
    state.authToken = token
  }
}


export const actions = {
  async nuxtServerInit ({ commit }, { req, app }) {
    if (req.session) {
      if (req.session.authToken) {
        commit('SET_TOKEN', req.session.authToken)
      }
      if (req.session.authUser) {
        commit('SET_USER', req.session.authUser)
      }
    }
  },

  async login ({ commit }, { username, password }) {
    try {
      const res = await this.$axios.$post('/admin/login', { username, password })
      commit('SET_TOKEN', res.data.token)
      commit('SET_USER', res.data.user)
    } catch (e) {
      if (e.response && e.response.status === 422 ) {
        throw new Error(e.response.data.message)
      }
      throw e
    }
  },

  async logout ({ commit }) {
    await this.$axios.$post('/admin/logout')
    commit('SET_TOKEN', null)
    commit('SET_USER', null)
  },

  async updateAccount ({ commit }, user) {
    try {
      const data = await this.$axios.$post('/admin/update', user)
      commit('SET_USER', data)
    } catch (e) {
      if (e.response && e.response.status === 422) {
        throw new Error(e.response.data.message)
      }
      throw e
    }
  }
}
