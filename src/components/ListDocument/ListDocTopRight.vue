<script setup>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    import PopupEditDoc from '../UI/PopupEditDoc.vue';
    import PopupSubmitDoc from '../UI/PopupSubmitDoc.vue';

    const store = useStore();
    
    const isPopupEditActive = ref(false);
    const submit = ref(false);
</script>

<template>
<div class="create-bottom">
    <PopupEditDoc 
        :isActive="isPopupEditActive"
        @close-modal="isPopupEditActive=false"
    />
    <PopupSubmitDoc 
        :isActive="submit"
        @close-modal="submit=false" 
    />
    <input type="search" class="create-bottom__search" placeholder="Поиск документа">
    <button class="create-bottom__btn">Поиск</button>
    <button @click="isPopupEditActive=true" class="create-bottom__btn">Редактировать</button>
    <button @click="openSubmitPopup" class="create-bottom__btn">Отправить</button>
    <button @click="store.commit('deleteDocument')" class="create-bottom__btn">Удалить</button>
</div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

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
        background-color: transparent;
        border-bottom: 1px solid $main;

        &:focus {
            outline: none;
        }
    }

    .create-bottom__btn {
        margin-bottom: 10px;
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
</style>
