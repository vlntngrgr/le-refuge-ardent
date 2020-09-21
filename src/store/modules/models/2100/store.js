import { default as Store } from '../store'

export default class FantasyStore extends Store {
    constructor({ ctrl }) { super({ ctrl }) }

    get actions() {
        return {
            find: ({ state, commit }) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.find('/items/2100')
                        .then((fantasies) => {
                            commit('setFantasies', fantasies);
                            resolve(fantasies);
                        })
                        .catch((err) => reject(err));
                });
            },

            view: ({ state, commit }, id) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.view(`/items/2100/${id}`)
                        .then((fantasy) => {
                            commit('setFantasy', fantasy);
                            resolve(fantasy);
                        })
                        .catch((err) => reject(err));
                });
            }
        }
    }
    
    get mutations() { 
        return { 
            setFantasy: (state, fantasy) => state.fantasy = fantasy,
            setFantasies: (state, fantasies) => state.fantasies = fantasies,
        }
    }

    get name() { return 'fantasies' }
    get state() { return { ctrl: this.ctrl, fantasies: [], fantasy: null } }
}
