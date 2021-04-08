<template>
  <div class="status">{{ status }}</div>
  <button @click="reset">Reset</button>
  <template v-for="row in 3">
    <div class="row" :key="row">
      <button
        v-for="button in 3"
        class="square"
        style="width:40px;height:40px;"
        @click="playerMove(button)"
      ></button>
    </div>
  </template>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
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
