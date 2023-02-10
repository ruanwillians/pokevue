<template>
    <div class="container">
      <div class="infos">
        <li v-for="data in pokemon" :key="data.name" >
          <div class="card animate__animated animate__backInUp">
            <img :src="data.sprites.front_default"/>
            <h1>Name: <span>{{data.name}}</span></h1>
            <button class="pokeapi-button" @click="redirect"> Voltar para busca</button>
          </div>
          <div class="cardInfo animate__animated animate__fadeInRightBig">
            <h3>Habilidades:</h3>
            <ul id="hability">
              <li v-for="hability in pokemon[0].abilities" :key="hability.name" class="infoItem" >
              <p>{{hability.ability.name}}</p>
              </li>
            </ul>
            <h3>Atributos:</h3>
            <ul  id="atributes">
              <li v-for="attributes in pokemon[0].stats" :key="attributes" class="infoItem attributes">
              <h3>{{ attributes.base_stat }}</h3>
              <span>{{attributes.stat.name}}</span>
              </li>
            </ul>
            <h3>Mais informações</h3>
            <ul>
              <li v-for="info in pokemon[0].types" :key="info" class="infoItem ">
              <p> Type: {{info.type.name}}</p>
              </li>
              <li class="infoItem ">
              <p> Height: {{ pokemon[0].height }}</p>
              </li>
              <li class="infoItem ">
              <p> Id: {{ pokemon[0].id }}</p>
              </li>
            </ul>
          </div>

        </li>
      </div>
    </div>
  </template>
  
  <script>
  import {PokeStore} from '../store/PokeStore'
  import 'animate.css/animate.min.css'
  export default{
    setup(){
      const store = PokeStore()
      const pokemon = store.getPokemon
      return {store, pokemon}
    },
  
    mounted(){
      const param = this.$route.params.name
      this.store.deletePoke()
      this.store.setPokeName(param)    },
    
    methods: {
      redirect(){
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style>

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0; 
  }
 
  li{
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
      font-size: 40px;
    }
  
  .infoItem {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: rgb(84, 135, 192);
    font-weight: bold;
    border-radius: 18px;
    min-width: 10em;
    margin: .5em 1em 1.5em 1em;
  }

  .infoItem.hability{
    width: 18em;
  }

  .cardInfo {
    width: 70%;
  }

    .cardInfo h3 {
      font-size: 60px;
      color: aliceblue;
    }

  .infoItem span {
    font-size: 20px;
    color: aliceblue;
  }

  .infoItem p {
    font-size: 30px;
    color: aliceblue;
  }

  .card {
    margin-bottom: 2em;
  }
  .card h3, h2, h1{
    margin-top: .5em;
    margin-bottom: .3em;
    color: #070707;
    font-size: 50px;
  }

  .card h2 {
    margin-top: 0;
  }
  
  .card p {
    font-size: 25px;
    margin: 0;
    color: aliceblue;
    padding: .2em;
  }
  
  @media (max-width: 900px) {
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
    }

    #hability {
      flex-direction: row;
    }

    ul {
      display: flex;
    }

    .card {
      height: 300px;
    }


    .carinfo {
      width: 90%;
    }

    .card h3, h2, h1{
      font-size: 21px;
      margin-top: .5em;
    }

    .cardInfo h3 {
      font-size: 35px;
      color: aliceblue;
    }

    .card p {
      font-size: 13px;
    }

    .infoItem p {
    font-size: 15px;
    color: aliceblue;
  }

    .card button {
      width: 10em;
      margin-top: .5em;
      font-size: 22px;
    }

    .infoItem {
    border-radius: 10px;
    width: 8em;
    margin: .3em;
  }

  }
  </style>
  