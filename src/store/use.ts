import { defineStore } from "pinia";

export const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            token: localStorage.getItem('token') || '',
            userInfo: localStorage.getItem('userInfo') || {}
        }
    },
    actions: {
        setUserInfo(data: any) {
            this.token = data.token;
            this.userInfo = data.user_info;
            localStorage.setItem('token', this.token);
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        }
    }
})