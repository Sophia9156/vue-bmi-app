<template>
  <Header />
  <Calculator />
</template>

<script>
import Calculator from '@/components/Calculator.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Header,
    Calculator,
  },
}
</script>