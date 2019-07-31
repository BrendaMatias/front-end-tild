<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

<style lang="sass">
@import '@/styles/style.sass'

.container 
  display: grid
  margin: 0 0 50px 0
</style>
