<template>
  <div id="app">
    <my-baner
    imgSrc="https://rastenievod.com/wp-content/uploads/2018/01/2-13-700x564.jpg"
    title="Malina"
    :clicksNumber="2+10"
    />

    <my-baner
    imgSrc="https://cosmosmagazine.com/wp-content/uploads/2020/02/190902_banannas_full-1440x813.jpg"
    title="Banana"
    :clicksNumber="122"
    />
  </div>
</template>

<script>
import MyBaner from '@/components/MyBaner' //1. Імпортуємо

export default {
  name: 'App',
  components: {
    MyBaner //2. Реєстрація компонента
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
