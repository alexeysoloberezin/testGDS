<template>
  <div class="container">
    <div class="todo">
      <TodoPanel />
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import TodoPanel from "./TodoPanel.vue"
import TodoList from "./TodoList.vue"

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoPanel,
  }
}
</script>

<style scoped>
.todo{
  background: #1a1c2e;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 30px;
  border-radius: 8px;
}
</style>