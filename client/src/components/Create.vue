<template>
  <div class="container">
    <br>
    <br>
    <div class="field">
      <p class="control">
      <input v-model="article.title"class="input" type="text" placeholder="Title">
      </p>
    </div>
    <div class="field">
      <p class="control">
      <textarea v-model="article.content" class="textarea" placeholder="Content"></textarea>
      </p>
    </div>
    <div class="field">
      <p class="control">
      <input v-model="article.categories" class="input" type="text" placeholder="Categories (sep. by comma)">
      </p>
    </div>
    <a @click.prevent="postArticle(article)" class="button is-large is-primary">Create</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    postArticle: function (article) {
      console.log(this.article)
      this.$store.dispatch('postArticle', article)
      this.article = {}
    }

  }
}
</script>
