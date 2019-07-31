<template>
  <section class="login">
    <h1>Login</h1>
    <div class="login-body">
      <form>
        <label for="email">Email Adress</label>
        <input type="email" name="email" id="email" v-model="login.email" required />
        <label for="password">
          Password
          <a href="/login" target="_blank" class="forgetPassword">Forgot password?</a>
        </label>
        <input type="password" name="password" id="password" v-model="login.password" required />
        <input v-if="!loading" @click.prevent="logar" value="Sign in" type="submit" class="btn" />
        <LoadingData v-else class="loading" />
        <p class="signUp-text">
          New to Blog?
          <router-link to="/signup" class="login">Create an account.</router-link>
        </p>
        <SucessNotification :successes="successes" />
        <ErroNotification :erros="erros" />
      </form>
    </div>
  </section>
</template>

<script>
import LoadingData from "../components/LoadingData.vue";
import { mapFields } from "@/helpers.js";

export default {
  name: "Login",
  components: {
    LoadingData
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      erros: [],
      successes: [],
      loading: false
    };
  },
  methods: {
    async logar() {
      this.erros = [];
      if (this.login.email == "") {
        this.erros.push("Enter your email.");
      } else if(this.login.password == "") {
        this.erros.push("Enter your password.");
      } else {
        this.loading = true;
        this.$store
          .dispatch("getUser", this.login.email)
          .then(() => {
            if (this.$store.state.login) {
              this.$router.push({ name: "posts" });
            }
          })
          .catch(error => {
            this.loading = false;
            this.erros.push("An error has occurred.<br/>Try again!");
          });
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

form 
  display: grid

h1 
  text-align: center
  font-size: 24px
  font-weight: 300
  text-transform: uppercase
  margin-bottom: 20px

.forgetPassword 
  float: right

input 
  width: 260px

.btn 
  background: $blue

.btn:hover 
  background: $blue-hover

/* Botão de carregamento */
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


/* SignUp */ 
.signUp-text 
  margin-top: 30px
  padding-top: 20px
  text-align: center
  font-size: 12px
p
  border-top: 1px solid #d1d5da
.signUp-text a
  color: #0366d6
  cursor: pointer
.signUp-text a:hover
  text-decoration: underline
</style>
