<script setup>
import Close from '../icons/Close.vue';

import { ref } from 'vue';

defineProps({
    isActive: Boolean
})

const email = ref('');

const checkEmail = () => {
    if (email.value == '') {
        isActive.value = true;
    } else {
        isActive.value = false;
    }
};
</script>

<template>
<div class="main-wrapper" :class="{ active: isActive }">
    <div class="main-wrapper__bg">
        <span class="error">Заполните поле ввода</span>
        <div class="h3-close">
            <h3 class="main-wrapper__h3">Отправить документ</h3>
            <button @click="$emit('close-modal')" class="create-modal__close">
                <Close />
            </button>
        </div>
        <form class="form" @submit.prevent>
            <p>Документ:</p>
            <div class="label-input">
                <label for="">Введите почту</label>
                <input type="email" v-model="email" class="input">
            </div>
            <input type="button" @click="checkEmail" value="Отправить" class="email">
        </form>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.main-wrapper {
    min-height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.35);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    z-index: 20;

    &.active {
        opacity: 1;
        pointer-events: all;
    }

    .email {
        @include main-btn;
    }

    .input {
        @include main-input;
    }

    .input {
        margin-left: 10px;
    }

    .main-wrapper__bg {
        height: 40vh;
        padding: 10px 50px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background-color: $white;
        border-radius: 10px;
        .h3-close {
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .create-modal__close {
            border: none;
            background: none;
            cursor: pointer;
        }

        .form {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .error {
            color: red;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;
        }
    }

    .main-wrapper__h3 {
        margin-bottom: 30px;
        font-size: 26px;
        font-weight: 500;
    }
}
</style>
