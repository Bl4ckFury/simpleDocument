<script setup>
import PopupRegistration from "./PopupOpenRegistration.vue";
import Close from "../icons/Close.vue";
import { ref } from "vue";

defineProps({
  isActive: Boolean,
});

const login = ref("");
const password = ref("");
const realy = ref(false);

const checkForm = () => {
  if (login.value == "" || password.value == "") {
    realy.value = true;
  } else {
    realy.value = false;
  }
};
</script>

<template>
  <div class="create-modal__wrapper" :class="{ active: isActive }">
    <div class="create-modal__bg">
      <div class="container">
        <h3 class="title3">Авторизация</h3>
        <Close @click="$emit('close-modal')" />
        <form @submit.prevent class="form">
          <span v-if="realy" class="error">Не все поля заполнены</span>
          <label for="">Логин</label>
          <input v-model="login" type="text" class="input first" />
          <label for="">Пароль</label>
          <input v-model="password" type="password" class="input" />
          <div class="block-btn">
            <input
              type="button"
              @click="checkForm"
              value="Войти"
              class="submit"
            />
            <button class="registration" @click="$emit('show-reg-modal')">
              Регистрация
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
.create-modal__wrapper {
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
  .create-modal__bg {
    padding: 50px;
    padding-top: 0px;
    background-color: $white;
  }
}

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
      transition: all 0.2s ease-in-out;
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
