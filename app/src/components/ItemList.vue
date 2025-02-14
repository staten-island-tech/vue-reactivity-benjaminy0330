<template>
  <div class = "container">
    <div class="item" v-for="item in items" :key="item.name">
      <h3>{{ item.name }}</h3>
      <p>Year: {{ item.year }}</p>
      <p>Price: ${{ item.price }}</p>
      <img :src="item.image" alt="">
      <button >Add to cart</button>

      
    </div>
  </div>
</template>

<script setup>
import { items } from '../../items';
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.item{
  background-color: rgb(56, 49, 49);
  color: white;
  text-align: center;
  border-radius: 2rem;
  padding-bottom: 1rem;
  width: 30rem;
 
}
</style>
