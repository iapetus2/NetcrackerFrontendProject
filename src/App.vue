<template>
  <div id="app">

    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href class="navbar-brand" @click.prevent>NetTrade</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home"/>
            Home
          </router-link>
        </li>

        <li class="nav-item">
          <router-link v-if="currentUser" to="/dashBoard" class="nav-link">
            <font-awesome-icon icon="dashboard"/>
            Trade
          </router-link>
        </li>

        <!--          <li class="nav-item">-->
        <!--            <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>-->
        <!--          </li>-->
      </div>
      -->

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/signup" class="nav-link">
            <font-awesome-icon icon="user-plus"/>
            Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt"/>
            Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user"/>
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logout">
            <font-awesome-icon icon="sign-out-alt"/>
            Logout
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    name: 'app',
  },
  data() {
    return {
      msg: 'Welcome'
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>