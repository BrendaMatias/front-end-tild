<template>
  <section class="login">
    <h1>Profile</h1>
    <div>
      <form>
        <label for="name">Name</label>
        <input type="name" name="name" id="name" v-model="name" />
        <label for="email">Email Adress</label>
        <input type="email" name="email" id="email" v-model="email" />
        <label for="age">Age</label>
        <input type="number" name="age" id="age" v-model="age" />
        <label for="password">Old password</label>
        <input type="password" name="password" id="password" v-model="login.password" />
        <label for="password">New password</label>
        <input type="password" name="password" id="password" v-model="login.password" />
        <label for="password">Confirm new password</label>
        <input type="password" name="password" id="password" v-model="login.password" />
        <button @click.prevent="updateUser">Update Profile</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { api } from "@/services.js";

export default {
  name: "User",
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "age",
      ],
      base: "user",
      mutation: "UPDATE_USER"
    }),
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
      updateUser() {
      this.erros = [];
      var idUser = this.$store.state.user.id; 

          console.log(this.$store.state.user);
      api
        .put(`/users/${this.$store.state.user.id}`, this.$store.state.user)
        .then(() => {
          this.$store.dispatch("getUsuario", idUser);
          this.$router.push({ name: "user" });
        })
        .catch(error => {
          this.erros.push(error.response.data.message);
        });
    }
  }
};
</script>

<style lang="sass" scoped>
form 
  display: grid

.login 
  max-width: 800px
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
  width: 560px
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
