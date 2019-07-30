<template>
  <section class="login">
    <h1>Login</h1>
    <div class="login-body">
      <form>
        <label for="email">Email Adress</label>
        <input type="email" name="email" id="email" v-model="login.email" required />
        <label for="password">
          Password
          <a href="/" target="_blank" class="forgetPassword">Forgot password?</a>
        </label>
        <input type="password" name="password" id="password" v-model="login.password" required />
        <input v-if="!loading" @click.prevent="logar" value="Sign in" type="submit" class="btn" />
        <LoadingData v-else class="loading" />
      </form>
      <SignUp />
    </div>
  </section>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
import LoadingData from "../components/LoadingData.vue";

export default {
  name: "Login",
  components: {
    SignUp,
    LoadingData
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      erros: [],
      loading: false
    };
  },
  methods: {
    async logar() {
      this.erros = [];
      this.loading = true;
      await this.$store.dispatch("getUser", this.login.email);
      if (this.$store.state.login) {
        this.$router.push({ name: "posts" });
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

form 
  display: grid

.login 
  max-width: 600px
  margin: 0 auto
  margin-top: 80px

.login-body
  border: 1px solid #d1d5da
  border-radius: 3px
  padding: 30px

h1 
  text-align: center
  font-size: 24px
  font-weight: 300
  text-transform: uppercase
  margin-bottom: 20px

a
  color: #0366d6
  font-size: 12px

.forgetPassword 
  float: right

input 
  width: 260px

.btn 
  background: $blue

.btn:hover 
  background: $blue-hover

.loader 
  margin: 0 auto
  border: 8px solid #f3f3f3
  border-top: 8px solid #00b8e4
  border-radius: 50%
  width: 70px
  height: 70px
  animation: spin 2s linear infinite

@keyframes spin 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

</style>
