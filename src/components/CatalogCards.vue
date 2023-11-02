<template lang="">
    <div class="catalog-cards">
      <my-card 
        v-for="sneaker in sneakers" 
        :sneaker="sneaker" 
        :key="sneaker.id" 
        :cartSneakers="cartSneakers"
        :favorites="favorites"
      />
    </div>
</template>
<script>
import MyCard from '@/components/MyCard.vue'
export default {
    components: {
        MyCard,
    },
    props: {
      sneakers: {
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
<style >
.catalog-cards{
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
</style>