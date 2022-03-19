<template>
  <div class="title">
    <h2>
      <span class="bmi-text">BMI</span>
      계산하기
    </h2>
    <p>
      체질량지수는 자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값입니다. <br />
      이 계산법은 체지방량과 근육량의 차이를 계산할 수 없기 때문에 체지방보다 밀도가 높은 근육량이 많은 분들은 과체중 혹은 비만 범주에 포함되실 수 있습니다. <br />
      BMI 계산법은 당신의 나이, 성별, 인종, 혹은 임신 여부를 판단할 수 없습니다. <br />
      이에 자세한 사항은 의사 혹은 전문 의료진과의 상담을 추천합니다.
    </p>
  </div>
  <Result v-if="bmiShow" />
  <ul class="calculator">
    <li>
      신장 <input
      v-model="height"
      type="text" 
      placeholder="Type your height"
      @keyup.enter="calculate" /> cm
    </li>
    <li>
      체중 <input
      v-model="weight"
      type="text" 
      placeholder="Type your weight"
      @keyup.enter="calculate" /> kg
    </li>
    <li>
      <button @click="calculate">Apply</button>
      <button @click="reset">Reset</button>
    </li>
  </ul>
</template>

<script>
import Result from '@/components/Result.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Result
  },
  data() {
    return {
      height: '',
      weight: '',
    }
  },
  computed: {
    ...mapState('bmi', [
      'bmiShow',
    ]),
    ...mapState('login', [
      'user'
    ]),
    date() {
      const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
      const date = new Date()
      const setDate = `${date.getFullYear()}${month[date.getMonth()]}${date.getDate()}`
      return setDate
    }
  },
  methods: {
    calculate() {
      const bmi = Math.round(this.weight / (this.height * this.height) * 10000)
      this.$store.dispatch('bmi/caculate', {
        userId: this.user.uid,
        height: this.height,
        weight: this.weight,
        bmi,
        date: this.date
      })
    },
    reset() {
      this.height = ''
      this.weight = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main';

.title{
  width: 80%;
  margin: 50px auto;
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
.calculator{
  width: 50%;
  text-align: center;
  margin: 0 auto;
  padding: 30px 0;
  background-color: rgba(#fff, .3);
  border-radius: 15px;
  li{
    padding: 10px 0;
    color: #666;
    font-size: 1.1rem;
    input{
      margin: 0 20px;
      padding: 15px 20px;
      border: 2px solid #fff;
      border-radius: 30px;
      outline: none;
      background-color: transparent;
      &:focus{
        background-color: rgba(#fff, .5);
        color: darken($primary, 20%);
      }
    }
    button{
      margin: 0 20px;
      padding: 10px 15px;
      border-radius: 15px;
      border: 2px solid #fff;
      font-weight: 700;
      font-size: 1.1rem;
      color: #fff;
      background-color: $primary;
      transition: .4s;
      &:hover{
        background-color: lighten($primary, 50%);
        color: darken($primary, 10%);
        border: 2px solid darken($primary, 10%);
      }
    }
  }
}
</style>