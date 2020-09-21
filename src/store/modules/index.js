import { ChroniquesController } from './models/chroniques'
import { MusiquesController } from './models/musiques'
import { TypesController } from './models/types'
import { FantasiesController } from './models/2100'

const Modules = (vue) => {
    return [
        new ChroniquesController({ transport: vue.prototype.$http }),
        new FantasiesController({ transport: vue.prototype.$http }),
        new MusiquesController({ transport: vue.prototype.$http }),
        new TypesController({ transport: vue.prototype.$http }),
    ]
}

export default Modules
