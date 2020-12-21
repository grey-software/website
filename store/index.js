import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state() {
      return {
        rtil: false,
      }
    },
    mutations: {
      setRtl(state, payload) {
        state.rtl = payload.rtl;
      },
    },
  })
}

