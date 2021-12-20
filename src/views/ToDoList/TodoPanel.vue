<template>
  <div class="todoCounter">
    <div class="todoCounter__tasks">
      Задач: {{ counterTasks }}
    </div>
  </div>
  <div class="todoPanel">
    <p class="todoPanel__err" v-if="statusError">Need a text :)</p>
    <input type="text" placeholder="Add todo" v-model="inputValue" @keypress.enter="addTask">
    <button class="btn btn-primary" @click="addTask">
      Добавить
    </button>
  </div>
  <div class="todoFilter">
    <button class="btn btn-primary-outlined" :class="{active: todoFilter === 'all'}" @click="changeFilter">
      Все
    </button>
    <button class="btn btn-primary-outlined" :class="{active: todoFilter === 'checked'}" @click="changeFilter">
      Выполненные
    </button>
    <button class="btn btn-primary-outlined" :class="{active: todoFilter === ''}" @click="changeFilter">
      Активные
    </button>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "TodoPanel",
  setup() {
    const store = useStore()
    const inputValue = ref<string>('')
    const statusError = ref<boolean>(false)
    const counterTasks = ref<number>(store.getters.todoListFilter.length)
    const todoFilter = ref<string>(store.state.todoFilter)

    const addTask = () => {
      if (inputValue.value) {
        statusError.value = false
        store.dispatch('addTodoTask', inputValue.value)
        inputValue.value = ''
      }else{
        statusError.value = true
      }
    }

    const changeFilter = (e: any) => {
      store.dispatch('changeFilter', e.target.textContent.trim())
    }

    onMounted(() => {
      store.subscribe(mutation => {
        if (mutation.type === "setTodoTask" ||  mutation.type === "setChangeFilter" || mutation.type === "setCheckedTask") {
          counterTasks.value = store.getters.todoListFilter.length
        }
        if (mutation.type === 'setChangeFilter'){
          todoFilter.value = store.state.todoFilter
        }
      })
    })

    return {
      inputValue,
      addTask,
      counterTasks,
      statusError,
      changeFilter,
      todoFilter
    }
  }
}
</script>

<style scoped lang="scss">
.todoPanel{
  display: flex;
  position: relative;
  margin-top: 15px;
  .btn{
    margin-left: 20px;
  }
}
.todoPanel__err{
  position: absolute;
  top: -4px;
  font-size: 14px;
  opacity: 0.7;
  left: 0;
  transform: translateY(-100%);
}
.todoCounter{
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
  &>div{
    margin-right: 10px;
    font-size: 16px;
    color: #ffffff;
  }
}
.todoFilter{
  display: flex;
  align-items: center;
  margin-top: 15px;
  &>button{
    margin-right: 10px;
  }
}
</style>