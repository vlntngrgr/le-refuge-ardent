let Config = {};

//////////////////////////////////////////////////
//          FANTASY
//////////////////////////////////////////////////
// 2100
let FANTASY_2100 = {
  name: '2100',
  uuid: 'fantasy.2100',
  model: {
    Chapitre: { type: String },
    Contenu: { type: String },
    Date: { type: String },
    Partie: { type: Number },
  },
  routes: {
    get: '2100-s?_start=$start&_limit=$limit&_publicationState=live&_sort=id:ASC',
    view: '2100-s/$id',
  },
};
Config.FANTASY_2100 = FANTASY_2100;

//////////////////////////////////////////////////
//          CONSCIENCE
//////////////////////////////////////////////////
// AutoCompassion
let CONSCIENCE_COMPASSION = {
  name: 'AutoCompassion',
  uuid: 'conscience.compassion',
  model: {
    Contenu: { type: String },
    Date: { type: String },
    id: { type: String },
    Titre: { type: String },
  },
  routes: {
    get: 'auto-compassions?_start=$start&_limit=$limit&_publicationState=live&_sort=id:DESC',
    view: 'auto-compassions/$id',
  },
};
Config.CONSCIENCE_COMPASSION = CONSCIENCE_COMPASSION;

// Méditation
let CONSCIENCE_MEDITATION = {
  name: 'Meditation',
  uuid: 'conscience.meditation',
  model: {
    Date: { type: String },
    Description: { type: String },
    Media: { type: Object },
    Titre: { type: String },
  },
  routes: {
    get: 'meditations?_start=$start&_limit=$limit&_publicationState=live&_sort=id:DESC',
    view: 'meditations/$id',
  },
};
Config.CONSCIENCE_MEDITATION = CONSCIENCE_MEDITATION;

// Relaxation
let CONSCIENCE_RELAXATION = {
  name: 'Relaxation',
  uuid: 'conscience.relaxation',
  model: {
    Date: { type: String },
    Description: { type: String },
    Media: { type: Object },
    Titre: { type: String },
  },
  routes: {
    get: 'relaxations?_start=$start&_limit=$limit&_publicationState=live&_sort=id:DESC',
    view: 'relaxation/$id',
  },
};
Config.CONSCIENCE_RELAXATION = CONSCIENCE_RELAXATION;

//////////////////////////////////////////////////
//          RIRE
//////////////////////////////////////////////////
// Chronique
let RIRE_CHRONIQUE = {
  name: 'Chronique',
  uuid: 'rire.chronique',
  model: {
    Contenu: { type: String },
    Date: { type: String },
    id: { type: String },
    SousTitre: { type: String },
    Titre: { type: String },
  },
  routes: {
    get: 'chroniques?_start=$start&_limit=$limit&_publicationState=live&_sort=Date:DESC',
    view: 'chroniques/$id',
  },
};
Config.RIRE_CHRONIQUE = RIRE_CHRONIQUE;

// Memes geek
let RIRE_MEMES_GEEK = {
  name: 'Memes geek',
  uuid: 'rire.memes.geek',
  model: {
    id: { type: String },
    Image: { type: Array },
    Types: { type: String },
  },
  routes: {
    get: 'memes?_start=$start&_limit=$limit&_publicationState=live&_sort=id:DESC&Types_eq=Geek'
  },
};
Config.RIRE_MEMES_GEEK = RIRE_MEMES_GEEK;

// Memes troll
let RIRE_MEMES_TROLL = {
  name: 'Memes troll',
  uuid: 'rire.memes.troll',
  model: {
    id: { type: String },
    Image: { type: Array },
    Types: { type: String },
  },
  routes: {
    get: 'memes?_start=$start&_limit=$limit&_publicationState=live&_sort=id:DESC&Types_eq=troll'
  },
};
Config.RIRE_MEMES_TROLL = RIRE_MEMES_TROLL;


//////////////////////////////////////////////////
//          MUSIQUE
//////////////////////////////////////////////////
// Chill
let MUSIQUE_CHILL = {
  name: 'Musique',
  uuid: 'musiques.chill',
  model: {
    Date: { type: String },
    Lien: { type: String },
    Titre: { type: String },
  },
  routes: {
    get: 'musiques?_start=$start&_limit=$limit&_publicationState=live&Types_eq=chill&_sort=id:DESC'
  },
};
Config.MUSIQUE_CHILL = MUSIQUE_CHILL;

// Troll
let MUSIQUE_TROLL = {
  name: 'Musique',
  uuid: 'musiques.troll',
  model: {
    Date: { type: String },
    Lien: { type: String },
    Titre: { type: String },
  },
  routes: {
    get: 'musiques?_start=$start&_limit=$limit&_publicationState=live&_sort=id:DESC&Types_eq=troll'
  },
};
Config.MUSIQUE_TROLL = MUSIQUE_TROLL;


//////////////////////////////////////////////////
//          ALL
//////////////////////////////////////////////////
Config.ALL = [
  CONSCIENCE_COMPASSION,
  CONSCIENCE_MEDITATION,
  CONSCIENCE_RELAXATION,
  FANTASY_2100,
  MUSIQUE_CHILL,
  MUSIQUE_TROLL,
  RIRE_CHRONIQUE,
  RIRE_MEMES_GEEK,
  RIRE_MEMES_TROLL
];

//////////////////////////////////////////////////
//          UTILS
//////////////////////////////////////////////////
Config.getById = (id) => {
  isDev && console.group('Get config:');
  isDev && console.log('Searching for ID: ', id);
  let ret = Config.ALL.find(c => c.uuid === id );

  if(ret == null) {
    isDev && console.warn('ID: ', id, ' not found.')
    return null
  }
  
  isDev && console.log('Result: ', ret);
  isDev && console.groupEnd();

  return ret
}

export default Config