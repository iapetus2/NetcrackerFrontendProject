<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <!--        <router-link to="/">Home</router-link>-->
        <!--        <router-link to="/details">-->
        <!--          <h1 class="text-center">Trading Platform</h1>-->
        <!--        </router-link>-->
      </div>
    </div>

    <div class="dashCard">
      <div class="text-left">
        <h3>Oil</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Metals</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Sto(n)cks</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Bonds</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Futures</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Food</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Minerals</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
    <div class="dashCard">
      <div class="text-left">
        <h3>Wood</h3>
        <div>
          <button class="roomButton button-green" v-on:click="enterRoom">Enter room</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DashBoard',
  components: {},
  methods: {
    async enterRoom() {
      await this.$router.push('/room');
    }
  },
  data() {
    return {}
  },
}
</script>

<style>
div.dashCard {
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  position: sticky;
  left: 200px;
  border: 1px solid blue;
  border-radius: 10px;
  /*margin: 10px;*/
  padding: 10px;
}

.roomButton {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 44px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
}

.button-green {
  background-color: #4CAF50;
}
</style>
