<template>
      <div id="logo">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt=""
      />
    </div>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  color: #2c3e50;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  overflow-x: hidden; 
}

#logo img {
  margin: 1.5em;
  width: 18em;
}

@media (max-width: 900px) {

  #app {
    min-height: 100vh;
    min-width: 100vw;
  }

  #logo img {
  width: 15em;
}}
</style>
