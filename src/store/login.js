import { auth, googleProvider } from '../service/firebase'
import { signInWithRedirect, getRedirectResult } from 'firebase/auth'
import router from '../routes'

export default {
  namespaced: true,
  state: () => ({
    user: {},
    isLogin: false
  }),
  mutations: {
    updateState(prevState, newState) {
      Object.keys(newState).forEach(key => {
        prevState[key] = newState[key]
      })
    }
  },
  actions: {
    async login() {
      try {
        await signInWithRedirect(auth, googleProvider);
      } catch (error) {
        window.alert('로그인에 실패했습니다. Error: ' + error)
      }
    },
    async logout({commit}) {
      try {
        await auth.signOut()
        commit('updateState', {
          user: {},
          isLogin: false
        })
        window.alert('성공적으로 로그아웃 되었습니다!')
      } catch (error) {
        window.alert('로그아웃에 실패했습니다. Error: ' + error)
      }
    },
    checkLogin({commit}) {
      getRedirectResult(auth)
      .then(result => {
        const user = result.user;
        commit('updateState', {
          user,
          isLogin: true
        })
        router.push('/home')
      })
    }
  }
}