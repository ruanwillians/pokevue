<template>
  <div>
    <div class="addTask">
    <input type="text" placeholder="Pesquise um pokemon" v-model="name"/>
    <button class="btn" @click="submit"><i id="icone" class="fas fa-search"></i></button>
  </div>
  <div>
    <p v-if="error.length > 0">{{ error[0] }}</p>
  </div>
  </div>
  
</template>

<script>
import {PokeStore} from '../store/PokeStore'

export default {
  setup(){
    const store = PokeStore()
    const error = store.getError
    return {store, error}
  },
  data(){
    return {
      name: ''
    }
  },
  methods: {
    submit(){
      this.store.deleteError()
      this.store.setInput(this.name.toLowerCase())
      this.store.deletePoke()
      this.store.setPoke()
    }
  },

}
</script>

<style>
.addTask{
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
.addTask input {
  width: 600px;
  height: 40px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 1px solid #fff;
  padding: .2em;
  font-size: 20px;
}

.addTask .btn{
  width: inherit;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px solid #fff;
  width: 8em;
  background-color: rgb(84, 135, 192);
  color: #fff;
  cursor: pointer;
};

.addTask .btn i {
  width: 150px;
  height: 150px;
}

#icone{
  font-size: 20px;
}

h1 {
  color: #fff;
}

p {
  color: rgb(255, 0, 0);
  font-size: 15px;
}

@media (max-width: 900px) {
  .addTask .btn{
    height: 40px;
    width: 3em;
  }

  .addTask input {
    height: 40px;
    font-size: 18px;
    width: 250px;
  }

  p {
  font-size: 15px;
}


  #icone{
  font-size: 20px;
}
}
</style>