export default class Store {
    constructor({ ctrl }) { this.ctrl = ctrl }

    get actions() { return {}; }
    get getters() { return {}; }
    get name() { return ''; }
    get mutations() { return {}; }
    get state() { return {}; }

    get vuex() {
        return {
            namespaced: true,
            
            actions: this.actions,
            getters: this.getters,
            mutations: this.mutations,
            state: this.state,
        }
    }
}
