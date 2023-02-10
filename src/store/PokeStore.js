import axios from "axios"
import baseURL from "@/config/api"
import {defineStore} from 'pinia'

export const PokeStore = defineStore('pokeInfos', {
    state: () => (
        {
            InputName: '',
            pokemon: [],
            evolutions: [],
            error: []
        }
    ),
    getters: {
        getPokemon: (state) => state.pokemon,
        getEvolutions: (state) => state.evolutions,
        getError: (state) => state.error,
    },
    actions: {
        setInput(name){
            this.InputName = name
            
        },
        deletePoke(){
            this.pokemon.splice(0, 1)
            this.evolutions.splice(0,1)
        },
        deleteError(){
          this.error.splice(0,1)
        },
        async setPoke() {
            axios
            .get(`${baseURL}pokemon/${this.InputName}`)
            .then((response) => {
              this.pokemon.push(response.data);
              return axios.get(response.data.species.url);
            })
            .then(response => {
              const evolutionChainUrl = response.data.evolution_chain.url;
              return axios.get(evolutionChainUrl);
            })
            .then(response => {
              const evolutionsName = response.data.chain.evolves_to[0].species.name
              return axios.get(`https://pokeapi.co/api/v2/pokemon/${evolutionsName}`)
            })
            .then((response) => {
              this.evolutions.push(response.data)
              console.log(this.evolutions)
            })
            .catch((err) => {
              return this.error.push(err) 
            });
        },
        async setPokeName(name){
          axios
            .get(`${baseURL}pokemon/${name}`)
            .then((response) => {
              this.pokemon.push(response.data)
            })
            .catch((err) => {
              return this.error.push(err) 
            })
        }
    },
})