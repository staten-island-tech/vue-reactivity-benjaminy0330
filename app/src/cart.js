import {ref, reactive} from 'vue';
const cart = reactive({
    list: [],
    price: 0,
    items: 0,

})

export {cart}