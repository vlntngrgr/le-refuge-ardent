<template>
    <main class="story">
        <h1 class="title">
            {{ story.title }}
        </h1>
        
        <div class="description">
            <component
                v-for="(c, i) in story.introduction"
                :key="i"
                :is="c.tag"
                v-html="c.value"
            />
        </div>
        
        <details class="chapter" :open="isOpen(j)" v-for="(c, j) in chapters" :key="j">
            <summary class="chapter__title" @click.stop.prevent="toggle(c, j)">
                {{ c.title }}

                <span class="date">Posté le {{c.date}}</span>
            </summary>

            <div class="article">
                <component
                    v-for="(p, i) in c.content"
                    :key="i"
                    :is="p.tag"
                    v-html="p.value"
                />
            </div>
        </details>

        <div class="signature">
            <h2 :class="`red`" v-html="`BLUE`"></h2>
        </div>

        <div class="back">
            <button class="button__back" @click="onBack">
                <back class="button__icon" />
                Retour
            </button>
        </div>
    </main>
</template>

<script>
import UiCard from '@/components/card'

import Story from './2100'
import Back from '@/components/svg/arrow'

export default {
    name: 'Fantasy2100',

    components: {
        UiCard,
        Back
    },

    data() {
        return {
            selected: false,
            selection: null,  
        };
    },

    computed: {
        chapters() {
            return this.story.chapters;
        },
        
        story() {
            return Story;
        }
    },

    methods: {
        toggle(chapter, id) {            
            if(this.selection !== null) {
                if(this.selection === id) {
                    this.selected = false;
                    this.selection = null;
                } else {
                    this.selected = true;
                    this.selection = id;
                }
            } else {
                this.selected = true;
                this.selection = id;
            }
        },

        isOpen(id) {
            return this.selected && this.selection === id;
        },

        onBack() {
            this.$router.push({
                name: 'evasion-fantasy'
            })
        }
    }
}
</script>
