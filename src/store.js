import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    users: {
      name: "",
      email: "",
      password: "",
      age: ""
    },
    user: {
      name: "",
      email: "",
      password: "",
      age: "",
      posts: [
        {
          id: "",
          title: "",
          content: "",
          image: "",
          user_id: "",
          created_at: "",
          updated_at: ""
        }
      ]
    },
    posts: [
      {
        id: "",
        title: "",
        content: "",
        image: "",
        user_id: "",
        created_at: "",
        updated_at: ""
      }
    ]
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USERS(state, payload) {
      state.users = Object.assign(state.users, payload);
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_POSTS(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async getUser(context, emailLogin) {
      /* Fazendo requisição dos usuários para saber o tamanho de páginas existentes.*/
      await api.get(`/users`).then(response => {
        context.commit("UPDATE_USERS", response.data);
      });

      /* Loop para varredura das páginas existentes. */
      for (var i = 0; i <= this.state.users.last_page; i++) {
        await api.get(`/users?page=${i.toString()}`).then(response => {
          context.commit("UPDATE_USERS", response.data);
        });
        /* Loop para varredura no array de usuários existente na página. */
        for (var i2 = 0; i2 < this.state.users.data.length; i2++) {
          /* Se o email inserido for igual ao email do array atual deverá atualizar o user atual e parar o loop */
          if (this.state.users.data[i2].email == emailLogin) {
            await api
              .get(`/users/${this.state.users.data[i2].id}`)
              .then(response => {
                context.commit("UPDATE_USER", response.data);
                console.log(this.state.user.posts);
              });
            context.commit("UPDATE_LOGIN", true);
            window.localStorage.token = `Bearer ${this.state.user.id}`;
            return true;
          }
        }
      }
    },
    getUserLogado(context, payload) {
      api.get(`/users/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
        console.log(this.state.user);
      });
    },
    createUser(context) {
      return api.post("/users/");
    },
    signOut(context) {
      context.commit("UPDATE_USERS", {
        name: "",
        email: "",
        password: "",
        age: "",
        posts: [
          {
            id: "",
            title: "",
            content: "",
            image: "",
            user_id: "",
            created_at: "",
            updated_at: ""
          }
        ]
      });
      context.commit("UPDATE_USER", {
        name: "",
        email: "",
        password: "",
        age: ""
      });
      window.localStorage.removeItem("token");
      context.commit("UPDATE_LOGIN", false);
    },
    getPosts(context) {
      api.get(`/posts`).then(response => {
        context.commit("UPDATE_POSTS", response.data);
      });
    }
  }
});
