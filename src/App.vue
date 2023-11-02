<template>
  <div class="wrapper">
    <my-header/>
    <cart-drawer/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import CartDrawer from "@/components/CartDrawer.vue";

export default {
  components: {
    MyHeader,
    CartDrawer,
  },
  mounted() {
      this.$store.dispatch("sneakers/getPurchasedSneakers"); 
      this.$store.dispatch("sneakers/getSellingSneakers");
      this.$store.dispatch("sneakers/getOrderedSneakers"); 
      this.$store.dispatch("sneakers/getFavoritesSneakers");
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  @import url(@/assets/styles/nullStyle.css);
  
  .wrapper {
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
    max-width: 1080px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

</style>
