import Axios from 'axios'
import Config from './config'
import Factory from './factory'

let api = {}

let http = Axios.create({   
    baseURL: "http://dev.le-refuge-ardent.com:1337/",
    headers: { 'Content-Type': 'application/json' }
})

api.install = (Vue) => {
    Vue.prototype.$http = http

    Vue.prototype.$find = ({ name }) => {
        return new Promise((resolve, reject) => {
            http.get(Config[name].routes['get'])
                .then((res) => {
                    let collection = res.data.map((d, i) => Factory.build({ model: Config[name].model, data: d }))
                    resolve(collection)
                })
                .catch((error) => reject(error))
        })
    }

    Vue.prototype.$view = ({ name, id }) => {
        return new Promise((resolve, reject) => {
            http.get(Config[name].routes['view'] + `/${id}`)
                .then((res) => {
                    let collection = Factory.build({ model: Config[name].model, data: res.data })
                    resolve(collection)
                })
                .catch((error) => reject(error))
        })
    }
}

export default api
