<template>
  <div class = "header">
<h1 :class = "titleClass">Technology Store</h1>
<h2 >Search through grocery store items and add them to your cart</h2>
  </div>

  <div :cardsClass>
    <itemCard
    v-for = "techItem in techItems"
    :key = "techItems.name"
    :techItem = "techItem"
    />
  </div>

</template>

<script setup>
/*
import {techItems} from `../items.js`;

const message = ref(`cool kid`)


console.log(message.value)
message.value = 'The message has been successfully changed'

*/
</script>

<style scoped> 
.title{
  color: rgb(255, 0, 0);
  text-align: center;
}
</style>


