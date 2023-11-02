<template lang="">
    <main class="main">
        <div class="title">Мои закладки</div>
        <loading-catalog v-if="isFavoritesLoading"/>
        <empty-favorites v-else-if="favorites.length === 0" />
        <catalog-cards :sneakers="favorites" :cartSneakers="cartSneakers" :favorites="favorites"/>
    </main>
</template>
<script>
import LoadingCatalog from "@/components/LoadingCatalog.vue";
import EmptyFavorites from "@/components/EmptyFavorites.vue";
import CatalogCards from "@/components/CatalogCards.vue";
import { mapState } from "vuex";
export default {
    components: {
        LoadingCatalog,
        EmptyFavorites,
        CatalogCards
    },
    computed: {
        ...mapState("sneakers", {
            isFavoritesLoading: (state) => state.isFavoritesLoading,
            cartSneakers: (state) => state.cartSneakers,
            favorites: (state) => state.favorites
        })
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