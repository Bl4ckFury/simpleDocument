import { createStore } from 'vuex'
import { ref } from 'vue';
import axios from "axios";

const store = createStore({
  state: {
      documents: [
        {
          id: 1,
          name: 'Название 1',
          author: 'Автор 1',
          date: '2023-01-01',
          status: 'Отклонен',
          description: 'Трудно',
          download: 'https://example.com/download1'
        },
        {
          id: 2,
          name: 'Название 2',
          author: 'Автор 2',
          date: '2023-01-02',
          status: 'Ожидает подтверждения',
          description: 'Не хочу',
          download: 'https://example.com/download2'
        },
        {
          id: 3,
          name: 'Название 3',
          author: 'Автор 3',
          date: '2023-01-03',
          status: 'в процессе',
          description: 'Не буду',
          download: 'https://example.com/download3'
        },
        {
          id: 4,
          name: 'Название 4',
          author: 'Автор 4',
          date: '2023-01-04',
          status: 'готов',
          description: 'Ладно',
          download: 'https://example.com/download3'
        }
      ]
  },
  getters: {
  },
  mutations: {
    createDocument(state, document) {
      console.log('create');
      state.documents = [...state.documents, {
        id: 5,
          name: 'Название 5',
          author: 'Автор 5',
          date: '2023-01-04',
          status: 'готов',
          description: 'Ладно',
          download: 'https://example.com/download3'
      }];
    }, 
    deleteDocument(state, id) {
      state.documents = [...state.documents.filter(document => document.id !== id)]
    }
  },
  actions: {}
});

export default store;
