export default {
    '2100': {
        name: '2100',
        uuid: 'fantasy.2100',
        model: {
            Date: { type: Date },
            Chapitre: { type: String },
            Contenu: { type: String },
            Partie: { type: Number },
        },
        routes: {
            get: '2100-s',
            view: '2100-s/$id',
        },
    },

    'compassion': {
        name: 'AutoCompassion',
        uuid: 'consience.compassion',
        model: {
            Date: { type: Date },
            Contenu: { type: String },
            Titre: { type: String },
        },
        routes: {
            get: 'compassions',
            view: 'compassion/$id',
        },
    },

    'chronique': {
        name: 'Chronique',
        uuid: 'rire.chronique',
        model: {
            Date: { type: Date },
            Contenu: { type: String },
            Titre: { type: String },
        },
        routes: {
            get: 'chroniques',
            view: 'chronique/$id',
        },
    },

    'meditation': {
        name: 'Meditation',
        uuid: 'consience.meditation',
        model: {
            Date: { type: Date },
            Titre: { type: String},
            Description: { type: String },
            Media: { type: File },
        },
        routes: {
            get: 'meditations',
            view: 'meditation/$id',
        },
    },

    'musiques': {
        name: 'Musique',
        uuid: 'musiques.chill|troll',
        model: {
            Date: { type: Date },
            Lien: { type: String },
            Titre: { type: String },
        },
        routes: {
            get: 'musiques'
        },
    },
    
    'relaxation': {
        name: 'Relaxation',
        uuid: 'conscience.relaxation',
        model: {
            Date: { type: Date },
            Titre: { type: String},
            Description: { type: String },
            Media: { type: File },
        },
        routes: {
            get: 'relaxations',
            view: 'relaxation/$id',
        },
    },
}