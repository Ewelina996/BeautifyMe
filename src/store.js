import {defineStore} from 'pinia'

export const useStore = defineStore('booking', {
    state: () => {
        return{
            beautician: "testBeautician"
        }
    }, 
    actions:{
        changeBeautician (payload) {
            this.beautician = payload
        }
    }
})