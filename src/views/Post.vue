<template>
  <section>
    <div class="posts">
      <LoadingData v-if="loading" />
      <div class="grid" v-else>
        <ul class="posts">
          <li class="title">{{ post.title }}</li>
          <li class="created_at">
            <span>by {{this.$store.state.user.name}}</span>
            - Recife, {{ post.created_at }}
          </li>
          <li class="img">
            <img :src="post.image" />
          </li>
          <li class="content">{{ post.content }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import LoadingData from "../components/LoadingData.vue";

export default {
  name: "Post",
  components: {
    LoadingData
  },
  props: ["id"],
  data() {
    return {
      post: null,
      comments: null,
      loading: true
    };
  },
  methods: {
    async getPost() {
      await this.$store.dispatch("getPost", this.id);
      this.post = this.$store.state.post;
    },
    async getComments() {
      this.comments = this.$store.state.post.comments;
    },
    deletePost(id) {
      this.loading = true;

      const confirm = window.confirm("Do you want to remove this comment?");
      if (confirm) {
        api
          .delete(`/posts/${this.id}/comments/${id}`)
          .then(() => {
            this.getPost();
            this.getComments();
            this.loading = false;
          })
          .catch(error => {
            console.log(error.reponse);
          });
      }
    }
  },
  watch: {
    getPost() {
      this.getPost();
    }
  },
  created() {
    this.getPost();
    this.getComments();
    this.loading = false;
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'
@import '@/styles/post.sass'

.posts
  max-width: 600px

.posts 
  margin-bottom: 80px
</style>

