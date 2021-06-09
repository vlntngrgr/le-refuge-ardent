import Axios from 'axios'
import Config from './config'
import {
  endpoint,
  model, 
} from './factory'

const api = {}

let http = Axios.create({
  baseURL: "https://admin.le-refuge-ardent.com/"
});

api.install = (Vue) => {
  Vue.prototype.$find = ({ limit, page, name }) => {
    return new Promise((resolve, reject) => {
      isDev && console.group('Vue.$find');
      isDev && console.log('Searching config: ', name, ', for page: ', page, ', limited to: ', limit);
      let config = Config.getById(name)
      isDev && console.log('Config found: ', config);

      if(config == null) {
        isDev && console.warn('Config not found!');
        isDev && console.groupEnd();
        reject('config not found');
      }

      let start = (page - 1) * limit;
      let route = endpoint({ 
        params: { limit, start }, 
        route: config.routes.get 
      });
      isDev && console.log('Route built: ', route);

      http.get(route)
        .then((response) => {
          isDev && console.log('Fetch succeed: ', response.data);
          let data = response.data;
          if(data) {
            data = data.map((d) => model({ model: config.model, data: d }))
          }
          resolve(data);
        })
        .catch((e) => {
          isDev && console.error('Failed fetching the route: ', route);
          isDev && console.error(e);
          reject(e);
        })
        .finally(() => {
          isDev && console.groupEnd()
        })
    })
  }

  Vue.prototype.$view = ({ name, id }) => {
    return new Promise((resolve, reject) => {
      isDev && console.group('Vue.$view');
      isDev && console.log('Searching config: ', name, ', for id: ', id);

      let config = Config.getById(name)
      isDev && console.log('Config found: ', config);

      if(config == null) {
        isDev && console.warn('Config not found!');
        isDev && console.groupEnd();
        reject('config not found');
      }
      
      let route = endpoint({ 
        params: { id }, 
        route: config.routes.view
      });
      isDev && console.log('Route built: ', route);
     
      http.get(route)
        .then((response) => {
          isDev && console.log('Fetch succeed: ', response.data);
          let data = response.data;
          if(data) {
            data = model({ model: config.model, data })
          }
          resolve(data);
        })
        .catch((e) => {
          isDev && console.error('Failed fetching the route: ', route);
          isDev && console.error(e);
          reject(e);
        })
        .finally(() => {
          isDev && console.groupEnd()
        })
    })
  }
}

export default api
