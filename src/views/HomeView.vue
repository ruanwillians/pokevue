<template>
  <div class="containerHome">
    <Search-form/>
    <div v-if="pokemon.length == 0">
      <img src="https://www.pngplay.com/wp-content/uploads/10/Pokemon-Transparent-File.png" id="imageIntro"/>
    </div>
      <div class="cards">
        <PokeCard />
      </div>
  </div>
</template>

<script>
import SearchForm from "../components/SearchForm";
import PokeCard from "../components/PokeCard.vue";
import {PokeStore} from '../store/PokeStore'

export default {
  setup(){
    const store = PokeStore()
    const pokemon = store.getPokemon
    return {store, pokemon}
  },
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

#imageIntro {
  margin-top: .5em;
  width: 300px;
  height: 300px;
}


.containerHome {
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

@media (max-width: 900px) {
  #imageIntro {
    width: 20em;
    height: 20em;
  }
}


</style>
