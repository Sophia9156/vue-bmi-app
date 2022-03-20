<template>
  <div class="chart">
    <div class="title">
      <h2>
        <span class="bmi-text">BMI</span>
        변화 추이
      </h2>
      <p>
        2주 간의 몸무게와 BMI 변화 추이를 확인하세요! <br />
        (최근 14개의 결과를 보여줍니다.)
      </p>
  </div>
    <div class="canvas">
      <canvas id="myChart"></canvas>
    </div>
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
    this.$store.dispatch('bmi/getData', {
      userId: this.user.uid
    }).then(() => {
      this.createChart()
    })
  },
  methods: {
    createChart() {
      const labelsRaw = []
      const weight = []
      const bmi = []

      for(const data in this.data) {
        labelsRaw.push(this.data[data].date)
        weight.push(this.data[data].weight)
        bmi.push(this.data[data].bmi)
      }

      const label = () => {
        if(labelsRaw.length > 14){
          return labelsRaw.slice(labelsRaw.length - 14, labelsRaw.length)
        } else {
          return labelsRaw
        }
      }

      const ctx = document.getElementById('myChart').getContext('2d')

      this.myChart = new Chart(ctx, {
        data: {
          labels: label(),
          datasets: [
            {
              type: 'line',
              label: '몸무게 변화 추이',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: weight,
            },
            {
              type: 'bar',
              label: 'BMI 변화 추이',
              backgroundColor: 'rgba(255, 99, 132, 0.3)',
              data: bmi
            }
          ],
        },
        options: {}
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main';

.chart{
  width: 70%;
  margin: 50px auto;
  .title{
    width: 100%;
    text-align: center;
    color: #fff;
    h2{
      margin: 0 auto;
      padding: 15px 20px;
      border-radius: 30px;
      font-size: 2rem;
      background-color: darken($primary, 10%);
      .bmi-text{
        font-size: 3rem;
        font-family: 'Vibes', cursive;
        vertical-align: middle;
      }
    }
    p{
      width: 60%;
      margin: 30px auto;
      font-size: 1rem;
      line-height: 2;
    }
  }
  .canvas{
    width: 100%;
    margin: 50px auto;
    background-color: rgba(#fff, 0.9);
  }
}

/* xl = 1140px */
@include media-breakpoint-down(xl) {
  .chart{
    width: 80%;
  }
}

/* md = 704px */
@include media-breakpoint-down(md) {
  .chart{
    width: 90%;
    margin: 40px auto;
    .title{
      h2{
        font-size: 1.5rem;
        .bmi-text{
          font-size: 2rem;
          vertical-align: middle;
        }
      }
      p{
        width: 80%;
        font-size: 0.8rem;
      }
    }
  }
}

/* md = 540px */
@include media-breakpoint-down(sm) {
  .chart{
    width: 90%;
    margin: 30px auto;
    .title{
      h2{
        font-size: 1.3rem;
        .bmi-text{
          font-size: 1.8rem;
          vertical-align: middle;
        }
      }
      p{
        width: 80%;
        font-size: 0.7rem;
      }
    }
  }
}
</style>