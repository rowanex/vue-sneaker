<template lang="">
    <div class="overlay" v-if="isShowSideCart" @click.stop="toggleSideCart(false)">
        <div @click.stop class="drawer">
            <div class="drawer__title">
                <h3>Корзина</h3>
            </div>
            <div class="drawer__content">
                <div class="drawer__products" v-if="this.cartSneakers.length !== 0">
                    <card-in-cart
                     v-for="cartSneaker in cartSneakers" 
                     :sneaker="cartSneaker" 
                     :key="cartSneaker.id" 
                    />
                </div>
                <div class="drawer__order" v-else-if="isFinishedOrder">
                    <ordered-cart/>
                </div>
                <div class="drawer__empty" v-else>
                    <empty-cart/>
                </div>
            </div>
            <div class="drawer__bottom">
                    <div class="drawer__info">
                        <div class="drawer__result">
                            <div class="result__title">Итого:</div>
                            <div class="result__value">{{this.orderTotalAmount}} руб.</div>
                        </div>
                        <div class="drawer__tax">
                            <div class="tax__title">Налог 20%:</div>
                            <div class="tax__value">{{this.taxValue}} руб.</div>
                        </div>
                    </div>
                    <div class="drawer__buy">
                        <button @click="makeAnOrder(cartSneakers)" class="buy-button">Оформить заказ</button>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import CardInCart from './CardInCart.vue';
import EmptyCart from './EmptyCart.vue';
import OrderedCart from './OrderedCart.vue';
import { mapState, mapMutations, mapActions, mapGetters} from 'vuex';
export default {
    components: {
        CardInCart,
        EmptyCart,
        OrderedCart
    },
    methods: {
        ...mapMutations("sneakers", ["setIsShowSideCart"]),
        toggleSideCart(type) {
            this.setIsShowSideCart(type);
        },
        ...mapActions("sneakers", ["makeAnOrder"]),

    },
    computed: {
        ...mapState("sneakers", {
            cartSneakers: (state) => state.cartSneakers,
            isShowSideCart: (state) => state.isShowSideCart,
            isFinishedOrder: (state) => state.isFinishedOrder,
        }),
        ...mapGetters("sneakers", {
            orderTotalAmount: 'orderTotalAmount'
        }),
        taxValue() {
            return (this.orderTotalAmount / 100 * 20).toFixed(2);
        },
    },
}
</script>
<style scoped>
.overlay{
    left: 0;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;    
}

.drawer{
    position: absolute;
    height: 100%;
    right: 0;
    background: #ffffff;
    box-shadow: 10px 0px 0px rgba(0,0,0, 0.1);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
}

.drawer__title{
    margin-bottom: 30px;
}

.drawer__content{
    display: flex;
    flex-direction: column;
    max-height: 65%;
}


.drawer__title h3{
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    font-family: Inter;
}

.drawer__products{
    display: flex;
    flex-direction: column;
    gap:20px;
    overflow: auto;

}

.cart-product{
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    background: #FFF;
    padding: 30px 20px;
}

.product__img img{
    max-width: 70px;
    max-height: 70px;
}

.product__info{
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

.product__delete-btb {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.drawer__bottom {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    gap:25px;
}

.drawer__info{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.drawer__result{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.result__title{
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Inter;
}


.result__value {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Inter;
}

.tax__title{
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-family: Inter;
}

.tax__value {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Inter;
}

.drawer__tax{
    display: flex;
    justify-content: space-between;
}

.drawer__buy{
    margin-left: auto;
    margin-right: auto;
}

.buy-button{
    border-radius: 18px;
    background: #9DD458;
    width: 325px;
    height: 55px;
    color: #FFF;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 0px;
    cursor: pointer;
    font-family: Inter;

}
    
</style>