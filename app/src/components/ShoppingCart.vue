<template>
    <div class = "cart">
        <h1>Shopping cart</h1>
        <h3>Total Price: ${{ cart.price }}.00</h3>
        <h3># of Items: {{ cart.items }}</h3>
        <button class = "clearall" @click = clearall(cart)>Remove all items</button>
       
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
    border-radius: 1rem;
    padding-bottom: 2rem;
    
    
}

.clearall:hover{
    color:red;
    
}

</style>