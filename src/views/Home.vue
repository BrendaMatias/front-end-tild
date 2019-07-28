<template>
  <div class="home">
    <div class="grid">
      <ul v-for="post in posts" class="posts">
        <li class="img">
          <img :src="post.image" />
        </li>
        <div class="divContent">
          <li class="created_at">Recife, {{ post.created_at }}</li>
          <li class="title">{{ post.title }}</li>
          <li class="content">{{ post.content }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      posts: null,
    };
  },
  methods: {
    getPosts() {
      this.$store.dispatch("getPosts", this.$store.state.user.id).then(() => {
        this.posts = this.$store.state.user.posts;
      });
    },
  },
  created() {
    this.getPosts();
  }
};
</script>

<style lang="sass" scoped>
.grid
	max-width: 600px
	margin: 0 auto
img 
  width: 100%
ul
  background: #fff
  margin-bottom: 60px

.divContent
  padding: 20px 70px

.title
  cursor: pointer
  font-size: 20px
  color: rgb(64, 64, 66)
  text-transform: uppercase
  margin: 20px 0 30px 0
.content
  font-size: 14px
  color: rgb(177, 177, 177)
  line-height: 1.5
  margin-bottom: 15px
.created_at
  color: rgba(255, 51, 102, 0.9)
  float: center
  font-size: 11px
  text-transform: uppercase
  font-weight: 600
.updated_at
</style>

