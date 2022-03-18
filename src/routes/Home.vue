<template>
  <button @click="logout">Logout</button>
  <div>{{user}}</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "main",
  computed: {
    ...mapState('login', [
      'user'
    ])
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('login/logout')
        this.$router.push('/')
      } catch {
        return
      }
    }
  }
}
</script>