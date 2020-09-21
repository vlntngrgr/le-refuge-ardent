export default class Controller {
    constructor({ transport }) { 
        this._transport = transport;
        this._model = null;
        this._store = null;
        this._collection = [];
        this._entity = null;
    }

    get store() { return this._store }

    find(route) {
        return new Promise((resolve, reject) => {
            this._transport.get(route)
                .then((res) => {
                    let data = res.data.data;
                    data = data.map(m => new this._model({ data: m }));
                    resolve(data);
                })
                .catch((error) => {
                    console.error('ERROR FIND TYPES');
                    console.error(error);
                });
        });
    }

    view(route) {
        return new Promise((resolve, reject) => {
            this._transport.get(route)
                .then((res) => {
                    let data = new this._model({ data: res.data.data });
                    console.log('view', data);
                    resolve(data);
                })
                .catch((error) => {
                    console.error('ERROR FIND TYPES');
                    console.error(error);
                });
        });
    }
}