<script setup>
import ListDocTopRight from '../components/ListDocument/ListDocTopRight.vue';
import ListDocBottom from '../components/ListDocument/ListDocBottom.vue';
import ListDocTop from '../components/ListDocument/ListDocTop.vue';
import ListTable from '../components/ListDocument/ListTable.vue';

</script>

<template>
<div class="list-doc">
    <div class="list-doc__top">
        <div>
            <ListDocTop />
            <ListDocBottom />
        </div>
        <ListTable />
        <ListDocTopRight />
    </div>
    

</div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.list-doc {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    .list-doc__top {
        display: flex;
        margin-top: 30px;
        gap: 50px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }
}
</style>
