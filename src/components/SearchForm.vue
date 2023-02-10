<template>
   <div class="addTask">
    <input type="text" placeholder="Pesquise um pokemon" v-model="name"/>
    <button class="btn" @click="add"><i class="fas fa-search"></i></button>
  </div>
</template>

<script>7

export default {

}
</script>

<style>
.addTask{
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
.addTask input {
  width: 40%;
  height: 90px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 1px solid #fff;
  padding: .2em;
  font-size: 30px;
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

@media (max-width: 600px) {
  .addTask .btn{
    height: 40px;
    width: 3em;
  }

  .addTask input {
    height: 40px;
    font-size: 18px;
    width: 250px;
  }
}
</style>