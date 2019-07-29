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
.sucess 
  margin: 30px auto 0 auto

.sucess li 
  color: #228B22
  font-size: 16px
  line-height: 1.5
  font-weight: 600
  text-align: center

</style>