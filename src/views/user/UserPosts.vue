<template>
  <section>
    <h2>Your posts</h2>
    <p v-if="noHavePosts" class="loading">You don't have posts.</p>
    <LoadingData v-if="loading" />
    <transition-group v-else name="list" tag="ul">
      <ul v-for="(post, index) in userPosts" :key="index">
        <PostItem :post="post">
          <p>{{post.content}}</p>
          <button @click="deletePost(post.id)" class="delete">Delete</button>
        </PostItem>
      </ul>
    </transition-group>
  </section>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import LoadingData from "@/components/LoadingData.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services.js";

export default {
  name: "UserPosts",
  components: {
    PostItem,
    LoadingData
  },
  data() {
    return {
      userPosts: this.$store.state.user.posts,
      loading: false,
      noHavePosts: false
    };
  },
  methods: {
    deletePost(id) {
      this.loading = true;

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
      if (this.userPosts.length <= 0) {
        this.noHavePosts = true;
      }
      console.log(this.userPosts);
      this.loading = false;
    }
  },
  watch: {
    getPost() {
      this.loading = true;
    }
  },
  created() {
    this.loading = true;
    this.getPost();
  }
};
</script>

<style lang="sass" scoped>
$blue: #00b8e4

section 
  width: 800px
  margin: 0 auto
h2  
    text-align: center
    margin-bottom: 20px
    font-weight: 600
    padding-bottom: 15px
    border-bottom: 2px solid $blue

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
    background: rgb(217, 79, 79)
    border-radius: 4px
    padding: 4px 20px  
    color: white

.delete:hover
  background: rgb(244, 78, 78)

.loading 
  width: 800px
  font-size: 30px
  text-align: center
  margin-top: 60px
</style>
