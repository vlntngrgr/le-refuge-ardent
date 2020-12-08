export let entities = [
    {
        name: '2100',
        uuid: 'fantasy.2100',
        model: {
            Date: { type: Date },
            Chapitre: { type: String},
            Contenu: { type: String },
            Partie: { type: Number },
        },
    },
    {
        name: 'AutoCompassion',
        uuid: 'consience.compassion',
        model: {
            Date: { type: Date },
            Contenu: { type: String },
            Titre: { type: String },
        },
    },
    {
        name: 'Chronique',
        uuid: 'rire.chronique',
        model: {
            Date: { type: Date },
            Contenu: { type: String },
            Titre: { type: String },
        },
    },
    {
        name: 'Meditation',
        uuid: 'consience.meditation',
        model: {
            Date: { type: Date },
            Titre: { type: String},
            Description: { type: String },
            Media: { type: File },
        },
    },
    {
        name: 'Musique',
        uuid: 'musiques.chill|troll',
        model: {
            Date: { type: Date },
            Lien: { type: String },
            Titre: { type: String },
        },
    },
    {
        name: 'Relaxation',
        uuid: 'conscience.relaxation',
        model: {
            Date: { type: Date },
            Titre: { type: String},
            Description: { type: String },
            Media: { type: File },
        },
    },
]

export let instance = (entity, data={}) => {
    let ret = {}
    let keys = Object.keys(entity.model)
    keys.forEach(k => ret[k] = entity.model[k](k in data ? data[k] : null))
    return ret
}

export default instance