import { http } from '../../bootstrap'
import { entities, instance } from './entities'

export default class Controller {
    constructor() {}

    find({  }) {
        return new Promise((resolve, reject) => {
            http.get(`/${this.entity.name}`)
                .then((response) => {
                    console.log(response);
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

    findById({ }) {

    }
}