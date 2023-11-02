<template lang="">
    <div class="orders-list">  
        <order-template
         v-for="order in orders" 
         :order="order" 
         :key="order.id"
         :cartSneakers="cartSneakers"
         :favorites="favorites"
        >
        </order-template>
    </div>
</template>
<script>
import OrderTemplate from './OrderTemplate.vue';
export default {
    components: {
        OrderTemplate,
    },
    props: {
      orders: {
        type: Array, 
        required: true
      },
      cartSneakers: {
        type: Array,
        required: true
      },
      favorites: {
        type: Array,
        required: true
      }
    }
}
</script>
<style lang="">
    
</style>