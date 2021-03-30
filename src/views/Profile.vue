<template>
  <div class="container">

    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card-profile"
        alt=""/>
    <p>
      <strong>Cash:</strong>
      {{currentUser.cash}}
    </p>
    <div>
      <button class="button button-green" v-on:click="increaseMoney">getMoney!</button>

    </div>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Role:</strong>

    <p>{{currentUser.role}}</p>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  async increaseMoney() {
    await axios.put('http://localhost:8080/api/user',
        {
         cash: ""
        })
  },
};
</script>

<style>
.profile-img-card-profile {
  width: 96px;
  height: 96px;
  margin: 10px 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>