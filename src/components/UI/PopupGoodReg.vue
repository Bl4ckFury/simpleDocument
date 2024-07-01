<script setup>

</script>

<template>
    <div class="main-wrapper">
        <h3 class="main-wrapper__h3">Вы успешно прошли регистрацию</h3>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
.main-wrapper {
    min-height: 100vh;
    width: 100vw;
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
    background-color: rgba(0, 0, 0, 0.35);
    &.active {
        opacity: 1;
        pointer-events: all;
    }
}
</style>