<template>
    <main class="memes">
        <h1 class="title">La geek attitude !</h1>
        <div class="description">
            <p>Voici une petite liste de memes geek que j'ai trouvé sur le net.</p>
        </div>

        <div class="memes__items">
            <img 
                :alt="m.link" 
                class="memes__item" 
                @click.stop.prevent="openImage(m)"
                :key="m.link" 
                :src="m.link" 
                v-for="m in second" 
            />
        </div>

        <hr/>

        <div class="memes__items">
            <img 
                :alt="m.link" 
                class="memes__item" 
                @click.stop.prevent="openImage(m)"
                :key="m.link" 
                :src="m.link" 
                v-for="m in first"
            />
        </div>

        <div 
            @click.stop.prevent="closeImage"
            class="memes__selection"
            v-if="selected">
            <img 
                :alt="selection.link"
                :src="selection.link"
            />
        </div>

        <div class="signature">
            <h2 class="black" v-html="`<b>WHITE</b>`"></h2>
        </div>
    </main>
</template>

<script>
import Memes from './list'

export default {
    name: 'MemesGeek',

    data() {
        return {
            selected: false,
            selection: null,
        }
    },

    computed: {
        first() {
            let ret = [];
            Memes.first.forEach(m => {
                ret.push(m);
            });

            return ret;
        },
        second() {
            let ret = [];
            Memes.second.forEach(m => {
                ret.push(m);
            });

            return ret;
        },
    },

    methods: {
        closeImage() {
            this.selected = false;
            this.selection = null;
        },

        openImage(img) {
            if(this.selection !== null) {
                this.selection = null;
                this.selected = false;
            } else {
                this.selection = img;
                this.selected = true;
            }
        }
    }
}
</script>
