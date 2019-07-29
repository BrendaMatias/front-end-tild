<template>
  <section class="login">
    <h1>Login</h1>
    <div>
      <form>
        <label for="email">Email Adress</label>
        <input type="email" name="email" id="email" v-model="login.email" required />
        <label for="password">
          Password
          <a href="/" target="_blank" class="forgetPassword">Forgot password?</a>
        </label>
        <input type="password" name="password" id="password" v-model="login.password" />
        <button @click.prevent="logar">Sign in</button>
      </form>
      <SignUp />
    </div>
  </section>
</template>

<script>
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Login",
  components: {
    SignUp
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      },
      erros: []
    };
  },
  methods: {
    async logar() {
      this.erros = [];
      /*const button = event.currentTarget;
      console.log(button);
      button.value = "Loading...";
      button.setAttribute("disabled", "");*/
      await this.$store.dispatch("getUser", this.login.email);
      if (this.$store.state.login) {
        this.$router.push({ name: "posts" });
      }
    }
  }
};
</script>

<style lang="sass" scoped>

form 
  display: grid

.login 
  max-width: 600px
  margin: 0 auto

.login 
  div
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
  background: rgba(255, 51, 102, 0.7)
  border-radius: 3px
  border: 2px solid transparent
  color: white
  cursor: pointer
  font-size: 14px
  font-weight: 600
  line-height: 20px
  padding: 6px 0

button:hover 
  background: rgba(255, 51, 102, 0.9)

</style>
