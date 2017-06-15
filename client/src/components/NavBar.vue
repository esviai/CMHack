<template>
  <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item" class="subtitle">
          CMHack
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <a class="nav-item">
          Home
        </a>
        <a v-if="token" @click="signout" class="button is-danger is-outlined nav-item">
          Sign out
        </a>
        <a v-else @click="signin" class="button is-primary is-outlined modal-button nav-item">
          Sign in/Join
        </a>
      </div>
    </nav>

    <div id="modal-ter" class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->
      </div>
      <button class="modal-close"></button>
    </div>


  </div>
</template>

<script>
export default {
  computed: {
    token () {
      // return this.$store.getters.token
    }
  },
  methods: {
    signin: function () {
      // this.$store.dispatch('signin')
    },
    signout: function () {
      // this.$store.dispatch('signout')
    }
  }
}
</script>
