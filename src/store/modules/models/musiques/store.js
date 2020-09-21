import { default as Store } from '../store'

export default class MusiquesStore extends Store {
    constructor({ ctrl }) { super({ ctrl }) }

    get actions() {
        return {
            find: ({ state, commit }) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.find('/items/musiques')
                        .then((musiques) => {
                            commit('setMusiques', musiques);
                            resolve(musiques);
                        })
                        .catch((err) => reject(err));
                });
            },

            view: ({ state, commit }, id) => {
                return new Promise((resolve, reject) => {
                    state.ctrl.view(`/items/musiques/${id}`)
                        .then((musique) => {
                            commit('setMusique', musique);
                            resolve(musiques);
                        })
                        .catch((err) => reject(err));
                });
            }
        }
    }
    
    get mutations() { 
        return { 
            setMusique: (state, musique) => state.musique = musique,
            setMusiques: (state, musiques) => state.musiques = musiques,
        }
    }

    get name() { return 'musiques' }
    get state() { return { ctrl: this.ctrl, Musiques: [] } }
}
