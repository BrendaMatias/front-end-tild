<template>
  <section>
    <div class="posts">
      <LoadingData v-if="loading" />
      <div class="grid" v-else>
        <ul class="posts">
          <li class="title">{{ post.title }}</li>
          <li class="img">
            <img :src="post.image" />
          </li>
          <div class="divContent">
            <li class="content">{{ post.content }}</li>
          </div>
          <li class="created_at">
            <span>by Ian Somerhalder</span>
            - Recife {{ post.created_at }}
          </li>
        </ul>
        <div class="comment">
          <ul v-for="comment in comments">
            <li class="title">{{ comment.title }}</li>
            <li class="content">{{ comment.content }}</li>
            <li class="created_at">
              <span>by Ian Somerhalder</span>
              - Recife {{ comment.created_at }}
            </li>
            <button @click="deletePost(comment.id)" class="delete">Delete</button>
          </ul>
        </div>
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
        console.log(this.id);
        console.log(id);
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
    },
  },
  created() {
    this.getPost();
    this.getComments();
    this.loading = false;
  }
};
</script>

<style lang="sass" scoped>

$blue: #00b8e4

section
  margin: 0 auto
  align-itens: center

.posts
  max-width: 600px
img 
  width: 100%
.posts 
  background: #fff
  margin-bottom: 80px

.divContent
  padding: 20px 70px

.title
  font-size: 22px
  color: #000
  text-transform: uppercase
  margin-bottom: 30px
  font-weight: 600
.content
  font-size: 14px
  color: rgb(177, 177, 177)
  line-height: 1.5
  margin-bottom: 15px
span
  color: $blue
.created_at
  color: #777
  padding: 25px
  float: center
  font-size: 11px
  font-weight: 600


.user-image img
  width: 100%

.comment
  border: 1px solid #bebebe

.comment ul
  padding: 20px 50px

.delete 
  font-size: 12px
  text-transform: uppercase
  font-weight: 600
  cursor: pointer
  border: none
  background: rgba($blue, 0.9)
  border-radius: 10px
  padding: 3px 20px  
  border: 2px solid transparent
  color: white
.delete:hover
  background: white
  color: black
  border: 2px solid rgba($blue, 0.9)
</style>

