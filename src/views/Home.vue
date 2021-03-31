<template>
  <div class="container">
    <header class="jumbotron-home">
      <h3>{{content}}</h3>
    </header>
    <img
        id="home-img"
        src="https://svgsilh.com/svg/1295953-009688.svg"
        class="home-img-card"
        alt=""/>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
        response => {
          this.content = response.data;
        },
        error => {
          this.content =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString();
        }
    );
  }
};
</script>

<style>
.home-img-card {
  width: 1000px;
  height: 500px;
  margin: 0 0;

}
.jumbotron-home {
  padding:2rem 1rem;
  margin-bottom:2rem;
  max-width: 1000px;
  background-color: darkgray;
  border-radius:.3rem;
  font-size: 30px;
}
</style>