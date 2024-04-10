import {defineStore} from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => {
    return {user: {}};
  },
  actions: {
    async getUser(token) {
      console.log(token);
      try {
        const response = await axios.get('https://our-school.space/api/auth/me/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(token, response.data);
        // this.user = response.data;
      } catch (error) {
        alert(error);
      }
    },
    async addUser(obj) {
      console.log(obj);
      try {
        const response = await axios.post('https://our-school.space/api/auth/', obj);
        this.user = response.data;
      } catch (error) {
        alert(error);
      }
    },
    async loginUser(obj) {
      try {
        const response = await axios.post('https://our-school.space/api/auth/login/', obj);
        let token = response.data.access;
        this.getUser(token);
      } catch (error) {
        alert(error.response.data.error);
      }
    },
  },
  getters: {
    myProfile(state) {
      return state.user;
    },
  },
});
