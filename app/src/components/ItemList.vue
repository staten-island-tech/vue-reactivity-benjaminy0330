<template>
  <div class = "container">
    <div class="item" v-for="item in items" :key="item.name">
      <h3>{{ item.name }}</h3>
      <p>Year: {{ item.year }}</p>
      <p>Price: ${{ item.price }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { items } from '../../items';
</script>

<style scoped>
.container{
color: rgb(255, 255, 255);
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding-bottom: 2rem;
}

.item{
text-align: center;
width: 20rem;
background-color: rgb(34, 32, 32);

}
</style>
