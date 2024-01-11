import axios from "axios"

export const state = {
  isFetching: false,
  screenWidth: undefined
}

export const actions = {
  async send_mmessage ({commit}, { name, email, message }) {
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
      const data = await axios.post('https://api.web3forms.com/submit', body)
      console.log(data)
    } catch (e) {
        console.log(e)

      }
  }
}

export const mutations = {
  SET_SCREEN_WIDTH (state, value) {
    state.screenWidth = value + 15
  }
}
