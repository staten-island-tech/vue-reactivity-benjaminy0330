<template>
  <div class = "header">
<h1 :titleClass>Technology Store</h1>
<h2 >Search through grocery store items and add them to your cart</h2>
  </div>

  <div :cardsClass = "cards">

  </div>

<div :cartClass>
  <h2>Total price: </h2>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'

//import { techItems } from '../items';


const message = ref('asdas')


console.log(message.value)
message.value = 'Changed'


</script>

<style scoped> 
.title{
  color: rgb(255, 0, 0);
}
</style>


