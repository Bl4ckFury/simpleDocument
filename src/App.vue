<script setup>
import {
    RouterView
} from 'vue-router'
import NavBarDocumet from './components/Header/NavBarDocumet.vue'
</script>

<template>
<header class="header">
    <nav class="header-nav">
        <NavBarDocumet />
    </nav>
</header>
<main class="main">
    <RouterView />
</main>
</template>

<style lang="scss" scoped>
@import "./assets/styles/main.scss";

.header {
    background-color: $main;

    .header-nav {
        padding: 20px 50px;
        margin: 0 auto;
        max-width: 1770px;
    }
}

.main {
    padding: 20px 50px;
    margin: 0 auto;
    max-width: 1770px;
}
</style>
