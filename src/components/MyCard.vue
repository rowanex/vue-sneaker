<template lang="">
          <div class="card">
            <div class="card__like" @click="addItemToFavorite">
              <img :src="isAddedToFavorite ? require(`../assets/img/like-active.svg`) : require(`../assets/img/like-inactive.svg`)" alt="Add to card">
            </div>
            <img class="card__img" :src="require(`../assets${sneaker.imageUrl}`)" alt="sneaker image">
            <div class="card__title">
              <p>{{sneaker.title}}</p>
            </div>
            <div class="card__low">
              <div class="card__price">
                <div class="price__title">
                  Цена
                </div>
                <div class="price__value">
                  {{sneaker.price}} руб.
                </div>
              </div>
              <div class="card__buy" @click="addItemToCart">
                <img :src="isAddedToCart ? require(`../assets/img/add-to-card-active.svg`) : require(`../assets/img/add-to-card-inactive.svg`) " alt="buy">
              </div>
            </div>
          </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    props: {
        sneaker: {
            type: Object,
            required: true,
        },
        cartSneakers: {
          type: Array,
          required: true,
        },
        favorites: {
          type: Array,
          required: true,
        }
    },
    data() {
      return {
        isAddedToCart: false,
        isAddedToFavorite: false
      }
    },
    methods: {
      ...mapActions("sneakers", [
        'addToCart',
        'deleteFromCartFromCatalog',
        'addToFavorite',
        'deleteFromFavorites',
      ]),
      addItemToCart() {
        if (!this.isAddedToCart) {
          this.addToCart(this.sneaker);
          this.isAddedToCart = true;
        } else {
          this.deleteFromCartFromCatalog(this.sneaker)
        }
      },
      addItemToFavorite(){
        if (!this.isAddedToFavorite) {
          this.addToFavorite(this.sneaker);
          this.isAddedToFavorite = true;
        } else {
          this.deleteFromFavorites(this.sneaker)
        }
      },
      getDataAboutSneaker() {
        this.isAddedToCart = this.cartSneakers.some(item => item.itemId === this.sneaker.itemId);
        this.isAddedToFavorite = this.favorites.some(item => item.itemId === this.sneaker.itemId)
      }
    },
    mounted() {
      this.getDataAboutSneaker()
    },
    watch: {
      favorites: {
        handler(newFavorites) {
          const isInFavorites = newFavorites.some(item => item.itemId === this.sneaker.itemId);
          this.isAddedToFavorite = isInFavorites;
        }
      },
      cartSneakers: {
        handler(newCartSneakers) {
        const isInCart = newCartSneakers.some(item => item.itemId === this.sneaker.itemId);
        this.isAddedToCart = isInCart;
      },
    },
  }
}
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  border: 1px solid #F3F3F3;
  background: #FFF;
  padding: 20px 30px 35px 30px;
  max-width: 210px;
  align-items: center;
  justify-content: center;
  gap:15px;
}

.card__like {
  margin-right: auto;
}

.card__img{
  width: 133px;
  height: 112px;
}

.card__title {
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 150px;
}

.card__low {
  display: flex;
  width: 150px;
  justify-content: space-between;
}

.card__buy{
    cursor: pointer;
}

.card__like {
    cursor: pointer;
}
    
</style>