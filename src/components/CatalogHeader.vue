<template lang="">
  <div class="catalog-header">
      <div class="title">Все кроссовки</div>
      <div class="search">
          <img src="../assets/img/search.svg" alt="search">
          <input v-model="searchQuery" @input="searchSneakers" placeholder="Поиск..." type="text" name="search">
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    searchSneakers() {
      this.$store.commit('sneakers/setSearchQuery', this.searchQuery);
    },
  },
}

</script>
<style scoped>
.catalog-header {
display: flex;
justify-content: space-between;
margin-bottom: 40px;
}

.title {
color: #000;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

.search {
border: 1px solid #f2f2f2;
border-radius: 10px;
display: flex;
gap: 14px;
align-items: center;
width: 250px;
padding-top: 15px;
padding-left: 15px;
padding-bottom: 15px;
}

.search input {
border: 0;
font-size: 16px;
width: 80%;
height: 150%;
}
</style>
