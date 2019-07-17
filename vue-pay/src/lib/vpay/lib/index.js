import pay from './pay'
const zfcPs = {
    install (Vue, options) {
      // Vue.component("name",template)
        Vue.component('vpay', pay)
    }
}

export default zfcPs
