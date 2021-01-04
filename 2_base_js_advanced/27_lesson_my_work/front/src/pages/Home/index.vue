<template>
    <div class="home-container">
        <img :src=task alt="Task" class="img-task">
    </div>
</template>

<script>
    export default {
        name: 'Home',

        data() {
            return {
                task: require("@/assets/task.jpg"),
            };
  },
    }
</script>

<style scoped>
.home-container {
    text-align: center;
}
.img-task {
    max-width: 600px;
}
</style>