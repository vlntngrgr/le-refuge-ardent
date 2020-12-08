import Axios from 'axios'

let http = Axios.create({   
    baseURL: "http://dev.le-refuge-ardent.com:1337/",
    headers: {
        'Content-Type': 'application/json'
    }
})

let api = {};

api.install = (Vue) => {
    let loading = true;

    Vue.prototype.$http = http;
    Vue.prototype.loading = loading;

    Vue.prototype.$find = ({ name }) => {
        
    }

    Vue.prototype.$view = ({ name, id }) => {

    }
}

export default api
