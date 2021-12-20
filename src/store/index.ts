import { createStore } from 'vuex'

export interface todoItem {
  id: string;
  text: string;
  status: string;
}

export default createStore({
  state: {
    todoFilter: 'all',
  },
  getters: {
    todoList: state => {
      const data = localStorage.getItem('todoList')
      if (data && data !== 'undefined') {
        return JSON.parse(data)
      }
      return []
    },
    todoListFilter: state => {
      const data = localStorage.getItem('todoList')
      if (data && data !== 'undefined') {
        if (state.todoFilter === 'all'){
          return JSON.parse(data)
        }
        return JSON.parse(data).filter((item: todoItem) => {
          return item.status === state.todoFilter
        })
      }
      return []
    }
  },
  mutations: {
    setTodoTask(state: any, value:string) {
      let data: any = localStorage.getItem('todoList')
      let newTodoList: todoItem[] | []  = []

      if (data && data !== 'undefined') {
        data = JSON.parse(data)
        newTodoList = [...data, {
            id: String(Date.now()),
            text: value,
            status: '',
          }]
      }
      localStorage.setItem('todoList', JSON.stringify(newTodoList));
    },
    setCheckedTask(state, value:string){
      let data: any = localStorage.getItem('todoList')
      let newTodoList: todoItem[] | []  = []

      if (data && data !== 'undefined') {
        data = JSON.parse(data)
        newTodoList = data.map((item: todoItem)   => {
          if (item.id !== value) {
            return item
          }
          return {
            id: item.id,
            text: item.text,
            status: item.status === 'checked' ? '' : 'checked',
          }
        })
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
      }
    },
    setChangeFilter(state, value:string){
      switch (value){
        case 'Активные':
          state.todoFilter = ''
           break
        case 'Выполненные':
          state.todoFilter = 'checked'
          break
        default:
          state.todoFilter = 'all'
      }
    }
  },
  actions: {
    addTodoTask(context, value:string) {
      context.commit('setTodoTask', value)
    },
    checkedTask(context, id:string){
      context.commit('setCheckedTask', id)
    },
    changeFilter(context, value:string){
      context.commit('setChangeFilter', value)
    },
  },
  modules: {
  }
})
