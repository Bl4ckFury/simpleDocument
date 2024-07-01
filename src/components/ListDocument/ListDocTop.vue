<script setup>
import PopupCreateDoc from '../UI/PopupCreateDoc.vue';
import {
    ref
} from 'vue';
const isShowModal = ref(false);

</script>

<template>
<div class="create-all">
    <div class="create-top">
        <h2 class="create-top__title">Список документов</h2>
        <PopupCreateDoc 
            :isActive="isShowModal"
            @close-modal="isShowModal=false"
        />
        <button @click="isShowModal=true" class="create-top__btn">Создать документ</button>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.create-all {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .create-top {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;
        margin-bottom: 20px;

        .create-modal {
            top: 50;
            left: 50;
            right: 50;
            bottom: 50;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;

            .close {
                border: none;
                outline: none;
                cursor: pointer;
                background-color: transparent;
            }
        }

        .create-top__title {
            margin-top: 0;
            // margin-bottom: 50px;
            font-size: 26px;
            font-weight: 500;
        }

        .create-top__btn {
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

    .create-bottom {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

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

        .create-bottom__btn {
            color: $white;
            outline: none;
            border: none;
            font-weight: 600;
            cursor: pointer;
            background-color: $main;
            border-bottom: 1px solid $main;
            border-right: 1px solid $main;
            padding: 8px 16px;
            font-size: 14 px;
            height: 60px;
            width: 300px;
        }

        .create-bottom__first {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
        }
    }
}
</style>
