<template>
  <div id="app">
    <game :image-list="imageList"/>
        
  </div>
</template>

<script>
import Game from './components/Game'

export default {
  name: 'App',
  components: {
    Game
  },

  data() {
    return {
      imageList: [
        {
          id:'1',
          imageSrc:'https://s1.stc.all.kpcdn.net/putevoditel/projectid_379258/images/tild3663-3536-4563-a163-336135393863__960.jpg'
        },
        {
          id:'2',
          imageSrc:'https://v.img.com.ua/b/600x500/f/f0/279509c462760fe20c4eeb5778b9af0f.jpg'
        },
        {
          id:'3',
          imageSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Raspberries_%28Rubus_Idaeus%29.jpg/275px-Raspberries_%28Rubus_Idaeus%29.jpg'
        },
        {
          id:'4',
          imageSrc:'https://images.ua.prom.st/2155297931_malina-tselye-yagody.jpg'
        },
        
      ]
    }
  },
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
