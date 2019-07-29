<template>
  <section class="add-post">
    <h2>Add post</h2>
    <PostsAdd />
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
  data() {
    return {
      post: {
        title: "",
        content: "",
        image: "https://lorempixel.com/640/480/?20271",
        user_id: this.$store.state.user.id
      }
    };
  },
  methods: {
    async addPost(event) {
      const button = event.currentTarget;
      button.value = "Adicionando...";
      button.setAttribute("disabled", "");

      await api.post("/posts/", this.post);

      button.removeAttribute("disabled");
      button.value = "Add Post";
    },
  }
};
</script>

<style lang="sass" scoped>
form 
  display: grid

.add-post 
  max-width: 800px
  margin: 0 auto

.add-post 
  div
    padding: 30px

label 
  font-size: 14px
  color: #24292e
  line-height: 1.5
  font-weight: 600

input, textarea
  width: 570px
  margin: 5px 0 20px 0
  border: 1px solid #d1d5da
  border-radius: 3px
  font-size: 14px
  line-height: 20px
  padding: 6px 8px

textarea
  resize: none
  height: 100px

.btn 
  background: rgba(255, 51, 102, 0.7)
  border-radius: 3px
  border: 2px solid transparent
  color: white
  cursor: pointer
  font-size: 14px
  font-weight: 600
  line-height: 20px
  padding: 6px 0

.btn:hover 
  background: rgba(255, 51, 102, 0.9)

h2  
  text-align: center
  margin-bottom: 20px
  font-weight: 600
  padding-bottom: 15px
  border-bottom: 2px solid rgba(255, 51, 102, 0.9)
</style>
