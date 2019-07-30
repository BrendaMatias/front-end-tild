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
import TheFooter from "./components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="sass">
@import '@/styles/style.sass'

.container 
  display: grid
  margin: 0 0 50px 0
</style>
