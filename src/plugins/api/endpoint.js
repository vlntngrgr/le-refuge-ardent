/**
 * @class 
 * @author Valentin Grégoire <valentin.gregoire91@gmail.com>
 * @version 0.0.0
 */
export default class Endpoint {
    /**
     * 
     * @param {String} route
     * @param {String} verb
     */
    constructor({ route, verb }) {
        this._route = route
        this._verb = verb
    }

    ////////////////////////////////////////////////
    //  GETTER
    //////////////////////////////////////////////// 
    /**
     * @readonly
     * @property
     * @return {String}
     */
    get route() {
        return this._route
    }

    /**
     * Return the indicator to find in the provided route
     * 
     * example: /some/$variable/ => indicator: $
     * 
     * @readonly
     * @property
     * @return {String}
     */
    get indicator() {
        return '$'
    }

    /**
     * @readonly
     * @property
     * @return {String}
     */
    get verb() {
        return this._verb
    }

    //////////////////////////////////////////////// 
    //  PUBLIC METHODS
    //////////////////////////////////////////////// 
    /**
     * Get the route parsed with the data from the paylaod
     * Each variable prefixed with the indicator will be replaced by their value
     * provided in the payload
     * 
     * @param {Object} payload 
     */
    inject(payload) {
        
    }

    //////////////////////////////////////////////// 
    //  PRIVATE METHODS
    //////////////////////////////////////////////// 
    /**
     * @private
     * @param {String} query
     * @param {Object} payload
     */
    __injectQuery({ query, payload }) {
         
    }

    /**
     * @private
     * @param {String} path
     * @param {Object} payload
     */
    __injectPath({path, payload }) {

    }

}