<template lang="">
    <div class="cart-empty">
        <div class="content">
            <div class="content__img">
                <img src="../assets/img/empty-box.png" alt="empty-box">
            </div>
            <div class="content__title">
                <p>Корзина пустая</p>
            </div>
            <div class="content__subtitle">
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            </div>
        </div>
        <div class="back-btn">
            <button @click="toggleSideCart(false)">Вернуться назад</button>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    methods: {
        ...mapMutations("sneakers", ["setIsShowSideCart"]),
        toggleSideCart(type) {
            this.setIsShowSideCart(type);
        },
    }
}
</script>
<style scoped>
    .cart-empty{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .content{
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    .content__img{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    .content__title{
        text-align: center;
        margin-bottom: 10px;
    }

    .content__title p{
        color: #000;
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
        line-height: 24px;
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