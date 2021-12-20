<template>
  <div class="todoPanel">
    <input type="text" placeholder="Add todo">
    <button class="btn btn-primary">
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoPanel"
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