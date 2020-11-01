<template>
    <div id="app">
        <div class="version" v-if="isDev">
            Development
        </div>

        <div>
            <menu-primary :header="{ label: 'Le refuge ardent'}" :menu="menu" />

            <menu-mood>
                <template v-slot:header>Ton humeur</template>
                <template>Ici ton menu d'humeur</template>
            </menu-mood>

            <router-view />
        </div>
        
        <footer>
            <div class="cookie">
                Ce site n’utilise pas de cookies… Sauf ceux double chocolat qui se sont sacrifiés pour que je puisse développer ledit site… Merci les gars #lesauveurs #tousensemble #lepleindenergie 
                <div class="legal">
                    <router-link
                        class="link"
                        :to="{ name: 'mentions-legales'}"
                    >Mentions légales</router-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import MenuPrimary from "./components/primary";
import MenuMood from "./components/mood";

export default {
    name: "BurningShellIndex",

    components: {
        MenuMood,
        MenuPrimary
    },

    computed: {
        isDev() {
            return process.env.NODE_ENV === 'development'
        },

        menu() {
            let ret = [];

            // HOME
            ret.push({
                active: this.$route.name === "accueil",
                label: "Accueil",
                name: "accueil",
                route: {
                    name: "accueil"
                }
            });

            // Musiques
            ret.push({
                active: this.$route.name.includes("musiques"),
                label: "Musiques",
                name: "musiques",
                children: [
                    {
                        active: this.$route.name === "musiques-chill",
                        label: "Chill / Relax",
                        name: "musiques-chill",
                        route: {
                            name: "musiques-chill"
                        }
                    },
                    {
                        active: this.$route.name === "musiques-troll",
                        label: "Troll / Révolutionnaire",
                        name: "musiques-troll",
                        route: {
                            name: "musiques-troll"
                        }
                    }
                ]
            });

            // Voyager
            ret.push({
                hidden: true,
                disabled: true,
                label: "Voyager",
                name: "voyager",
                children: [
                    {
                        disabled: true,
                        label: "Photos",
                        name: "voyager-photos"
                    },
                    {
                        disabled: true,
                        label: "Recits de voyage",
                        name: "voyager-recits"
                    }
                ]
            });

            // Musiques
            ret.push({
                active: this.$route.name.includes("rire"),
                label: "Rire",
                name: "rire",
                children: [
                    {
                        active: this.$route.name === "rire-chroniques",
                        label: "Petites chroniques de la Wallonie profonde",
                        name: "rire-chroniques",
                        route: {
                            name: "rire-chroniques"
                        }
                    },
                    {
                        active: this.$route.name.includes("memes"),
                        label: "Memes",
                        name: "rire-memes",
                        children: [
                            {
                                active: this.$route.name === "rire-memes-troll",
                                label: "Troll",
                                name: "rire-memes-troll",
                                route: {
                                    name: "rire-memes-troll"
                                }
                            },
                            {
                                active: this.$route.name === "rire-memes-geek",
                                label: "Geek",
                                name: "rire-memes-geek",
                                route: {
                                    name: "rire-memes-geek"
                                }
                            },
                            {
                                hidden: true,
                                disabled: true,
                                label: "Homme/Femme",
                                name: "rire-memes-hf"
                            }
                        ]
                    }
                ]
            });

            // Evasion
            ret.push({
                active: this.$route.name.includes('evasion'),
                label: "S'évader",
                name: "evasion",
                children: [
                    {
                        active: this.$route.name === 'evasion-fantasy',
                        label: "Fantasy 2.0",
                        name: "evasion-fantasy",
                        route: {
                            name: "evasion-fantasy"
                        }
                    },
                    {
                        disabled: true,
                        label: "L'innocente",
                        name: "evasion-innocente"
                    }
                ]
            });

            // Pleine conscience
            ret.push({
                label: "Pleine conscience",
                name: "conscience",
                children: [
                    {
                        label: "Méditation",
                        name: "conscience-meditation",
                        route: {
                            name: "meditation"
                        }
                    },
                    {
                        label: "Auto-compassion",
                        name: "conscience-compassion",
                        route: {
                            name: "compassion"
                        }
                    },
                    {
                        label: "Relaxation",
                        name: "conscience-relaxation",
                        route: {
                            name: "relaxation"
                        }
                    }
                ]
            });

            return ret;
        }
    },
    mounted() {
        console.log(process.env.NODE_ENV)
    }
};
</script>
