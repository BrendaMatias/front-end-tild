<template>
  <header>
      <router-link class="blog" to="/">
        <img src="../assets/blogging.svg">
         <span class="blog-text">Blog</span><span class="color-blog">.</span>
      </router-link>
    <div>
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
@import url('https://fonts.googleapis.com/css?family=Slabo+13px&display=swap')

$blue: #00b8e4

header 
  font-size: 14px
  font-weight: 600
  display: flex
  padding: 20px 100px
  background: black
  justify-content: space-between
  align-items: center
  color: white
.blog
  font-family: 'Slabo 13px', serif
  font-size: 25px
  color: white
.color-blog
  color: $blue
.blog-text
  padding-left: 15px
img 
  width: 30px
  heigth: 30px

header div
header div a
  color: white
  padding-bottom: 1px
  border-bottom: 2px solid transparent
.login
  background: $blue
  border-radius: 10px
  padding: 3px 20px  
  border: 2px solid transparent
.login:hover
  background: white
  color: black
  border: 2px solid $blue

header div a:hover,
a .router-link-exact-active 
  border-bottom: 2px solid  $blue

</style>
