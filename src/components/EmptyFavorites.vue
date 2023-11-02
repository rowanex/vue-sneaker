<template lang="">
    <div class="empty-favorites">
        <div class="empty-favorites__title">
            В закладках ничего нет
        </div>
        <div class="empty-favorites__subtitle">
            Вы ничего не добавляли в закладки
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .empty-favorites{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 100%;
    }
    .empty-favorites__title{
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .empty-favorites__subtitle{
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        opacity: 0.4;
    }
</style>