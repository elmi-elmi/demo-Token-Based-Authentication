<template>
  <div>
    <form @submit.prevent="login">
      <label>Email</label>
      <input v-model="email" type="email">
      <label>Password</label>
      <input v-model="password" type="password">
      <button type="submit" name="button">
        Login
      </button>
      <p>{{ error }}</p>
    </form>
    <router-link to="/register">
      Don't have an account? Register here!
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginUser',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          this.error = err.response.data
        })
    }

  }
}
</script>

<style scoped>

</style>
