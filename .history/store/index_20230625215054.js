import { createStore } from "vuex"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import state from "./state"
const store = createStore({
    state,
    actions,
    mutations,
    getters,
})