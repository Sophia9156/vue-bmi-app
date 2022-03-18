<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo" />
      My BMI
    </h1>
    <div class="user">
      <p>Welcome back! {{user.displayName}}</p>
      <img :src="user.photoURL" alt="user-image" />
      <button class="logout" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState('login', [
      'user'
    ])
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('login/logout')
        this.$router.push('/')
      } catch {
        return
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main';

header{
  padding: 30px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-family: 'Vibes', cursive;
    color: #fff;
    font-size: 2rem;
    img{
      width: 50px;
      height: 50px;
      margin-right: 20px;
      vertical-align: middle;
    }
  }
  .user{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #fff;
    p{
      margin: 0;
      margin-right: 10px;
      font-size: 1.1rem;
    }
    img{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
    .logout{
      padding: 5px 8px;
      border-radius: 10px;
      border: 2px solid #fff;
      font-weight: 700;
      font-size: 1rem;
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