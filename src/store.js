import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
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
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_POSTS(state, payload) {
      state.user.posts = Object.assign(state.user.posts, payload);
    }
  },
  actions: {
    async getUser(context, emailLogin) {
      /* Fazendo requisição dos usuários para saber o tamanho de páginas existentes.*/ 
      await api.get(`/users`).then(response => {
        context.commit("UPDATE_USER", response.data);
      })

      /* Loop para varredura das páginas existentes. */
      for(var i = 0; i <= this.state.user.last_page; i++) {
        await api.get(`/users?page=${i.toString()}`).then(response => {
          context.commit("UPDATE_USER", response.data);
        });
        /* Loop para varredura no array de usuários existente na página. */
        for(var i2 = 0; i2 < this.state.user.data.length; i2++) {
          /* Se o email inserido for igual ao email do array atual deverá atualizar o user atual e parar o loop */ 
          if((this.state.user.data[i2].email) == emailLogin) {
            await context.commit("UPDATE_USER", this.state.user.data[i2]);
            context.commit("UPDATE_LOGIN", true);
            console.log('achou essa porra');
            console.log(this.state.user);
            return true;
          }
        }
      }
    },
    getUserLogado(context, payload) {
      api.get(`/users/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
        console.log(this.state.user);
      })
    },
    createUser(context) {
      return api.post("/users/");
    },
    getPosts(context, payload) {
      return api.get(`/users/50`).then(response => {
        context.commit("UPDATE_USER", response.data);
      });
    }
  }
});