import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: [
      {
        id: '11',
        text: 'lorem10101010'
      },
      {
        id: '22',
        text: 'lorem10101010'
      }
    ]
  },
  mutations: {
    setTodoTask(state, value) {
      state.todoList.push({
        id: String(Date.now()),
        text: value
      })
    }
  },
  actions: {
    addTodoTask(context, value) {
      context.commit('setTodoTask', value)
    }
  },
  modules: {
  }
})
