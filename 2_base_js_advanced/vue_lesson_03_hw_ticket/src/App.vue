<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ticket/>
    <!-- <div>
      Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо <br>
      1) бізнес - виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати
      закуску (так/ні)), <br>
      2) економ – виводимо елементи для вибору типу пива і чипсів
    </div> -->
  </div>
</template>

<script>
import Ticket from '@/components/Ticket'

export default {
  name: 'App',
  components: {
    Ticket
  }
}
</script>

<style>
body {
    font-family: 'Roboto', sans-serif;
  }
</style>
