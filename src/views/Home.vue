<template>
  <div class="home">
    <div v-if="loaded">
      <div v-for="post in posts" class="posts">
        <div class="logo">
          <img :src="post.image" />
        </div>
        <li>
          <ul class="title">{{ post.title }}</ul>
          <ul class="content">{{ post.content }}</ul>
          <ul class="created_at">{{ post.created_at }}</ul>
          <ul class="updated_at">{{ post.updated_at }}</ul>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";

export default {
  name: 'home',
  mixins: [fetchData],
    data() {
        return {
            posts: null
        }
    },
    methods: {
    },
    created() {
        this.fetchData('posts');
    }
}
</script>

<style lang="sass" scoped>
.home 
  text-aling: center

img 
  width: 100%
.home 
  margin: 0 auto
  width: 50%
.home div
  float: left
.posts 
  width: 250px 
.title 
  text-transform: uppercase
  padding-bottom: 15px

.content
  padding-bottom: 15px

.created_at
  font-size: 12px
  float: right
.updated_at
  font-size: 12px
  float:left
li 
  margin: 40px
</style>

