import pay from './pay'
const zfcPassword = {
    install (Vue, options) {
        Vue.component('vpay', pay)
    }
}

export default zfcPassword
