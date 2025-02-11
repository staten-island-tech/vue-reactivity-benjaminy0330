<template>
  <div>
    <div class="item" v-for="item in items" :key="item.name">
      <h3>{{ item.name }}</h3>
      <p>Year: {{ item.year }}</p>
      <p>Price: ${{ item.price }}</p>
      <button class="button">Add to cart</button>
    </div>
  </div>
</template>

<script setup>
import { items } from "../items.js";
</script>

<style scoped>
</style>
