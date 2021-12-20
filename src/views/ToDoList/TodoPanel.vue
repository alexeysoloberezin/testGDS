<template>
  <div class="todoPanel">
    <input type="text" placeholder="Add todo" v-model="inputValue" @keypress.enter="addTask">
    <button class="btn btn-primary" @click="addTask">
      Add
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

    const addTask = () => {
      if (inputValue.value) {
        store.dispatch('addTodoTask', inputValue.value)
        inputValue.value = ''
      }
    }

    return {
      inputValue,
      addTask
    }
  }
}
</script>

<style scoped lang="scss">
.todoPanel{
  display: flex;

  .btn{
    margin-left: 20px;
  }
}
</style>