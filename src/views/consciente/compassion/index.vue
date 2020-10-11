<template>
    <main>
        <h1 class="title">Auto-compassion</h1>
        
        <div class="description"></div>

        <div class="list">
            <router-link        
                v-for="a in articles"
                :key="a.title" 
                tag="div"
                class="list__item link" 
                :to="{ name: 'compassion-article', params: { id: a.id } }"
                v-html="a.title"/>
        </div>
    </main>
</template>

<script>
import UiCard from '@/components/card'

import Articles from './articles/articles'

export default {
    name: 'Rire',

    components: {
        UiCard
    },

    computed: {
        articles() {
            return Articles.reverse();
        }
    }
}
</script>
