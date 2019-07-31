<template>
  <section>
    <div class="posts">
      <div class="post">
        <router-link class="post-img" :to="{name: 'post', params: {id: post.id}}">
          <img v-if="post.image" :src="post.image" :alt="post.title" />
        </router-link>
        <div class="content">
          <input
            type="title"
            name="title"
            id="title"
            :value="post.title"
            placeholder="Enter title"
            class="title"
          />
          <textarea
            id="content"
            name="content"
            :value="post.content"
            placeholder="Enter text"
            class="content"
          ></textarea>
          <slot></slot>
        </div>
      </div>
      <h5 class="created_at">Recife, {{post.created_at}}</h5>
    </div>
  </section>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name: "PostItem",
  props: ["post"],
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

.posts
  padding: 10px
  border: 1px solid aliceblue
  margin-bottom: 40px
img 
  width: 100%
  
.post-img 
  border-radius: 10px
  overflow: hidden
  height: 150px

.post 
  display: grid
  grid-template-columns: minmax(100px, 200px) 1fr
  grid-gap: 20px
  position: relative
  padding-right: 20px

@media screen and (max-width: 500px) 
  .post 
    grid-template-columns: 1fr
    grid-gap: 10px

.title
  font-size: 20px
  color: rgb(64, 64, 66)
  margin: 0 0 20px 0

.content
  max-width: 500px
  display: block

.created_at
  color: rgba($blue, 0.9)
  text-align: right

input, textarea
  width: 350px

textarea
  height: 80px
</style>
