<template>
  <form>
    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="name">
    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email">
    <label for="password">Senha</label>
    <input id="password" name="password" type="password" v-model="password">
    <label for="age">Idade</label>
    <input id="age" name="age" type="number" v-model="age">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "password",
        "age"
      ],
      base: "user",
      mutation: "UPDATE_USER"
    })
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
