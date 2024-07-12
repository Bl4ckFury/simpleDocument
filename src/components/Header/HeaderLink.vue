<script setup>
import { ref } from "vue";
import PopupOpenLogin from "../UI/PopupOpenLogin.vue";
import PopupOpenRegistration from "../UI/PopupOpenRegistration.vue";

const logInProfile = ref(true);
const popupLogin = ref(false);
const popupReg = ref(false);
</script>

<template>
  <PopupOpenLogin
    :isActive="popupLogin"
    @close-modal="popupLogin = false"
    @show-reg-modal="
      () => {
        popupLogin = false;
        popupReg = true;
      }
    "
  />
  <PopupOpenRegistration
    :isActive="popupReg"
    @close-modal="popupReg = false"
    @show-login-modal="
      () => {
        popupReg = false;
        popupLogin = true;
      }
    "
  />
  <div class="list">
    <div class="list-left">
      <router-link class="list-link" to="/">Главная</router-link>
      <router-link class="list-link" to="/list-document"
        >Список документов</router-link
      >
      <router-link class="list-link" to="/search-filter"
        >Поиск и фильтрация</router-link
      >
      <router-link class="list-link" to="/settings-document"
        >Настройка</router-link
      >
    </div>
    <div class="list-right">
      <button
        v-if="logInProfile"
        @click="popupLogin = true"
        class="last list-link"
      >
        Войти
      </button>
      <button v-else class="list-exit">Выйти</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
      transition: all 0.2s ease-in-out;

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
      transition: all 0.2s ease-in-out;

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
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
