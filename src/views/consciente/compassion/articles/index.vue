<template>
    <main class="chronique">
        <h1 class="title" v-html="article.title"></h1>
        
        <div class="article">
            <component
                v-for="(c, i) in article.content"
                :key="i"
                :is="c.tag"
                v-html="c.value"
            />
        </div>

        <div class="signature">
            <h2 :class="article.signature.color" v-html="article.signature.value"></h2>
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

import Articles from './articles'
import Back from '@/components/svg/arrow'

export default {
    name: 'Rire',

    components: {
        UiCard,
        Back
    },

    computed: {
        article() {
            return Articles.find(a => a.id === this.$route.params.id);
        },
    },

    methods: {
        onBack() {
            this.$router.push({ name: '' });
        },

        parseContent(content) {
            
        }
    }
}
</script>
