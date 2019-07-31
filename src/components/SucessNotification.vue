<template>
  <transition>
    <ul class="sucess" v-if="successes.length > 0">
      <li v-for="(sucess, index) in successes" :key="index" v-html="sucess"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "SucessNotification",
  props: {
    successes: Array
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

.sucess li 
  color: $green
</style>