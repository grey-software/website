<template>
  <div>
    <nav-bar v-if="$mq === 'lg' || $mq === 'xl'"></nav-bar>
    <div v-else>
      <nav-bar-mobile></nav-bar-mobile>
      <aside
        class="drawer transform top-0 right-0 fixed h-full overflow-auto z-40"
        :class="drawerOpen ? 'drawer-open' : 'drawer-closed'"
      >
        <nav-drawer />
      </aside>
    </div>
    <nuxt />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import NavDrawer from '@/components/NavDrawer.vue'

export default {
  components: {
    NavDrawer,
  },
  computed: {
    ...mapState(['drawerOpen']),
  },
}
</script>

<style>
.flex-col {
  display: flex;
  flex-direction: column;
}

.drawer {
  width: 256px;
  transition: all 0.2s ease-out;
}

.drawer-open {
  margin-left: 0;
  opacity: 1;
}

.drawer-closed {
  margin-right: -343px;
  opacity: 0;
}
</style>
