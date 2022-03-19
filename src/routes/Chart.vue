<template>
  <div class="canvas">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  data() {
    return {
      myChart: null
    }
  },
  computed: {
    ...mapState('login', [
      'user'
    ]),
    ...mapState('bmi', [
      'data'
    ])
  },
  mounted() {
    this.drawChart()
  },
  methods: {
    createChart() {
      const labelsRaw = []
      const values = []

      for(const data in this.data) {
        labelsRaw.push(this.data[data].date)
        values.push(this.data[data].weight)
      }

      const data = {
        labels: labelsRaw,
        datasets: [{
          label: '몸무게 변화 추이',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: values,
        }]
      };

      const config = {
        type: 'line',
        data: data,
        options: {}
      };

      const ctx = document.getElementById('myChart').getContext('2d')

      this.myChart = new Chart(ctx, config);
    },
    drawChart() {
    this.$store.dispatch('bmi/getData', {
      userId: this.user.uid
    }).then(() => {
      this.createChart()
    })
  }
  }
}
</script>

<style lang="scss" scoped>
.canvas{
  width: 70%;
  margin: 100px auto;
  background-color: rgba(#fff, 0.9);
}
</style>