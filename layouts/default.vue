<template>
  <div class="page">
    <MainMenu />
    <nuxt />
    <Snackbar />
  </div>
</template>

<script>
import MainMenu from './../components/MainMenu.vue';
import Snackbar from './../components/Snackbar';

export default {
  components: {
    MainMenu,
    Snackbar
  }
};
</script>

<style>
body,
html {
  font-family: sans-serif;
  color: #666;
  margin: 0;
}

a {
  transition: 0.2s all ease;
  text-decoration: none;
  color: #e6534b;
}

a:hover {
  color: #fc7c5f;
}

.page {
  height: 100vh;
}

.flexrow {
  padding-top: 80px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
h1,
h2,
h3 {
  color: #000;
}
.special,
h1,
h2,
h3,
li,
button.submit,
.quant-text {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
}

h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
}

li {
  list-style: none;
}

input {
  background: #eee;
}

button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
}
.btn-inc {
  background: white;
  color: black;
}
.btn {
  background: black;
  color: white;

  padding: 12px 14px;
  width: 240px;
  -webkit-transition: 0.25s all ease-in;
  transition: 0.25s all ease-in;
}
.btn:hover {
  opacity: 0.8;
  -webkit-transition: 0.25s all ease-out;
  transition: 0.25s all ease-out;
}

.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 440px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
}
.item img {
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}
</style>
