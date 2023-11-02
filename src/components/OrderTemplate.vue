<template lang="">
    <div :class="'order order-' + order.id">
        <div class="order__title">Покупка №{{order.id}}</div>
        <catalog-cards :sneakers="order.items" :cartSneakers="cartSneakers" :favorites="favorites"/>
    </div>
</template>
<script>
import CatalogCards from '@/components/CatalogCards.vue'
export default {
    components: {
        CatalogCards,
    },
    props: {
        order: {
            type: Object,
            reqiured: true
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
<style scoped>

.order{
    margin-bottom: 40px;
}

.order__title{
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
}
    
</style>