<template>
  <div class="containerHome">
    <ul>
      <li v-for="data in pokemon" :key="data.name" class="animate__animated animate__flipInY">
        <div class="card">
          <img :src="data.sprites.front_default"/>
          <h1>Name: <span>{{data.name}}</span></h1>
          <button v-if="$route.path === '/'" class="pokeapi-button" @click="redirect(data.name)"> Ver detalhes</button>
          <button v-else class="pokeapi-button" @click="redirect(data.name)"> Voltar</button>
        </div>
      </li>
      <li v-for="data in evolutions" :key="data.name" class="animate__animated animate__flipInY" >
        <div class="card">
          <img :src="data.sprites.front_default"/>
          <h1>Name: <span>{{data.name}}</span></h1>
          <button class="pokeapi-button" @click="redirect(data.name)"> Ver detalhes</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import {PokeStore} from '../store/PokeStore'
import 'animate.css/animate.min.css'

export default {

  setup(){
    const store = PokeStore()
    const pokemon = store.getPokemon
    const evolutions = store.getEvolutions
    return {store, pokemon, evolutions}
  },

  methods: {

    redirect(name){
      if(this.$route.path === '/'){
        this.$router.push({path:`/${name}`})
      } else {
        this.$router.push({path:`/`})
      }
      
    }
  }

};
</script>

<style>
.containerHome {
  display: flex;
  justify-content: center;
}
ul {
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0;
padding: 0;
}

li {
    list-style: none;
    --animate-duration: 0.8s;

}

.card {
  width: 280px;
  height: 370px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
}

.card img {
  width: 100%;
  height: 60%;
  object-fit: cover;
  margin: .5em;
}

.card h1 {
  font-size: 25px;
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
  width: 100%;
  height: 100%;
  background-color: rgb(84, 135, 192);
  color: white;
  font-size: 20px;
  font-weight: bold;
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

@media (max-width: 900px) {

  
  .card {
    width: 220px;
    height: 300px;
  }

  .card img {
    margin: 0;
  }

  .card h3 {
    font-size: 20px;
    margin-top: .5em;
  }
}
</style>