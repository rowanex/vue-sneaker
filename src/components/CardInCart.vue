<template lang="">
    <div class="cart-product">
        <div class="cart-product__img">
            <img :src=" require(`../assets${sneaker.imageUrl}`)" alt="sneaker image">
        </div>
        <div class="cart-product__info info">
            <div class="info__title">
                {{sneaker.title}}
            </div>
            <div class="info__price">
                {{sneaker.price}}
            </div>
        </div>
        <div class="cart-product__delete-btb" @click="customDeleteFromCart(sneaker.id, sneaker.price)">
            <img src="../assets/img/delete-from-cart-btn.svg" alt="delete from cart">
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
        }
    },
    methods: {
        ...mapActions('sneakers', ['deleteFromCart']),
        customDeleteFromCart(sneakerId, sneakerPrice) {
            this.deleteFromCart({ sneakerId, sneakerPrice });
        },
    }
}
</script>
<style scoped>

.cart-product{
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    background: #FFF;
    padding: 30px 20px;
}

.cart-product__img img{
    max-width: 70px;
    max-height: 70px;
}

.cart-product__info{
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 150px;
}

.info__title {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Inter;
}

.info__price {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: Inter;
}

.cart-product__delete-btb {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
    
</style>