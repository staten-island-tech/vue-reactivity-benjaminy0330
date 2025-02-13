<template>
  <div class = "container">
    <div class="item" v-for="item in items" :key="item.name">
      <h3>{{ item.name }}</h3>
      <p>Year: {{ item.year }}</p>
      <p>Price: ${{ item.price }}</p>
      <img :src="item.image" alt="">

      
    </div>
  </div>
</template>

<script setup>
import { items } from '../../items';
</script>

<style scoped>

.item{
  background-color: rgb(56, 49, 49);
  color: white;
}
</style>
