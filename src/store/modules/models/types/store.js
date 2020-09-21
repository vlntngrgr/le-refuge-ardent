import { default as Store } from '../store'

export default class TypesStore extends Store {
    constructor({ ctrl }) { super({ ctrl }) }

    get actions() {
        return {
            find: ({ state, commit }) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.find('/items/types')
                        .then((types) => {
                            commit('setTypes', types);
                            resolve(types);
                        })
                        .catch((err) => reject(err));
                })
            }
        }
    }
    
    get mutations() { return { setTypes: (state, types) => state.types = types } }
    get name() { return 'types' }
    get state() { return { ctrl: this.ctrl, types: [] } }
}
