<template>
  <section class="signUp">
    <h1>Sign Up</h1>
    <div class="signup-body">
      <form>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" v-model="user.name" />
        <label for="email">E-mail</label>
        <input id="email" name="email" type="email" v-model="user.email" />
        <label for="password">Password</label>
        <input id="password" name="password" type="password" v-model="user.password" />
        <label for="age">Age</label>
        <input id="age" name="age" type="number" v-model="user.age" />
        <input
          v-if="!loading"
          @click.prevent="createUser"
          value="Create new user"
          type="submit"
          class="btn"
        />
        <LoadingData v-else class="loading" />
      </form>
      <SucessNotification :successes="successes" />
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { mapFields } from "@/helpers.js";
import LoadingData from "../components/LoadingData.vue";
import SucessNotification from "@/components/SucessNotification.vue";

export default {
  name: "SignUp",
  components: {
    LoadingData
  },
    computed: {
    ...mapFields({
      fields: ["name", "email", "password", "age"],
      base: "user",
      mutation: "UPDATE_USER"
    })
  },
  data() {
    return {
      signUp: false,
      loading: false,
      user: {
        name: "",
        email: "",
        password: "",
        age: ""
      },
      successes: []
    };
  },
  methods: {
    async createUser() {
      this.loading = true;
      console.log(this.user);
      try {
        await api.post("/users/", this.user);
        await this.$store.dispatch("getUsuario", this.user.email).then(() => {
          this.loading = false;
          this.successes.push("User successfully registered!");
        }).catch(error => {
          this.erros.push("An error occured while trying to register the user.<br/>Try again!");
        });
        this.user = {
            name: "",
            email: "",
            password: "",
            age: ""
        }
      } catch (error) {
        this.erros.push("An error occured while trying to register the user.<br/>Try again!");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'
h1 
  text-align: center
  font-size: 24px
  font-weight: 300
  text-transform: uppercase
  margin-bottom: 20px

form
  display: grid

input 
  width: 260px

.btn 
  background: $blue
  
.btn:hover 
  background: $blue-hover
</style>
