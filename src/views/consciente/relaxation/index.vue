<template>
    <div>
        <h1 class="title">Relaxation</h1>

        <div class="description lecteur">
            <h3 v-if="hasSelection">
                {{ selection.label }} <br/>
                <span class="lent">Peut prendre du temps pour charger, patientez quelques secondes :)</span>    
            </h3>
            <h3 v-else>Lecteur: Aucune relaxation selectionnée</h3>

            <div class="lecteur__actions">
                <button class="action" @click="play">play</button>
                <button class="action" @click="pause">pause</button>
                <button class="action" @click="stop">stop</button>
            </div>
        </div>
        
        <div class="list">
            <ui-card
                class="list__item"
                size="small"
                v-for="a in relaxations"
                :key="a.label"
                @click="onSelect(a)">
                <template v-slot:header>
                    {{ a.label}}
                </template>
            </ui-card>
        </div>
    </div>
</template>

<script>
import {Howl, Howler} from 'howler'

import UiCard from '@/components/card'

export default {
    name: 'Meditation',

    components: {
        UiCard
    },

    data() {
        return {
            reader: null,
            selection: null,
            state: null,
        };
    },

    computed: {
        hasSelection() {
            return this.selection !== null && this.reader !== null;
        },

        relaxations() {
            return [
                {
                    label: 'Relaxation totale 1',
                    link: '/sounds/relaxations/01.mp3',
                },
            ]
        }
    },

    methods: {
        play() {
            if(this.hasSelection && this.state === 'loaded') {
                this.reader.play();
                this.state = 'playing';
            } else if (this.hasSelection && this.state === 'paused') {
                this.reader.play();
                this.state = 'playing';
            }
        },
        stop(){
            if(this.hasSelection && ['loaded', 'playing', 'paused'].includes(this.state)) {
                this.reader.stop();
                this.selection = null;
                this.reader = null;
                this.state = null;
            }
        },
        pause(){
            if(this.hasSelection && this.state === 'playing') {
                this.reader.pause();
                this.state = 'paused';
            }
        },

        onSelect(value) {
            if(this.selection === null) {
                this.selection = value;

                this.reader = new Howl({
                    src: [this.selection.link]
                });

                this.state = 'loaded';
            } else {
                this.reader.stop();
                this.selection = value;
                this.reader = new Howl({
                    src: [this.selection.link]
                });
                this.state = 'loaded';
            }
        }
    },
}
</script>
