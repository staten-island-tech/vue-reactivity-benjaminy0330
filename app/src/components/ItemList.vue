<template>
  <div class = "container">
    <div class="item" v-for="item in items" :key="item.name">
      <h3>{{ item.name }}</h3>
      <img class = "img" :src="item.image" alt="">
      <p>Year: {{ item.year }}</p>
      <p>Price: ${{ item.price }}</p>
      
      <button @click="addtoCart(item)" :id ="item.name">Add to cart</button>

      
    </div>
  </div>
</template>

<script setup>
import { items } from '../items';
import { cart } from '../cart';



function addtoCart(item) {
  cart.items ++
  cart.price += item.price

}


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

.img{
  width: 26rem;
}
</style>
