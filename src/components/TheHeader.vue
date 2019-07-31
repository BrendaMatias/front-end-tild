<template>
  <header>
    <router-link class="blog" to="/">
      <img src="../assets/blogging.svg" />
      <span class="blog-text">Blog</span>
      <span class="color-blog">.</span>
    </router-link>
    <div>
      <div class="user-image" v-if="$store.state.login">
        <div>
          <img
            src="https://s-media-cache-ak0.pinimg.com/736x/92/80/c1/9280c111e34752405eb524d4ed0750e6--ian-somerholder-beautiful-men.jpg"
          />
        </div>
        <router-link class="user" :to="{name: 'posts'}">{{name}}</router-link>
      </div>
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
.login
  background: $blue
  border-radius: 10px
  padding: 3px 20px  
.login:hover
  background: #008fb3

.user:hover,
.user .router-link-exact-active 
  border-bottom: 2px solid  $blue
  
.user-image
  align-items: center
  justify-content: center
  display: flex
.user-image div
  margin: auto
  width: 45px
  height: 45px
  border-radius: 50%
  overflow: hidden
.user-image a
  margin-left: 20px
  display: inline-block
  border-bottom: 2px solid transparent
.user-image img
  width: 100%
</style>
