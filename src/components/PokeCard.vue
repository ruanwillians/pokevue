<template>

    <ul >
      <li v-for="data in pokemon" :key="data.name">
        <div class="card">
          <img :src="data.sprites.front_default"/>
          <h3>Name: <span>{{data.name}}</span></h3>
          <button class="pokeapi-button">Ver detalhes</button>
        </div>
      </li>
      <li v-for="data in evolutions" :key="data.name">
        <div class="card">
          <img :src="data.sprites.front_default"/>
          <h3>Name: <span>{{data.name}}</span></h3>
          <button class="pokeapi-button">Ver detalhes</button>
        </div>
      </li>
    </ul>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemon: [],
      evolutions: [],
    };
  },

  mounted() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/poliwag")
      .then((response) => {
        this.pokemon.push(response.data);
        return axios.get(response.data.species.url);
      })
      .then(response => {
        const evolutionChainUrl = response.data.evolution_chain.url;

        return axios.get(evolutionChainUrl);
      })
      .then(response => {
        const evolutionsName = response.data.chain.evolves_to[0].species.name//.map (evolution => {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionsName}`)
      })
      .then((response) => {
        this.evolutions.push(response.data)
        console.log(this.evolutions)
      })
      .catch((err) => {
        return err;
      });
  },
};
</script>

<style>
ul {
display: flex;
flex-wrap: wrap;
justify-content: center;
}

li {
    padding: 10px;
    margin: 10px;
    list-style: none;
}
.card {
  width: 500px;
  height: 580px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
}

.card img {
  width: 100%;
  height: 60%;
  object-fit: cover;
  margin: .5em;
}

.card h3 {
  font-size: 35px;
  color: #333;
}

.card p {
  font-size: 18px;
  color: #333;
  margin-top: 10px;
}

.card p span {
  font-weight: bold;
}

.card button {
  width: 300px;
  height: 100px;
  background-color: rgb(84, 135, 192);
  color: white;
  font-size: 30px;
  font-weight: bold;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  margin-top: 0.9em 
}

.card button:hover {
  opacity: 0.9;
}

.card button:active {
  opacity: 0.7;
}

@media (max-width: 600px) {
  .card {
    width: 220px;
    height: 320px;
  }

  .card img {
    margin: 0;
  }

  .card button {
    width: 125px;
  height: 50px;
  font-size: 15px;
    margin-bottom: .9em;
    border-radius: 8px;
  }

  .card h3 {
    font-size: 23px;
    margin-top: .5em;
  }
}
</style>