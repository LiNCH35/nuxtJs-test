import ProfileApi from '@/api/profile'

const state = () => ({
  info: {},
})

const getters = {};

const actions = {
  async getProfile({commit}) {
    let data = await ProfileApi.getProfile()
    commit('setProfile', data)
  },
  updateProfile({commit}, value) {
    commit('setProfile', value)
  },
}

const mutations = {
  setProfile(state, value) {
    state.info = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
