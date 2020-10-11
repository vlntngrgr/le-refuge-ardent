<template>
    <main class="musiques">
        <h1 class="title">Musiques Chill / Relax</h1>

        <div class="description"></div>

        <div class="list">
            <a
                :key="m.key"
                class="list__item link"
                target="_blank"
                v-for="m in musiquesSecond"
                :href="m.url"
            >{{ m.description }}</a>
        </div>
        
        <hr />

        <div class="list">
            <a
                :key="m.key"
                class="list__item link"
                target="_blank"
                v-for="m in musiques"
                :href="m.url"
            >{{ m.description }}</a>
        </div>
    </main>
</template>

<script>
import UiCard from '@/components/card'

import List from './list'
import ListSecond from './list2'

export default {
    name: 'MusiquesChill',

    components: {
        UiCard
    },

    computed: {
        musiques() {
            return List
        },

        musiquesSecond() {
            return ListSecond
        }
    }
}
</script>
