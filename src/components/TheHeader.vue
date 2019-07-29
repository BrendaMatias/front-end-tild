<template>
  <header>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link v-if="$store.state.login" :to="{name: 'posts'}">{{name}}</router-link>
      <router-link v-else to="/login" class="login">Login</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    name() {
      return this.$store.state.user.name.replace(/ .*/, "");
      console.log(this.$store.state.user.name);
    }
  }
};
</script>

<style lang="sass" scoped>
header 
    font-size: 12px
    text-transform: uppercase
    font-weight: 600
    display: flex-inline
    margin-top: 140px
div
    text-align: center

a
    color: black
    margin: 0 20px
    padding-bottom: 1px
    border-bottom: 2px solid transparent
.login
    background: rgba(255, 51, 102, 0.9)
    border-radius: 10px
    padding: 3px 20px  
    border: 2px solid transparent
    color: white
.login:hover
    background: white
    color: black
    border: 2px solid rgba(255, 51, 102, 0.9)

a:hover,
.router-link-exact-active 
  border-bottom: 2px solid rgba(255, 51, 102, 0.9)

</style>
