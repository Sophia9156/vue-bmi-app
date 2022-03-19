<template>
  <Header v-if="isLogin" />
  <RouterView />
  <Footer />
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
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
