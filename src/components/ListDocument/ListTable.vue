<script setup>
import { useStore } from 'vuex';
import Download from '../icons/Download.vue';
const store = useStore();
defineProps({
    document: Array
})

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
        v-for="document in store.state.documents" 
        :key="document.id">
        <tr>
            <td>
                <input @click="store.commit('setSelected', document.id)" name="document" type="radio">
            </td>
            <td class="limitation">{{ document.name }}</td>
            <td class="limitation">{{ document.author }}</td>
            <td class="limitation">{{ document.date }}</td>
            <td class="limitation">{{ document.status }}</td>
            <td class="limitation">{{ document.description }}</td>
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
    .limitation {
        max-width: 400px;
        word-wrap: break-word;
    }

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
