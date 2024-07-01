<script setup>
import { ref } from 'vue';

const log = ref(true)

</script>

<template>
<div class="list">
    <div class="list-left">
        <router-link class="list-link" to="/">Главная</router-link>
        <router-link class="list-link" to="/list-documet">Список документов</router-link>
        <router-link class="list-link" to="/search-filter">Поиск и фильтрация</router-link>
        <router-link class="list-link" to="/submit-document">Отправка документа</router-link>
        <router-link class="list-link" to="/settings-document">Настройка</router-link>
    </div>
    <div class="list-right">
        <router-link v-if="log" class="last list-link" to="/log-out">Войти</router-link>
        <button v-else class="list-exit">Выйти</button>
    </div>
</div>
</template>

<style lang="scss">
@import "../../assets/styles/main.scss";

.list {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .list-left {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .list-right {
        .list-exit {
            border: none;
            color: $main;
            font-weight: 500;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 8px;
            background-color: $white;
            transition: all .2s ease-in-out;

            &:hover {
                color: $white;
                background-color: $main;
            }
        }

        .last {
            color: $main;
            padding: 8px 16px;
            border-radius: 8px;
            background-color: $white;
            transition: all .2s ease-in-out;

            &:hover {
                color: $white;
                background-color: $main;
            }
        }
    }

    .list-link {
        color: $white;
        font-weight: 500;
        margin-right: 50px;
        text-decoration: none;
        transition: all .2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
