import { database } from "../service/firebase";
import { ref, set } from "firebase/database";

export default {
  namespaced: true,
  state: () => ({
    height: '',
    weight: '',
    bmi: '',
    bmiShow: false
  }),
  mutations: {
    updateState(prevState, newState) {
      Object.keys(newState).forEach(key => {
        prevState[key] = newState[key]
      })
    }
  },
  actions: {
    caculate({commit}, {userId, height, weight, bmi, date}) {
      
      if (height === '') {
        window.alert('키를 입력해주세요.')
        return
      } else if (weight === '') {
        window.alert('몸무게를 입력해주세요.')
        return
      } else {
        commit('updateState', {
          height,
          weight,
          bmi,
          bmiShow: true
        })
        set(ref(database, `${userId}/${date}`), {
          weight,
          bmi,
          date
        })
      }

    }
  }
}