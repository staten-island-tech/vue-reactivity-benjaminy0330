<template>
  <div>
    <TheTitle />
    <ItemList 
    v-for="item in items" 
    :key="item.name" >
    <button>Add to cart</button></ItemList>
    <ShoppingCart />
  </div>
</template>

<script setup>
import ItemList from "./components/ItemList.vue";
import TheTitle from "./components/TheTitle.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<style scoped>
</style>


