<template>
  <section class="user">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'posts'}">Your Posts</router-link>
        </li>
        <li>
          <router-link :to="{name: 'add-posts'}">New Post</router-link>
        </li>
        <li>
          <router-link :to="{name: 'user-profile'}">Edit Profile</router-link>
        </li>
        <li>
          <button @click="signOut">Sign Out</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "User",
  methods: {
    async signOut() {
      await this.$store.dispatch("signOut");
      window.localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

.user 
  display: grid
  grid-template-columns: 300px auto
  grid-gap: 30px
  padding: 20px


@media screen and (max-width: 500px) 
  .user 
    grid-template-columns: 1fr
    margin: 0px auto
  
.sidenav a,
.sidenav button 
  color: black
  padding: 15px
  display: block
  background: #f4f7fc
  margin-bottom: 10px
  border-radius: 4px

.sidenav a.router-link-exact-active,
.sidenav a:hover
  background: rgba($blue, 0.9)
  color: #fff

.sidenav button 
  color: white
  width: 100%
  text-align: center
  background: $red-light
  margin-top: 50px

.sidenav button:hover 
  background: $red-hover
</style>