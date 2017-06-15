<template>
  <div class="container is-fluid">
    <br>
    <br>
    <div v-if="author">
      <div class="columns">
        <div class="column is-three-quarters has-text-centered">
          <h1 class="title">Articles by {{author}}</h1>
        </div>
        <div class="column">
          <a @click="goHome" class="button is-medium">Home</a>
        </div>
      </div>
      <br>
      <br>
    </div>
    <div v-if="category">
      <div class="columns">
        <div class="column is-three-quarters has-text-centered">
          <h1 class="title">Articles with {{category}} tag</h1>
        </div>
        <div class="column">
          <a @click="goHome" class="button is-medium">Home</a>
        </div>
      </div>
      <br>
      <br>
    </div>
    <section v-for="article in articles" class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{article.title}}
          </h1>
          <h2 v-if="author===null" class="subtitle">
            By: 
            <span @click.prevent="showByAuthor(article.author)" class="button">{{article.author.username}}</span>
          </h2>
          <p>{{article.content}}</p>
          <br>
          <span v-if="category===null" @click.prevent="showByCat(cat)" v-for="cat in article.categories" class="button tag is-dark is-medium">{{cat}}</span>
          <br>
          <p class="has-text-centered">--------</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      edit: false,
      author: null,
      category: null
    }
  },
  created: function () {
    this.$store.dispatch('getArticles')
  },
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  },
  methods: {
    showByCat: function (category) {
      this.$store.dispatch('showByCategory', category)
      this.category = category
      this.author = null
    },
    showByAuthor: function (author) {
      this.$store.dispatch('showByAuthor', author._id)
      this.author = author.username
      this.category = null
    },
    goHome: function () {
      this.$store.dispatch('getArticles')
      this.author = null
      this.category = null
    }
  }
}
</script>
