<template>
  <div>{{bmi}}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('bmi', [
      'bmi'
    ])
  }
}
</script>

<style>

</style>