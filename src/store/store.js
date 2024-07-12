import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    documents: [
      {
        id: 1,
        name: "Название 1",
        author: "Автор 1",
        date: "2023-01-01",
        status: "Отклонен",
        description: "Трудно",
        download: "https://example.com/download1",
      },
      {
        id: 2,
        name: "Название 2",
        author: "Автор 2",
        date: "2023-01-02",
        status: "Ожидает подтверждения",
        description: "Не хочу",
        download: "https://example.com/download2",
      },
      {
        id: 3,
        name: "Название 3",
        author: "Автор 3",
        date: "2023-01-03",
        status: "В процессе",
        description: "Не буду",
        download: "https://example.com/download3",
      },
      {
        id: 4,
        name: "Название 4",
        author: "Автор 4",
        date: "2023-01-04",
        status: "Готов",
        description: "Ладно",
        download: "https://example.com/download3",
      },
      {
        id: 5,
        name: "Название 5",
        author: "Автор 5",
        date: "2023-01-05",
        status: "Готов",
        description: "Принято",
        download: "https://example.com/download3",
      },
    ],
    selectedDocument: {
      name: "",
      author: "",
      date: "",
      status: "",
      description: "",
      download: "",
    },
  },
  getters: {},
  mutations: {
    createDocument(state, document) {
      state.documents = [
        ...state.documents,
        {
          id: state.documents.length + 1,
          ...document,
        },
      ];
    },
    setSelected(state, document) {
      state.selectedDocument = document;
    },
    deleteDocument(state) {
      state.documents = [
        ...state.documents.filter(
          (document) => document.id !== state.selectedDocument.id
        ),
      ];
    },
    editDocument(state, document) {
      const index = state.documents.findIndex(
        (document) => document.id === state.selectedDocument
      );
      state.documents[index] = document;
    },
  },
  actions: {},
});

export default store;
