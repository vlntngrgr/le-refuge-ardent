export default class Model {
    constructor({ data = {} }) {
        Object.keys(data).forEach((key) => this[key] = data[key]);
    }
}
