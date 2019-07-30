<template>
  <section class="add-post">
    <h2>Add post</h2>
    <div>
      <PostsAdd />
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import PostsAdd from "@/components/PostAdd.vue";

export default {
  name: "UserAddPost",
  components: {
    PostsAdd
  },
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

section
  width: 800px
  margin: 0 auto

.add-post 
  align-itens: center
.add-post 
  div
    padding: 30px

h2  
  text-align: center
  margin-bottom: 20px
  font-weight: 600
  padding-bottom: 15px
  border-bottom: 2px solid $blue
</style>
