<template>
  <section>
    <h2>Add post</h2>
    <PostsAdd />
    <h2>Your posts</h2>
    <p v-if="loading">Loading...</p>
    <transition-group v-else name="list" tag="ul">
      <li v-for="(post, index) in userPosts" :key="index">
        <PostItem :post="post">
          <p>{{post.content}}</p>
          <button @click="deletePost(post.id)" class="delete">Delete</button>
        </PostItem>
      </li>
    </transition-group>
    <p v-if="deleting">Deleting...</p>
  </section>
</template>

<script>
import PostsAdd from "@/components/PostAdd.vue";
import PostItem from "@/components/PostItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "UserPosts",
  components: {
    PostsAdd,
    PostItem
  },
  data() {
    return {
      userPosts: this.$store.state.user.posts,
      deleting: false,
      loading: false,
    };
  },
  methods: {
    deletePost(id) {
      this.deleting = true;

      const confirm = window.confirm("Do you want to remove this post?");
      if (confirm) {
        api
          .delete(`/posts/${id}`)
          .then(() => {
            this.getPost();
          })
          .catch(error => {
            console.log(error.reponse);
          });
      }
    },
    async getPost() {
      await this.$store.dispatch("getUser", this.$store.state.user.email);
      this.userPosts = this.$store.state.user.posts;
      this.deleting = false;
      this.loading = false;
    }
  },
  watch: {
    getPost() {
      this.deleting = true;
    }
  },
  created() {
    this.loading = true;
    this.getPost();
  }
};
</script>

<style lang="sass" scoped>
h2  
    text-align: center
    margin-bottom: 20px
    font-weight: 600
    padding-bottom: 15px
    border-bottom: 2px solid rgba(255, 51, 102, 0.9)

.list-enter,
.list-leave-to 
  opacity: 0
  transform: translate3d(20px, 0, 0)


.list-enter-active,
.list-leave-active 
  transition: all 0.3s


.delete 
    font-size: 12px
    text-transform: uppercase
    font-weight: 600
    position: absolute
    top: 0px
    right: 0px
    cursor: pointer
    border: none
    background: rgba(255, 51, 102, 0.9)
    border-radius: 10px
    padding: 3px 20px  
    border: 2px solid transparent
    color: white
.delete:hover
    background: white
    color: black
    border: 2px solid rgba(255, 51, 102, 0.9)
</style>
