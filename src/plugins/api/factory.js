/**
 * Factory utilities for the api handling 
 * for https://le-refuge-ardent.com
 * 
 * @author Valentin Grégoire <valentin.gregoire91@gmail.com>
 * @version 0.0.1
 */

const SEPARATOR = '$';

/**
 * 
 * @param {Object} options 
 * @param {Object} options.params - Parameters to inject in the route 
 * @param {Object} options.route - Route with parameters defined by a constant separator
 */
 const endpoint = ({ params, route }) => {
  isDev && console.group('FACTORY.endpoint');
  isDev && console.log('Handling route: ', route, ', with params: ', params)
  let ret = {
    path: [],
    query: []
  };

  let parts = route.split('?');

  let path = parts[0];
  isDev && console.log('PATH found: ', path);

  let paths = path.split('/');
  paths.forEach(h => {
    if(h.includes(SEPARATOR)) {
      isDev && console.log(h)
      let p = params[h.split(SEPARATOR)[1]];
      if(p == null) {
        isDev && console.warn('PARAM not found for path: ', h);
        return;
      }
      ret.path.push(p); 
    } else {
      ret.path.push(h);
    }
  })

  isDev && console.log('PATH formated: ', ret.path.join('/'));

  let query = null;
  if(parts.length > 1) {
    query = parts[1];
    isDev && console.log('QUERY found: ', query);

    let queries = query.split('&');
    queries.forEach(q => {
      if(q.includes(SEPARATOR)) {
        let qParts = q.split(SEPARATOR);
        let qName = qParts[0];
        let qParam = qParts[1];

        let qValue = params[qParam];
        if(qValue == null) {
          isDev && console.warn('PARAM not found for query: ', q);
          return
        }
        ret.query.push(qName + qValue);
      } else {
        ret.query.push(q);
      }
    })
  }

  isDev && console.log('QUERY formated: ', ret.query.join('/'));

  let end = ret.path.join('/')
  if(ret.query.length > 0) {
    end += '?' + ret.query.join('&');
  }

  isDev && console.log('ROUTE formated: ', end);
  isDev && console.groupEnd();
  return end
} 

/**
 * Model builder
 * Define the properties based on a model definition
 * with getters and the define property from the JS handling
 * 
 * @param {Object} options 
 * @param {Object} options.model 
 * @param {Object} options.data
 * @returns {Object} 
 */
const model = ({ model, data = null }) => {
  let instance = {}

  isDev && console.group('Factory.model')

  Object.keys(model)
    .forEach((k) => {
      Object.defineProperty(instance, k, {
        value: data != null ? model[k].type(data[k]) : model[k].type(),
        configurable: true,
        enumerable: true,
      });
      isDev && console.log('Built: ', k);
    });
  
  isDev && console.log('Model built success: ', instance);
  isDev && console.groupEnd();
  return instance;
}

export {
  endpoint,
  model,
}