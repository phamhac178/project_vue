import { createStore } from "vuex"
import getters from "./getters"
import actions from "./actions"
import state from "./state"
import mutations from "./mutations"
const store = createStore({
    state,
    actions,
    mutations,
    getters,
})