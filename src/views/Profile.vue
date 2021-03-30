<template>
  <div class="container">

    <header class="jumbotron">
      <h3>
        <strong>{{ currentUser.username }}</strong> Profile
      </h3>
    </header>
    <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card-profile"
        alt=""/>
    <p>
      <strong>Cash:</strong>
      {{ currentUser.cash }}
    </p>
    <div class="card-cash card-container">
      <router-view/>
      <div class="container">
        <div class="form-group">
          <label>Increase Cash
            <input type="number" id="cash" value="1000" class="form-control"
                   name="Cash"
            />
          </label>
          <div>
            <button class="button button-green" v-on:click="increaseMoney">getMoney!</button>
          </div>
        </div>
      </div>
    </div>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <strong>Role:</strong>

    <p>{{ currentUser.role }}</p>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Profile',
  methods: {
    async increaseMoney() {
      await axios.put(`http://localhost:8080/api/user/${this.currentUser.id}/cash`,
          {
            userId: 1,
            userName: "pop",
            cash: this.updateCash(),
            items: {
              10: "8",
              20: "8"
            }
          }).then(
          response => {
            if (response.status === 200) {
              let user = localStorage.getItem('user')
              this.user.cash = this.user.cash + this.updateCash()
              localStorage.setItem('user', JSON.stringify(user))
            }
          });
    },

    updateCash() {
      //alert(document.getElementById('cash').value)
      return document.getElementById('cash').value;
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  }
  ,

  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
  ,
}
;
</script>

<style>
.card-container.card-cash {
  max-width: 350px !important;
  padding: 40px 40px;
}

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