/**
 * @class 
 * @author Valentin Grégoire <valentin.gregoire91@gmail.com>
 * @version 0.0.0
 */
export default class Factory {
    static build({ model, data = null }) {
        let instance = {}

        Object.keys(model)
            .forEach((k, i) => 
                instance[k] = data == null ? 
                    model[k].type() :
                    model[k].type(data[k])
            )

        return instance
    }
}
