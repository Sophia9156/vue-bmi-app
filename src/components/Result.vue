<template>
  <div class="result">
    <h2>당신은 {{type}} 입니다.</h2>
    <h3>체질량 지수: {{bmi}}</h3>
    <div class="barometer">
      <span class="slim">저체중 (0 ~ 18)</span>
      <span class="normal">정상 (19 ~ 23)</span>
      <span class="fat">과체중 (24 ~ 25)</span>
      <span class="heavy">비만 (26 ~ )</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('bmi', [
      'bmi',
    ]),
    type() {
      const bmi = Number(this.bmi)
      if(bmi >= 0 && bmi < 19) {
        return '저체중'
      } else if (bmi >= 19 && bmi < 24) {
        return '정상'
      } else if (bmi >= 24 && bmi < 26) {
        return '과체중'
      } else if (bmi >= 26 ) {
        return '비만'
      }
      return '비정상'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main';

.result{
  width: 80%;
  margin: 50px auto;
  padding: 30px 0;
  text-align: center;
  border-radius: 30px;
  color: #fff;
  background-color: darken($primary, 10%);
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.5rem;
  }
  .barometer{
    width: 70%;
    height: 40px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: hidden;
    span{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .slim{
      flex: 0.25;
      background-color: lighten($primary, 25%);
      color: darken($primary, 20%);
    }
    .normal{
      flex: 0.18;
      background-color: lighten($primary, 10%);
      color: darken($primary, 30%);
    }
    .fat{
      flex: 0.17;
      background-color: darken($primary, 20%);
      color: lighten($primary, 30%);
    }
    .heavy{
      flex: 0.4;
      background-color: darken($primary, 30%);
      color: lighten($primary, 10%);
    }
  }
}
</style>