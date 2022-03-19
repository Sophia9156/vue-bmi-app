<template>
  <footer>
    <span>&copy; {{new Date().getFullYear()}} Created by Sophia. All rights reserved. </span>
  </footer>
</template>

<style lang="scss" scoped>
@import '../scss/main';

footer{
  width: 100%;
  padding: 50px 0 100px;
  text-align: center;
  span{
    color: #fff;
    font-size: 1rem;
  }
}

/* md = 540px */
@include media-breakpoint-down(sm) {
  footer{
    padding: 30px 0;
    span{
      font-size: 0.8rem;
    }
  }
}
</style>