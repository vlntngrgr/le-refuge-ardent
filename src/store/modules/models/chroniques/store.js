import { default as Store } from '../store'

export default class ChroniquesStore extends Store {
    constructor({ ctrl }) { super({ ctrl }) }

    get actions() {
        return {
            find: ({ state, commit }) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.find('/items/chroniques?sort=-id')
                        .then((chroniques) => {
                            commit('setChroniques', chroniques);
                            resolve(chroniques);
                        })
                        .catch((err) => reject(err));
                });
            },

            view: ({ state, commit }, id) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.view(`/items/chroniques/${id}`)
                        .then((chronique) => {
                            commit('setChronique', chronique);
                            resolve(chronique);
                        })
                        .catch((err) => reject(err));
                });
            }
        }
    }
    
    get mutations() { 
        return { 
            setChronique: (state, chronique) => state.chronique = chronique,
            setChroniques: (state, chroniques) => state.chroniques = chroniques,
        }
    }

    get name() { return 'chroniques' }
    get state() { return { ctrl: this.ctrl, chroniques: [], chronique: null } }
}
