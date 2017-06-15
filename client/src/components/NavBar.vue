<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <p class="subtitle">CMHack</p>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <router-link :to="{path: '/'}" class="nav-item">
          <span class="icon is-medium"><i class="fa fa-home"></i></span>
        </router-link>
        <router-link :to="{path: 'create'}" v-if="token" @click="create" class="button is-primary is-outlined nav-item">
          Create
        </router-link>
        <a v-if="token" @click="signout" class="button is-danger is-outlined nav-item">
          Sign out
        </a>
        <a v-else class="button is-primary is-outlined modal-button nav-item">
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
              <li><a>Join</a></li>
              <li><a>Sign in</a></li>
            </ul>
          </div>
          <p class="modal-card-title">Modal title</p>
          <button class="delete"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <a class="button is-success">Save changes</a>
          <a class="button">Cancel</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      register: true
    }
  },
  computed: {
    token () {
      return false
      // return this.$store.getters.token
    }
  },
  methods: {
    signin: function () {
      // this.$store.dispatch('signin')
    },
    signout: function () {
      // this.$store.dispatch('signout')
    },
    create: function () {
    }
  }
}
</script>
