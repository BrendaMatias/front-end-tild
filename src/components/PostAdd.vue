<template>
  <section class="add-post">
    <div>
      <form>
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="post.title" />
        <label for="content">Content</label>
        <textarea id="content" name="content" v-model="post.content"></textarea>
        <label for="image">Fotos</label>
        <input id="image" name="image" type="file" multiple ref="image" />
        <input class="btn" type="button" value="Add Post" @click.prevent="addPost" />
      </form>
      <SucessNotification :successes="successes" />
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import SucessNotification from "@/components/SucessNotification.vue";
import { mapFields } from "@/helpers.js";

export default {
  name: "PostAdd",
  components: {
    SucessNotification
  },
  data() {
    return {
      post: {
        title: "",
        content: "",
        image: "https://lorempixel.com/640/480/?20271",
        user_id: this.$store.state.user.id
      },
      successes: []
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
      this.successes.push("Post successfully added!");
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

form 
  justify-content: center
  display: grid
  
.add-post 
  max-width: 800px
  margin: 0 auto

input, textarea
  width: 570px

textarea
  height: 100px

.btn 
  background: $blue

.btn:hover 
  background: $blue-hover

</style>
