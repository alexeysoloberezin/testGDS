<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="logo">TestDGS</div>
        <nav class="header__nav">
          <ul class="header__list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/TodoList">TodoList</router-link></li>
          </ul>
        </nav>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">

.header{
  background: rgba(255, 255, 255, 0.07);
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  &__row{
    display: flex;
    justify-content: space-between;
  }
  nav {
    ul {
      display: flex;
      li {
        margin-left: 20px;
      }
    }
  }
}

</style>