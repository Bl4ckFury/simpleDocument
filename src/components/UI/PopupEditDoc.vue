<script setup>
import Close from "../icons/Close.vue";

import { useStore } from "vuex";
import { reactive, ref, watchEffect } from "vue";

defineProps({
    isActive: Boolean,
});

const store = useStore();

let document;
watchEffect(() => {
    document = reactive(store.state.selectedDocument);
    console.log(document);
});

const editDocument = ($emit) => {
    store.commit("editDocument", document);
    $emit("close-modal");
};
</script>

<template>
    <div class="create-modal__wrapper" :class="{ active: isActive }">
        <div class="create-modal__bg">
            <div class="create-modal__name">
                <h3 class="create-modal__title3">Редактирование документа</h3>
                <button
                    @click="$emit('close-modal')"
                    class="create-modal__close"
                >
                    <Close />
                </button>
            </div>
            <div class="create-modal">
                <label class="create-modal__label" for=""
                    >Название документа</label
                >
                <input
                    v-model="document.name"
                    class="create-modal__input"
                    type="text"
                />
                <label class="create-modal__label" for="">Автор</label>
                <input
                    v-model="document.author"
                    class="create-modal__input"
                    type="text"
                />
                <label class="create-modal__label" for="">Дата создания</label>
                <input
                    v-model="document.date"
                    class="create-modal__input"
                    type="date"
                    name=""
                    id=""
                />
                <label class="create-modal__label" for="">Описание</label>
                <textarea
                    class="create-modal__label"
                    v-model="document.description"
                ></textarea>
                <input class="file" type="file" />
                <label class="create-modal__label" for="">Статус</label>
                <select
                    name="status"
                    id="status"
                    v-model="document.status"
                    class="create-bottom__search"
                >
                    <option selected disabled value="">Выберете статус</option>
                    <option value="Готов">Готов</option>
                    <option value="Отклонен">Отклонен</option>
                    <option value="В процессе">В процессе</option>
                    <option value="Ожидает подтверждения">
                        Ожидает подтверждения
                    </option>
                </select>
                <button @click="editDocument($emit)" class="create-btn">
                    Сохранить
                </button>
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

    .create-modal__name {
        display: flex;
        align-items: center;

        .create-modal__title3 {
            font-size: 28px;
            color: $black;
        }

        .create-modal__close {
            border: none;
            background: none;
            cursor: pointer;
        }
    }
}

.create-modal {
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

    .create-btn {
        font-size: 18px;
        height: 50px;
        width: 200px;
        color: $white;
        outline: none;
        border: none;
        font-weight: 600;
        cursor: pointer;
        background-color: $main;
        border: 1px solid $main;
        padding: 8px 16px;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: $main;
            background-color: $white;
        }
    }

    .create-modal__label {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .create-modal__input {
        margin-bottom: 30px;
        font-weight: 500;
        color: $main;
        border: none;
        width: 300px;
        outline: none;
        margin-left: 0px;
        padding: 8px 16px;
        background-color: transparent;
        border-bottom: 1px solid $main;

        &:focus {
            outline: none;
        }
    }

    .file {
        margin-bottom: 30px;
        font-weight: 500;
        color: $main;
        border: none;
        width: 300px;
        outline: none;
        margin-left: 0px;
        padding: 8px 16px;
        padding-left: 0;
    }
}
</style>
