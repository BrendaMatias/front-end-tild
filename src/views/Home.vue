<template>
  <section>
    <div class="home">
      <div class="posts">
        <div class="no-have-posts">
          <p v-if="noHavePosts" class="loading">
            You don't have posts :(
            <br />Add a new post to the menu.
          </p>
        </div>
        <LoadingData v-if="loading" />
        <div class="grid" v-else>
          <div v-for="post in posts">
            <router-link class="btn-post" :to="{name: 'post', params: {id: post.id}}">Read More</router-link>
            <ul class="posts">
              <router-link :to="{name: 'post', params: {id: post.id}}">
                <li class="title">{{ post.title }}</li>
                <li class="created_at">
                  <span>by Ian Somerhalder</span>
                  - Recife {{ post.created_at }}
                </li>
              </router-link>
              <li class="img">
                <img :src="post.image" />
              </li>
              <div class="divContent">
                <li class="content">{{ post.content }}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="user-image">
          <img
            src="https://s-media-cache-ak0.pinimg.com/736x/92/80/c1/9280c111e34752405eb524d4ed0750e6--ian-somerholder-beautiful-men.jpg"
          />
        </div>
        <h4>{{name}}</h4>
        <h5>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h5>
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import LoadingData from "../components/LoadingData.vue";

export default {
  name: "Home",
  components: {
    LoadingData
  },
  data() {
    return {
      posts: null,
      loading: true,
      noHavePosts: false
    };
  },
  methods: {
    getPosts() {
      this.produtos = null;
      this.posts = this.$store.state.user.posts;
      console.log(this.posts);
      if (this.posts.length <= 0) {
        this.noHavePosts = true;
      }
      this.loading = false;
    }
  },
  computed: {
    name() {
      return this.$store.state.user.name.replace(/ .*/, "");
    }
  },
  watch: {
    getPosts() {}
  },
  created() {
    this.getPosts();
  }
};
</script>

<style lang="sass" scoped>

$blue: #00b8e4

section
  margin: 0 auto
  align-itens: center

.home
  display: grid
  grid-template-columns: 700px 340px
  grid-gap: 30px
.grid
  max-width: 600px
img 
  width: 100%
ul
  background: #fff
  margin-bottom: 80px

.divContent
  padding: 20px 70px

.title
  cursor: pointer
  font-size: 22px
  color: #000
  text-transform: uppercase
  font-weight: 600
.content
  text-align: right
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

.gif
  margin: 40px auto 100px auto
  width: 100px

.about
  padding: 0 35px
  line-height: 20px
  text-align: center
  align-itens: center
  max-width: 300px
  max-height: 340px
.about h4 
  margin-top: 10px
  padding: 5px
  font-size: 16px
  color: $blue
  border-bottom: 2px solid $blue
.about h5
  margin-top: 12px
  font-size: 12px
.user-image
  margin: auto
  width: 100px
  height: 100px
  border-radius: 50%
  overflow: hidden

.user-image img
  width: 100%

.no-have-posts p
  text-align: center
  font-size: 28px
  line-height: 1.5

.btn-post 
  float: right
  font-size: 12px
  text-transform: uppercase
  font-weight: 600
  cursor: pointer
  border: none
  background: $blue
  border-radius: 4px
  padding: 4px 20px  
  color: white

.btn-post:hover
  background: rgb(244, 78, 78)

</style>

