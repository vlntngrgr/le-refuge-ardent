<template>
    <main class="musiques">
        <h1 class="title">Musiques Troll / Révolutionnaire</h1>
        
        <div class="description">
            De la musique pour ceux qui ont des (sérieux) doutes sur nos systèmes, nos sociétés et la marche du monde en général, mais qui n’ont pas (encore) envie de se flinguer… 
        </div>

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

export default {
    name: 'MusiquesTroll',

    components: {
        UiCard
    },

    computed: {
        musiques() {
            return List;
        }
    }
}
</script>
