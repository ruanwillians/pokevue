<template>
  <div class="about">
      <div class="container">
    <div class="pokecard">
      <poke-card/>
    </div>
    <info-card/>
  </div>
  </div>

</template>

<script>
import InfoCard from '../components/InfoCard.vue'
import PokeCard from '../components/PokeCard.vue'

export default {
  name: "App",
  components: {
    InfoCard,
    PokeCard
  },

};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  min-width: 0vw;
  max-width: 80vw;
}

.about {
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .container {
  display: flex;
  flex-direction: column;
    justify-content: center;

}
  .about {
    max-width: 100vw;
  }
  #imageIntro {
    width: 20em;
    height: 20em;
  }
}



</style>
