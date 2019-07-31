<template>
  <section class="edit-profile">
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
        <SucessNotification :successes="successes" />
        <ErroNotification :erros="erros" />
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
      fields: ["name", "email", "age"],
      base: "user",
      mutation: "UPDATE_USER"
    })
  },
  data() {
    return {
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
      };
      api
        .put(`/users/${this.$store.state.user.id}/`, body)
        .then(() => {
          this.successes.push("Data updated successfully.");
        })
        .catch(error => {
          this.erros.push(
            "An error occured while trying to update the user.<br/>Try again!"
          );
        });
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

form 
  display: grid

.edit-profile 
  max-width: 800px
  margin: 0 auto

.edit-profile 
  div
    padding: 30px

h2  
  text-align: center
  margin-bottom: 20px
  font-weight: 600
  padding-bottom: 15px
  border-bottom: 2px solid $blue

a
  font-size: 12px

.forgetPassword 
  float: right

input 
  width: 570px

button 
  background: $blue

button:hover 
  background: $blue-hover
</style>
