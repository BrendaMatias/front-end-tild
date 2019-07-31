<template>
  <section>
    <div class="home">
      <div class="posts">
        <div class="no-have-posts">
          <p v-if="noHavePosts" class="loading">
            You don't have any posts yet :(
            <br />Click
            <router-link class="click-here" :to="{name: 'addposts'}">here</router-link>to create one!
          </p>
        </div>
        <LoadingData v-if="loading" />
        <div class="grid" v-else>
          <div v-for="post in posts">
            <ul class="posts">
              <li class="title">
                <router-link :to="{name: 'post', params: {id: post.id}}">
                  <h2>{{ post.title }}</h2>
                </router-link>
              </li>
              <li class="created_at">
                <span>by {{name}}</span>
                - Recife, {{ post.created_at }}
              </li>
              <li class="img">
                <img :src="post.image" />
              </li>
              <li class="content">{{ post.content }}</li>
            </ul>
            <router-link class="btn" :to="{name: 'post', params: {id: post.id}}">Read More</router-link>
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
@import '@/styles/style.sass'
@import '@/styles/post.sass'

.about
  background: $blue
  padding: 130px 35px
  line-height: 20px
  text-align: center
  align-itens: center
  max-width: 300px
  max-height: 480px

.about h4 
  margin-top: 10px
  padding: 5px
  font-size: 16px
  color: white
  border-bottom: 2px solid white

.about h5
  margin-top: 12px
  font-size: 12px
  color: white

.user-image
  margin: auto
  width: 100px
  height: 100px
  border-radius: 50%
  overflow: hidden

.user-image img
  width: 100%
  
.no-have-posts
  margin-top: 150px

.no-have-posts p
  text-align: center
  font-size: 28px
  line-height: 1.5

.click-here 
  color: $blue

.click-here:hover
  color: $blue-hover

.btn 
  font-size: 12px
  text-transform: uppercase
  background: $blue
  padding: 15px 
  display: block
  text-align: center

.btn:hover
  background: $blue-hover
</style>

