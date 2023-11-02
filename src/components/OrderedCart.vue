<template lang="">
    <div class="cart-ordered">
        <div class="content-order">
            <div class="content__img">
                <img src="../assets/img/finish-order.png" alt="empty-box">
            </div>
            <div class="content__title">
                <p>Заказ оформлен!</p>
            </div>
            <div class="content__subtitle">
                <p>Ваш заказ №{{orderId}} скоро будет передан курьерской доставке</p>
            </div>
        </div>
        <div class="back-btn">
            <button @click="toggleSideCart(false)">Вернуться назад</button>
        </div>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex';
export default {
    methods: {
        ...mapMutations("sneakers", [
            "setIsShowSideCart",
            "setIsFinishedOrder",
        ]),
        toggleSideCart(type) {
            this.setIsShowSideCart(type);
            this.setIsFinishedOrder(false);
        },
    },
    computed: {
        ...mapState("sneakers", {
            orderId: (state) => state.orderId,
            isFinishedOrder: (state) => state.isFinishedOrder
        })
    }
}
</script>
<style>

    .cart-ordered{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .content-order{
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    .content__img{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }

    .content__img img{
        max-width: 85px;
        max-height: 120px;
    }

    .content__title{
        text-align: center;
        margin-bottom: 10px;
    }

    .content__title p{
        color: #87C20A;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
    .content__subtitle{
        text-align: center;
        max-width: 285px;
    }

    .content__subtitle p{
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */   
        opacity: 0.4;
    }

    .back-btn button{
        cursor: pointer;
        border-radius: 18px;
        background: #9DD458;
        text-align: center;
        color: #FFF;
        border: none;
        width: 245px;
        height: 55px;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    
</style>