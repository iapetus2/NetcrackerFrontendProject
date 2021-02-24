<template>
    <div id="app">
      <div id="nav">
        <router-view />
        <router-link to="/room">Room</router-link>  |
        <router-link to="/">Start</router-link>
        </div>
    </div>
</template>
<script>

export default {
  name: 'app',

  data() {
    return {
      msg: 'Welcome'
    };
  },
}
</script>