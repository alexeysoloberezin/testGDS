<template>
  <ul class="todoList">
    <li class="todoItem" v-for="item in todoList" :key="item.id">
      <div class="todoItem__checkbox checkbox">
        <input type="checkbox" :id="'todoItem__checkbox-' + item.id">
        <label :for="'todoItem__checkbox-' + item.id"></label>
      </div>
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "TodoList",
  setup() {
    const store = useStore()
    const todoList = ref(store.state.todoList)

    onMounted(() => {
      store.subscribe(mutation => {
        if (mutation.type === "setTodoTask") {
          todoList.value = store.state.todoList
        }
      })
    })

    return {
      todoList
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
.todoItem__checkbox{

}
</style>