<template>
  <form>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" v-model="name" />
    <label for="email">E-mail</label>
    <input id="email" name="email" type="email" v-model="email" />
    <label for="password">Password</label>
    <input id="password" name="password" type="password" v-model="password" />
    <label for="age">Age</label>
    <input id="age" name="age" type="number" v-model="age" />
    <div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  computed: {
    ...mapFields({
      fields: ["name", "email", "password", "age"],
      base: "user",
      mutation: "UPDATE_USER"
    })
  }
};
</script>

<style lang="sass" scoped>
@import '@/styles/style.sass'

form 
  margin-top: 30px
  display: grid
  text-align: left
input 
  width: 260px

</style>
