<template lang="">
    <div class="empty-orders">
        <div class="empty-orders__title">У вас нет заказов</div>
        <div class="empty-orders__subtitle">Оформите хотя бы 1 заказ и он будет отображаться здесь</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .empty-orders{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 100%;
    }
    .empty-orders__title{
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .empty-orders__subtitle{
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        opacity: 0.4;
    }
</style>