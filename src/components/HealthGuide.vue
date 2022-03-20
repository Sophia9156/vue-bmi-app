<template>
  <div class="guide">
    <h2>올바른 식생활 지침</h2>
    <ul class="guideList">
      <li v-for="item in guide" :key="item.title">
        <dt>{{item.title}}</dt>
        <dd>{{item.content}}</dd>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guide: [
        {title: '📌제때에', content: '신체리듬에 맞춰 규칙적으로 식사하는 것은 아주 중요합니다. 특히 아침을 거르지 맙시다.'},
        {title: '📌골고루', content: '다양한 식품을 선택해 부족한 영양소가 없도록 해야 합니다.'},
        {title: '📌알맞게', content: '표준 체중을 유지하기 위해 하루에 필요한 적정열량을 섭취하는 것은 비만과 성인병을 예방하는 기본 노력입니다.'},
        {title: '📌싱겁게', content: '소금의 과잉 섭취는 고혈압을 비롯한 순환기계질환의 중요 요인이 됩니다. 건강을 위해 소금 섭취를 하루에 5g 이하로 줄입시다.'},
        {title: '📌즐겁게', content: '식사는 가능한 여럿이 함께 하는 것이 좋습니다. 가족끼리 즐겁게 하는 식사는 그 자체가 즐거움이고, 성인병 관리입니다.'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main';

.guide{
  width: 80%;
  margin: 50px auto;
  color: #fff;
  padding: 15px 20px 50px;
  border-radius: 30px;
  background-color: darken($primary, 10%);
  h2{
    margin: 50px auto;
    text-align: center;
    font-size: 2rem;
  }
  .guideList{
    width: 60%;
    margin: 0 auto;
    li{
      padding: 15px 0;
      list-style: none;
      dt{
        margin-bottom: 10px;
        font-size: 1.1rem;
      }
      dd{
        font-size: 1rem;
      }
    }
  }
}

/* xl = 1140px */
@include media-breakpoint-down(xl) {
  .guide{
    width: 90%;
    h2{
      margin: 30px auto;
      font-size: 2rem;
    }
    .guideList{
      width: 80%;
      margin: 0 auto;
    }
  }
}

/* md = 704px */
@include media-breakpoint-down(md) {
  .guide{
    width: 90%;
    h2{
      margin: 30px auto;
      font-size: 1.5rem;
    }
    .guideList{
      width: 90%;
      margin: 0 auto;
      li{
        dt{
          font-size: 1rem;
        }
        dd{
          font-size: 0.9rem;
        }
      }
    }
  }
}

/* md = 540px */
@include media-breakpoint-down(sm) {
  .guide{
    width: 90%;
    h2{
      margin: 20px auto;
      font-size: 1.3rem;
    }
    .guideList{
      width: 95%;
      padding: 0;
      li{
        margin: 0;
        dt{
          font-size: 0.9rem;
        }
        dd{
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>