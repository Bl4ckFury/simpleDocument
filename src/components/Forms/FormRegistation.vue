<script setup>
import PopupGoodRef from "../UI/PopupGoodReg.vue";
import {
    ref
} from 'vue';

const login = ref('')
const password = ref('')
const repPassword = ref('')
const realy = ref(false)

const checkForm = () => {
    if (login.value == '' || password.value == '' || repPassword.value == '') {
        realy.value = true;
    } else {
        realy.value = false;
    }
}
</script>

<template>
<div class="container">
    <h3 class="title3">Регистрация</h3>
    <div class="container">
        <PopupGoodRef />
        <form @submit.prevent class="form">
            <span v-if="realy" class="error">Не все поля заполнены</span>
            <label for="">Введите почту или номер телефона</label>
            <input type="text" v-model="login" class="input first">
            <label for="">Придумайте пароль</label>
            <input type="password" v-model="password" class="input">
            <label for="">Повторите пароль</label>
            <input type="password" v-model="repPassword" class="input">
            <div class="block-btn">
                <input type="button" @click="checkForm" value="Зарегистрироваться" class="submit">
                <RouterLink class="registration" to="/log-out">Авторизоваться</RouterLink>
            </div>
        </form>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 80vh;

    .title3 {
        margin-bottom: 30px;
        font-size: 26px;
        font-weight: 500;
    }

    .form {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .error {
            color: red;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .first {
            margin-bottom: 20px;
        }

        .input {
            border: none;
            height: 40px;
            width: 400px;
            margin: 10px;
            color: $main;
            outline: none;
            font-weight: 500;
            padding: 5px 10px;
            text-align: center;
            border-bottom: 1px solid $main;
            transition: all .2s ease-in-out;
        }

        .block-btn {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 30px;

            .submit {
                font-weight: 500;
                cursor: pointer;
                outline: none;
                border: none;
                color: $white;
                border-radius: 8px;
                padding: 8px 12px;
                background-color: $main;
                margin-right: 5px;
                border: 1px solid transparent;

                &:hover {
                    color: $main;
                    border: 1px solid $main;
                    background-color: $white;
                }
            }

            .registration {
                text-decoration: none;
                font-weight: 500;
                cursor: pointer;
                outline: none;
                border: none;
                color: $main;
                border-radius: 8px;
                padding: 8px 12px;
                margin-right: 5px;

                &:hover {
                    color: $white;
                    background-color: $main;
                }
            }
        }
    }
}
</style>
