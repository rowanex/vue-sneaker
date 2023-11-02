<template lang="">
    <main class="main">
        <div class="title">Мои покупки</div>
        <loading-catalog v-if="isOrdersLoading" />
        <empty-orders v-else-if="orders.length === 0" />
        <catalog-orders v-else :orders="orders" :cartSneakers="cartSneakers" :favorites="favorites" />
    </main>
</template>
<script>
import CatalogOrders from '@/components/CatalogOrders.vue'
import LoadingCatalog from "@/components/LoadingCatalog.vue";
import EmptyOrders from '@/components/EmptyOrders.vue';
import { mapState } from "vuex";

export default {
    components: {
        CatalogOrders,
        LoadingCatalog,
        EmptyOrders,
    },
    computed: {
        ...mapState("sneakers", {
        isOrdersLoading: (state) => state.isOrdersLoading,
        orders: (state) => state.orders,
        cartSneakers: (state) => state.cartSneakers,
        favorites: (state) => state.favorites,
        }),
    },
}
</script>
<style scoped>

.main {
    flex: 1 1 auto;
    padding: 0px 60px;
}

.title{
    color: #000;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 40px;
}
    
</style>