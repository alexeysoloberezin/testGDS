<template>
  <ul class="todoList" v-if="todoList.length > 0">
    <li class="todoItem"
        v-for="item in todoList"
        :key="item.id"
        @click="checkedTask(item.id)"
    >
      <div class="todoItem__status" >
        <img src="checkbox.png" alt="" v-if="item.status === 'checked'">
      </div>
      {{ item.text }}
    </li>
  </ul>
  <div class="empty" v-else>
    Todo is empty
  </div>
  <button class="btn btn-primary" v-if="todoList.length > 0" @click="clearCompleted">
    Clear completed
  </button>
</template>

<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "TodoList",
  setup() {
    const store = useStore()
    const todoList = ref(store.getters.todoListFilter)

    onMounted(() => {
      store.subscribe(mutation => {
        if (   mutation.type === "setTodoTask"
            || mutation.type === "setCheckedTask"
            || mutation.type === "setChangeFilter"
            || mutation.type === "clearCompleted"
        ) {
          todoList.value = store.getters.todoListFilter
        }
      })
    })

    const clearCompleted = () => store.dispatch('clearCompleted')

    const checkedTask = id => store.dispatch('checkedTask', id)

    return {
      todoList,
      checkedTask,
      clearCompleted,
    }
  }
}
</script>

<style scoped lang="scss">
.todoList{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  li {
    cursor: pointer;
    background: #252646;
    border-bottom: 1px solid #1165b9;
    padding: 10px 20px;
    margin-bottom: 15px;
    text-align: left;
    border-radius: 8px;
    display: flex;
    align-items: center;
    .checkbox{
      margin-right: 10px;
    }
  }
}
.todoItem__status{
  width: 25px;
  height: 25px;
  margin-right: 12px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.empty{
  border-bottom: 2px solid #1d79d5;
  padding: 12px;
  width: fit-content;
  margin: 30px auto;
  border-radius: 5px;
}
</style>