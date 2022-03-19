import { database } from "../service/firebase";
import { ref, set, child, get } from "firebase/database";

export default {
  namespaced: true,
  state: () => ({
    height: '',
    weight: '',
    bmi: '',
    bmiShow: false,
    data: {}
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
      if(userId === null) {
        window.alert('로그인 해주세요!')
        return 
      }
      
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

    },
    async getData({commit}, {userId}) {
      const dbRef = ref(database);
      const res = await get(child(dbRef, `${userId}`)).then(snapshot => {
        if (snapshot.exists()) {
          return snapshot.val() 
        } else {
          return {}
        }
      });
      commit('updateState', {
        data: res
      })
    },
  }
}