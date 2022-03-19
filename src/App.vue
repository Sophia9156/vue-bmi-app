<template>
  <Header v-if="isLogin" />
  <RouterView />
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  computed: {
    ...mapState('login', [
      'isLogin'
    ])
  }
}
</script>

<style>

</style>
