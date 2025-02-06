<template>
  <div class = "header">
<h1 :class = "titleClass">Technology Store</h1>
<h2 >Search through grocery store items and add them to your cart</h2>
  </div>

  <div :cardsClass>

  </div>

<div :cartClass>
  <h2>Total price: </h2>
</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const titleClass = ref('title')

import { techItems } from '../items';

/*items.forEach((techItems)) => {
  const html = `
  <div :cardClass> 
    <h2> ${techItems.name} <h2/>
  `;
insert into div :cartClass
}*/

const message = ref('schol')


console.log(message.value)
message.value = 'The message has been successfully changed'


</script>

<style scoped> 
.title{
  color: rgb(255, 0, 0);
  text-align: center;
}
</style>


