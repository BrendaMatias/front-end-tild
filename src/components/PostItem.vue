<template>
  <section>
    <div class="posts">
      <div class="post">
        <router-link class="post-img" :to="{name: 'post', params: {id: post.id}}">
          <img v-if="post.image" :src="post.image" :alt="post.title" />
        </router-link>
        <div class="content">
          <input type="title" name="title" id="title" v-model="post.title" class="title"  />
          <textarea id="content" name="content" v-model="post.content" class="content"></textarea>
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
  props: ["post"]
};
</script>

<style lang="sass" scoped>
$blue: #00b8e4
section
  
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
  text-transform: uppercase
  margin: 0 0 20px 0
.content
  max-width: 500px
  font-size: 14px
  color: rgb(177, 177, 177)
  line-height: 1.5

.created_at
  color: rgba($blue, 0.9)
  text-align: right
  font-size: 11px
  font-weight: 600
input, textarea
  width: 300px
  margin: 5px 0 20px 0
  border: 1px solid #d1d5da
  border-radius: 3px
  font-size: 14px
  line-height: 20px
  padding: 6px 8px

textarea
  resize: none
  height: 80px
</style>
