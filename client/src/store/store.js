import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    articles: [],
    token: null
  },
  getters: {
    articles (state) {
      return state.articles
    },
    token (state) {
      return state.token
    }
  },
  mutations: {
    setArticles (state, articles) {
      state.articles = articles
    },
    setToken (state) {
      state.token = localStorage.getItem('token') || null
    }
  },
  actions: {
    join: function (store, user) {
      axios.post('http://localhost:3000/signup', {
        username: user.username,
        password: user.password
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signin: function (store, user) {
      axios.post('http://localhost:3000/signin', {
        username: user.username,
        password: user.password
      })
        .then((response) => {
          localStorage.setItem('token', response.data.token)
          store.commit('setToken')
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signout: function (store) {
      localStorage.clear()
      store.commit('setToken')
    },
    getArticles: function (store) {
      axios.get('http://localhost:3000/articles')
        .then((response) => {
          store.commit('setArticles', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    showByAuthor: function (store, author) {
      axios.get(`http://localhost:3000/articles/author/${author}`)
        .then((response) => {
          store.commit('setArticles', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    showByCategory: function (store, category) {
      axios.get(`http://localhost:3000/articles/cat/${category}`)
        .then((response) => {
          store.commit('setArticles', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    postArticle: function (store, article) {
      axios.post('http://localhost:3000/articles', {
        title: article.title,
        content: article.content,
        categories: article.categories
      }, {
        headers: {'token': store.getters.token}
      })
        .then((response) => {
          store.commit('setArticles', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
