import Vuex from 'vuex'

export default () => {
  return new Vuex.Store({
    state() {
      return {
        drawerOpen: false,
      }
    },
    mutations: {
      toggleDrawer: state => {
        state.drawerOpen = !state.drawerOpen
      },
    },
  })
}
