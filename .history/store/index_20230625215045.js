import { createStore } from "vuex"
import getters from "./getters"
import actions from "./actions"
import  from "./"
import getters from "./getters"
const store = createStore({
    state,
    actions,
    mutations,
    getters,
})