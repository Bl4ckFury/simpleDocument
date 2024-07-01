<script setup>
import { useStore } from 'vuex';
import Download from '../icons/Download.vue';
const store = useStore();

</script>

<template>
<table class="table">
    <thead class="table-thead" >
        <th class="table-thead__th"></th>
        <th class="table-thead__th">Название документа</th>
        <th class="table-thead__th">Автор</th>
        <th class="table-thead__th">Дата создания</th>
        <th class="table-thead__th">Статус</th>
        <th class="table-thead__th">Описание</th>
        <th class="table-thead__th">Скачать</th>
    </thead>
    <tbody 
        v-for="document in store.documents" 
        :key="store.documents.id">
        <tr>
            <td>
                <input type="checkbox">
            </td>
            <td>{{ document.name }}</td>
            <td>{{ document.author }}</td>
            <td>{{ document.date }}</td>
            <td>{{ document.status }}</td>
            <td>{{ document.description }}</td>
            <td class="td-download"><a href="#">
                  <Download /></a></td>
        </tr>
    </tbody>
</table>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.table {
    flex: 1;
    border-spacing: 2px;
    border-color: rgb(0, 0, 0);

    .table-thead__th {
        margin-right: 10px;
    }

    .td-download {
        text-align: center;
    }

}

table,
th,
td {
    border: 2px solid $black;
    border-collapse: collapse;
    padding: 12px;
}
</style>
