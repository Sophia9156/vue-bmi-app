<template>
  <div class="login">
    <h1>My BMI</h1>
    <img src="../assets/logo-color.png" alt="logo" />
    <button
    class="loginBtn"
    @click="login">Google 로그인</button>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('login/checkLogin')
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login/login')
      } catch {
        return
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main';

.login{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    margin-bottom: 50px;
    font-family: 'Vibes', cursive;
    color: #fff;
    font-size: 4rem;
  }
  img{
    width: 200px;
    height: 200px;
  }
  .loginBtn{
    padding: 20px 30px;
    margin-top: 50px;
    border: 2px solid #fff;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 700;
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

/* md = 540px */
@include media-breakpoint-down(sm) {
  .login{
    h1{
      font-size: 3rem;
    }
    img{
      width: 150px;
      height: 150px;
    }
    .loginBtn{
      padding: 15px 20px;
      border-radius: 40px;
      font-size: 1rem;
    }
  }
}
</style>