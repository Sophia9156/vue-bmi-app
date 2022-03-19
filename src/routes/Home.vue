<template>
  <Calculator />
  <HealthGuide />
</template>

<script>
import Calculator from '@/components/Calculator.vue'
import HealthGuide from '@/components/HealthGuide.vue'

export default {
  components: {
    Calculator,
    HealthGuide
  }
}
</script>