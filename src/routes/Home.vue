<template>
  <Header />
  <Calculator />
  <Result />
</template>

<script>
import Calculator from '@/components/Calculator.vue'
import Header from '@/components/Header.vue'
import Result from '@/components/Result.vue'

export default {
  components: {
    Header,
    Calculator,
    Result
  },
}
</script>