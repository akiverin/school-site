import {defineStore} from 'pinia';
import axios from 'axios';
import news from '@/assets/data/news.json';

export const useNewsStore = defineStore('news', {
  state: () => {
    return {news: news};
  },
  actions: {
    async getNews() {
      try {
        // const response = await axios.get('https://our-school.space/api/news/');
        this.news = news;
      } catch (error) {
        alert(error);
      }
    },
  },
  getters: {
    allNews(state) {
      return state.news;
    },
  },
});
