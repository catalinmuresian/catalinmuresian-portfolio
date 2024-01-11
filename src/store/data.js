import axios from "axios"

export const state = {
  isFetching: false,
  screenWidth: null,
  reqStatus: null,
  reqMessage: null
}

export const actions = {
  async send_mmessage ({commit}, { name, email, message }) {
    commit('SET_IS_FETCHING', true)
    commit('SET_REQ_STATUS', null)
    commit('SET_REQ_MESSAGE', null)
    const WEB3FORMS_ACCESS_KEY = "3189b878-f8e7-40f3-a1c6-0321ce26d124";
    const body = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      message: message,
      subject: name,
      from_name: 'Portfolio Website - Catalin Muresian'
    }
    try {
      const { data } =  await axios.post('https://api.web3forms.com/submit', body)
      commit('SET_IS_FETCHING', false)
      commit('SET_REQ_STATUS', 'success')
      commit('SET_REQ_MESSAGE', data.message)
    } catch (e) {
      commit('SET_REQ_MESSAGE', data.message)
      commit('SET_IS_FETCHING', false)
      commit('SET_REQ_STATUS', 'error')
    }
  }
}

export const mutations = {
  SET_REQ_MESSAGE (state, value) {
    state.reqMessage = value
  },
  SET_REQ_STATUS (state, value) {
    state.reqStatus = value
  },
  SET_IS_FETCHING (state, value) {
    state.isFetching = value
  },
  SET_SCREEN_WIDTH (state, value) {
    state.screenWidth = value + 15
  }
}
