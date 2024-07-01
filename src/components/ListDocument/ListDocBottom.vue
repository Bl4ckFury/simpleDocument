<script setup>
import { ref } from 'vue';

</script>

<template>
<div class="create-bottom"> 
    <form class="form" @submit.prevent action="">
        <input type="search" class="create-bottom__search" placeholder="Поиск по названию">
        <input type="search" class="create-bottom__search" placeholder="Поиск по автору">
        <input type="search" class="create-bottom__search" placeholder="Поиск по дате">
        <input type="search" class="create-bottom__search" placeholder="Поиск по описанию">
        <select name="status" id="status" class="create-bottom__search">
            <option selected disabled value="">Выберете статус</option>
            <option value="ready">Готов</option>
            <option value="rejected">Отклонен</option>
            <option value="progress">В процессе</option>
            <option value="wait">Ожидает подтверждения</option>
        </select>
        <button class="create-bottom__btn">Применить фильтр</button>
    </form>
</div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.create-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        .create-bottom__btn {
            font-size: 18px;
            height: 60px;
            width: 300px;
            color: $white;
            outline: none;
            border: none;
            font-weight: 600;
            cursor: pointer;
            background-color: $main;
            border: 1px solid $main;
            padding: 8px 16px;
            transition: all .2s ease-in-out;
            &:hover {
                color: $main;
                background-color: $white;
            }
        }
    }
    .create-bottom__search {
            margin-bottom: 30px;
            font-weight: 500;
            color: $main;
            border: none;
            width: 300px;
            outline: none;
            margin-left: 0px;
            padding: 8px 16px;
            border-bottom: 1px solid $main;
            background-color: transparent;

            &:focus {
                outline: none;
            }
        }

    .create-bottom__second {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
}
</style>
