<template>
  <div class="container">

    <header class="jumbotron-cash">
      <h3>
        <strong>{{ currentUser.username }}</strong> profile
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
    <div class="card-cash card-container-cash">
      <router-view/>
      <div class="container">
        <div class="form-group">
          <label>Increase Cash
            <input type="number" id="cash" value="1000" class="form-control"
                   name="Cash"
            />
          </label>
          <div>
            <button class="button-cash button-money" v-on:click="increaseMoney">getMoney!</button>
          </div>
        </div>
      </div>
    </div>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <strong>Items:</strong>
    <ul>
      <li v-for="(items,name) in currentUser.items" :key="name">
        Item: {{ name }}, amount: {{ items }}
      </li>
    </ul>
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
            console.log(response)
            if (response.status === 200) {
              console.log(response.data.cash)
              this.currentUser.cash = response.data.cash
              this.currentUser.items = response.data.items

              let userTmp = JSON.parse((localStorage.getItem('user')))
              userTmp.cash = response.data
              userTmp.items = this.currentUser.items
              this.$forceUpdate()
              localStorage.removeItem('user')
              localStorage.setItem('user', JSON.stringify(userTmp))
              this.$forceUpdate()
            }
          });
    },

    updateCash() {
      return document.getElementById('cash').value;
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
  ,
};
</script>

<style>
.card-container-cash {
  max-width: 200px !important;
  max-height: 180px;
  padding: 40px 40px;
}

.card-cash {
  background-color: #f7f7f7;
  padding: 5px 5px 5px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 0;
  /*border-radius: 2px;*/
  /*-moz-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);*/
  /*-webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);*/
  /*box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);*/
}

.profile-img-card-profile {
  width: 96px;
  height: 96px;
  margin: 10px 0;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.button-cash {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 44px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 5px;
  position: relative;
}

.button-money {
  width: 120px;
  text-indent: -10px;
  text-align: left;
}

.jumbotron-cash {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  max-width: 350px;
  background-color: darkgray;
  border-radius: .3rem
}

</style>