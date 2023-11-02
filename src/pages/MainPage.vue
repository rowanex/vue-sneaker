<template>
  <main class="main">
    <catalog-header/>
    <catalog-cards v-if="!isSneakersLoading" :sneakers="searchedSneakers" :cartSneakers="cartSneakers" :favorites="favorites" />
    <loading-catalog v-else/>
  </main>
</template>

<script>
import CatalogHeader from "@/components/CatalogHeader.vue";
import CatalogCards from '@/components/CatalogCards.vue'
import LoadingCatalog from "@/components/LoadingCatalog.vue";
import { mapState, mapGetters } from "vuex";

export default {
  components: {
    CatalogCards,
    LoadingCatalog,
    CatalogHeader
  },
  computed: {
    ...mapState("sneakers", {
      isSneakersLoading: (state) => state.isSneakersLoading,
      cartSneakers: (state) => state.cartSneakers,
      favorites: (state) => state.favorites,
    }),
    ...mapGetters("sneakers", {
        searchedSneakers: 'searchedSneakers'
      })
  },
};
</script>

<style scoped>

.main{
  flex: 1 1 auto;
  padding: 0px 60px;
}


</style>
