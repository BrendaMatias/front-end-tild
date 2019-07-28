<template>
  <section class="signUp">
    <transition mode="out-in">
      <p>
        New to Blog?
        <a v-if="!signUp" @click="signUp = true">Create an account.</a>
        <UserForm v-else>
          <button class="btn btn-form" @click.prevent="createUser()">Criar Usuário</button>
        </UserForm>
      </p>
    </transition>
  </section>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
  name: "SignUp",
  components: {
    UserForm
  },
  data() {
    return {
      signUp: false
    };
  },
  methods: {
    async createUser() {
      try {
        await this.$store.dispatch("createUser", this.$store.state.user);
        await this.$store.dispatch("loginUser", this.$store.state.user);
        await this.$store.dispatch("getUsuario");
        this.$router.push({ name: "user" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.signUp 
  margin-top: 30px
  padding: 0px 15px
  text-align: center
  font-size: 12px
p
  border-top: 1px solid #d1d5da
  padding-top: 20px
a
  color: #0366d6
  cursor: pointer
a:hover
  text-decoration: underline
</style>
