<template>
  <div class="container">
    <div class="infos">
      <div class="cardInfo animate__animated animate__fadeInRightBig">
        <h3>Habilidades:</h3>
        <ul id="hability">
          <li
            v-for="hability in pokemon[0].abilities"
            :key="hability.name"
            class="infoItem"
          >
            <p>{{ hability.ability.name }}</p>
          </li>
        </ul>
        <h3>Atributos:</h3>
        <ul>
          <li
            v-for="attributes in pokemon[0].stats"
            :key="attributes"
            class="attributes"
          >
            <h3>{{ attributes.base_stat }}</h3>
            <span>{{ attributes.stat.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { PokeStore } from "../store/PokeStore";
import "animate.css/animate.min.css";
export default {
  setup() {
    const store = PokeStore();
    const pokemon = store.getPokemon;
    return { store, pokemon };
  },

  mounted() {
    const param = this.$route.params.name;
    this.store.deletePoke();
    this.store.setPokeName(param);
  },

  methods: {
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>
  
  <style>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0;
  min-width: 100vw;
}

li {
  padding: 10px;
    margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
}

ul {
  margin: 0;
}

.card button {
  margin-top: 0;
  font-size: 20px;
}

.infoItem {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(84, 135, 192);
  font-weight: bold;
  border-radius: 18px;
  min-width: 10em;
  margin: 0.5em 1em 1.5em 1em;
}

.attributes {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(84, 135, 192);
  font-weight: bold;
  border-radius: 18px;
  width: 8em;
  margin: 0.5em 1.2em 1.5em 1.2em;
}

.attributes span {
  color: aliceblue;
}

.cardInfo {
  width: 80%;
}

.cardInfo h3 {
  font-size: 28px;
  color: aliceblue;
  margin-top: 0.2em;
}

.infoItem span {
  font-size: 13px;
  color: aliceblue;
}

.infoItem p {
  font-size: 18px;
  color: aliceblue;
}

.card {
  margin-bottom: 2em;
  height: 350px;
}

.card h3,
h2,
h1 {
  margin-top: 0.5em;
  margin-bottom: 0.3em;
  color: #070707;
  font-size: 30px;
}

.card h2 {
  margin-top: 0;
}

.card p {
  font-size: 25px;
  margin: 0;
  color: aliceblue;
  padding: 0.2em;
}

.infos {
  justify-content: center;
}

@media (max-width: 900px) {
  .infos {
    display: flex;
    justify-content: center;
  }

  .attributes {
    width: 4.5em;
  }

  .attributes span {
    font-size: 12px;
  }

  ul {
    display: flex;
    flex-direction: row;
  
  }
}
</style>
  