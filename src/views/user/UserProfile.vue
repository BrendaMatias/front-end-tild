<template>
  <section class="login">
    <h2>Edit Profile</h2>
    <div>
      <form>
        <label for="name">Name</label>
        <input type="name" name="name" id="name" v-model="name" />
        <label for="email">Email Adress</label>
        <input type="email" name="email" id="email" v-model="email" />
        <label for="age">Age</label>
        <input type="number" name="age" id="age" v-model="age" />
        <button @click.prevent="updateUser">Update Profile</button>
        <SucessNotification :successes="successes"/>
        <ErroNotification :erros="erros"/>
      </form>
    </div>
  </section>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { api } from "@/services.js";

export default {
  name: "UserProfile",
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
      erros: [],
      successes: []
    };
  },
  methods: {
      updateUser() {
      this.erros = [];
      var idUser = this.$store.state.user.id; 
      var body = {
        name: this.$store.state.user.name,
        age: this.$store.state.user.age,
        email: this.$store.state.user.email
      }
      api.put(`/users/${this.$store.state.user.id}/`, body)
        .then(() => {
          this.successes.push("Data updated successfully.");
        })
        .catch(error => {
          this.erros.push("An error occured while trying to update the user.<br/>Try again!");
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
    padding: 30px

h2  
    text-align: center
    margin-bottom: 20px
    font-weight: 600
    padding-bottom: 15px
    border-bottom: 2px solid rgba(255, 51, 102, 0.9)
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
  width: 570px
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
