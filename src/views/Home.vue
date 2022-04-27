<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if="!isLoggedIn">
      To use this app you'll need to
      <router-link to="/login">
        Login
      </router-link>
      Or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/veux/helper'
export default {
  name: 'Home',
  computed: {
    ...authComputed // isLoggedin
  }

}
</script>
