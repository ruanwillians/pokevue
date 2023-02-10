<template>
  <div class="container">
    <div id="logo">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt=""
      />
    </div>

    <Search-form />
      <div class="cards">
        <PokeCard />
      </div>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm";
import PokeCard from "./components/PokeCard.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    PokeCard,
  },

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  color: #2c3e50;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo{
  display: flex;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#logo img {
  margin: 4em;
  width: 40em;
}

@media (max-width: 600px) {
  #logo img {
  width: 17em;
}
}
</style>
