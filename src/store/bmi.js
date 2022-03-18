export default {
  namespaced: true,
  state: () => ({
    height: '',
    weight: '',
    bmi: '',
    date: ''
  }),
  mutations: {
    updateState(prevState, newState) {
      Object.keys(newState).forEach(key => {
        prevState[key] = newState[key]
      })
    }
  },
  actions: {
    caculate({commit}, {height, weight, date}) {
      
      if(height === '') {
        window.alert('키를 입력해주세요.')
        return
      } else if(weight === '') {
        window.alert('몸무게를 입력해주세요.')
        return
      } else {
        const bmi = Math.round(weight / (height * height) * 10000)
        commit('updateState', {
          height,
          weight,
          bmi,
          date
        })
      }
    }
  }
}