<template>
    <div class = "cart">
        <h1>Shopping cart</h1>
        <h2>Total Price: ${{ cart.price }}.00</h2>
        <h2># of Items: {{ cart.items }}</h2>
        <button @click = clearall(cart)>Clear all</button>
       
 </div>
</template>

<script setup>
import { items } from '../items';
import { ref } from 'vue';
import ItemList from './ItemList.vue';
import { cart } from '@/cart';

function clearall(cart)  {
    cart.price -= cart.price
    cart.items -= cart.items
}
</script>


<style scoped>
.cart{
    background-color: rgb(44, 40, 40);
    color: white;
    text-align: center;
}

</style>