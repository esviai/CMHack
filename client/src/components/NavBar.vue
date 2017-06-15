<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item" href="/#">
          <p class="subtitle">CMHack</p>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <router-link :to="{path: 'create'}" v-if="token" @click="create" class="button is-primary is-outlined nav-item">
          Create
        </router-link>
        <a v-if="token" @click="signout" class="button is-danger is-outlined nav-item">
          Sign out
        </a>
        <a v-else class="button is-primary is-outlined modal-button nav-item" data-target="#modal-ter">
          Sign in/Join
        </a>
      </div>
    </nav>
    <div id="modal-ter" class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <div class="tabs">
            <ul>
              <li><a @click="register=true">Join</a></li>
              <li><a @click="register=false">Sign in</a></li>
            </ul>
          </div>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <p class="control">
            <input class="input" type="text" placeholder="username" v-model="user.username">
            </p>
          </div>
          <div class="field">
            <p class="control">
            <input class="input" type="password" placeholder="password" v-model="user.password">
            </p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a v-if="register" @click.prevent="join(user)" class="button is-primary">Join</a>
          <a v-else @click.prevent="signin(user)" class="button is-primary">Sign in</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      register: true,
      user: {}
    }
  },
  computed: {
    token () {
      return this.$store.getters.token
    }
  },
  created: function () {
    this.$store.commit('setToken')
  },
  methods: {
    join: function (user) {
      console.log(user)
      this.$store.dispatch('join', user)
      this.user = {}
    },
    signin: function (user) {
      this.$store.dispatch('signin', user)
      this.user = {}
    },
    signout: function () {
      this.$store.dispatch('signout')
      window.location.href = 'http://localhost:8080'
    },
    create: function () {
    }
  }
}
</script>
