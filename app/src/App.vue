<template>
  <div class="container">
    <h1 :class="titleClass">Nintendo Game System Store</h1>

    <div class="items-container">
      <div class="item" v-for="item in items" :key="item.name">
        <h3>{{ item.name }}</h3>
        <p> Year: {{ item.year }} </p>
        <p>Price: ${{ item.price }} </p>
        
        <button class = "button">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { items } from "../items.js"; 

const titleClass = ref("title");
</script>

<style scoped>
.button {
  margin: auto;
}


.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}


.items-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  width: 100rem;
  
}


.item {
  color: white;
  text-align: center;
  width: 20rem;
  background-color: rgb(66, 66, 66);
  margin: 2rem;
  border-radius: 0.75rem;
  
}

.title {
  color: white;
  text-align: center;
}
</style>


