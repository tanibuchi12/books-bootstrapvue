<template>
  <div id="app">
    <GlobalHeader></GlobalHeader>
    <div id="content">
      <b-container>
        <router-view />
      </b-container>
    </div>
  </div>
</template>

<script>
import GlobalHeader from "./components/modules/GlobalHeader.vue";

export default {
  name: "app",
  components: {
    GlobalHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#content {
  margin-top: 30px;
}
</style>
