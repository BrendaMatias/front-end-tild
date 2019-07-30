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
    }
  }
};
</script>

<style lang="sass" scoped>
$blue: #00b8e4
section
  width: 800px
  margin: 0 auto
form 
  display: grid

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
