<template lang="">
    <header class="header">
      <router-link :to="{name: 'main'}">
        <div class="logo">
        <div class="logo__img">
          <img src="../assets/img/logo.svg" alt="logo">
        </div>
        <div class="logo__info">
          <div class="logo__title">
            <h1>VUE SNEAKERS</h1>
          </div>
          <div class="logo__subtitle">
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </div>
      </router-link>
      <div class="menu">
        <ul class="menu__list">
          <li class="menu__cart menu__item" @click="toggleSideCart(true)">
            <img src="../assets/img/cart.svg" alt="cart">
            <p>{{orderTotalAmount}} руб.</p>
          </li>
          <router-link :to="{name: 'favorites'}">
            <li class="menu__favorites menu__item">
              <img src="../assets/img/favorite.svg" alt="like">
              <p>Закладки</p>
            </li>
          </router-link>
          <router-link :to="{name: 'profile'}">
            <li class="menu__profile menu__item">
              <img src="../assets/img/profile.svg" alt="profile">
              <p>Профиль</p>
            </li>
          </router-link>
        </ul>
      </div>
    </header>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations("sneakers", ["setIsShowSideCart"]),
      toggleSideCart(type) {
        this.setIsShowSideCart(type);
      },
  }, 
  computed: {
    ...mapGetters("sneakers", {
        orderTotalAmount: 'orderTotalAmount'
    })
  } 
}
</script>
<style>

.header{
  padding: 45px 60px 45px 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid #EAEAEA 1px;
  margin-bottom: 30px;
}

.logo{
  display: flex;
  gap: 15px;
  cursor: pointer;
}

.logo__title h1{
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.logo__subtitle p{
  color: #9D9D9D;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.menu{
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu__list{
  display: flex;
  gap: 32px;
}

.menu__item {
  cursor: pointer;
  display: flex;
  gap: 8px;
}

.menu__item p{
  color: #5C5C5C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
    
</style>