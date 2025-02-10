<template>
  <div class="container">
    <h1 :class="titleClass">Nintendo Game System Store</h1>

    <div class="items-container">
      <div class="item" v-for="item in items" :key="item.name">
        <h3>{{ item.name }}</h3>
        <p>Year: {{ item.year }}</p>
        <p>Price: ${{ item.price }}</p>
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
  max-width: 70rem;
}


.item {
  width: 50rem;
  color: white;
  
  text-align: center;
  
}

.title {
  color: white;
  text-align: center;
}
</style>


