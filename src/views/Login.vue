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
        <input type="password" name="password" id="password" v-model="login.password" />
        <button v-if="!loading" @click.prevent="logar">Sign in</button>
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
$blue: #00b8e4

form 
  display: grid

.login 
  max-width: 600px
  margin: 0 auto

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
label 
  font-size: 14px
  color: #24292e
  line-height: 1.5
  font-weight: 600

a
  color: #0366d6
  font-size: 12px

.forgetPassword 
  float: right

input 
  width: 260px
  margin: 5px 0 20px 0
  border: 1px solid #d1d5da
  border-radius: 3px
  font-size: 14px
  line-height: 20px
  padding: 6px 8px
button 
  background: rgba($blue, 0.7)
  border-radius: 3px
  border: 2px solid transparent
  color: white
  cursor: pointer
  font-size: 14px
  font-weight: 600
  line-height: 20px
  padding: 6px 0

button:hover 
  background: $blue

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
