import {createStore} from 'vuex'
import login from './login'
import bmi from './bmi'

export default createStore({
  modules: {
    login,
    bmi
  }
})