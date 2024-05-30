import {defineStore} from 'pinia'

export const useStore = defineStore('booking', {
    state: () => {
        return{
            beautician: 'testBeautician',
            service: 'testService',
            client: 'testClient',
            date: 'testDate',
            hour: 'testHour'
        }
    },
    actions: {
        changeBeautician(payload) {
            this.beautician = payload
        },
        changeService(payload) {
            this.service = payload
        },
        changeClient(payload) {
            this.client = payload
        },
        changeDate(payload) {
            this.date = payload
        },
        changeHour(payload) {
            this.hour = payload
        },
    },
})