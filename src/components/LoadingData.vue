<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "LoadingData"
};
</script>

<style lang="sass">
.loader 
  margin: 70px auto
  border: 10px solid #f3f3f3
  border-top: 10px solid rgba(255, 51, 102, 0.9)
  border-radius: 50%
  width: 80px
  height: 80px
  animation: spin 2s linear infinite

@keyframes spin 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

</style>
