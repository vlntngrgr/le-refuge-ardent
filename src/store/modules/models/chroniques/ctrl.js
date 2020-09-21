import { default as Controller} from '../ctrl'
import { default as Model } from './model'
import { default as Store } from './store'

export default class ChroniquesCtrl extends Controller {
    constructor({ transport }) { 
        super({ transport }); 
        this._model = Model; 
        this._store = new Store({ ctrl: this }); 
    }
}
