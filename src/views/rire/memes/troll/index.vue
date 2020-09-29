<template>
    <main class="memes">
        <h1 class="title">Troll Forever...</h1>
        <div class="description">
            <p>Quelques memes troll collectés sur le net</p>
        </div>

        <div class="memes__items">
            <img 
                :alt="m.link" 
                class="memes__item" 
                @click.stop.prevent="openImage(m)"
                :key="m.link" 
                :src="m.link" 
                v-for="m in list" 
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
        </div>µ
        <div class="signature">
            <h2 class="black" v-html="`<b>WHITE</b>`"></h2>
        </div>
    </main>
</template>

<script>
import Memes from './list'

export default {
    name: 'MemesTroll',
    data() {
        return {
            selected: false,
            selection: null,
        }
    },

    computed: {
        list() {
            let ret = [];
            Memes.forEach(m => {
                ret.push(m);
            });

            return ret;
        }
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
