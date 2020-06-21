<template>
    <main class="musiques">
        <h1 class="title">Musiques</h1>
        
        <div class="description">
            <p>Voici quelques catégories de musiques que nous voulions vous 
            proposer.</p>
        </div>

        <ui-card 
            size="small"
            class="choice"
            :route="{ name: 'musiques-chill' }">
            <template v-slot:header>
                <h3 class="title">Chill / Relax</h3>
            </template>
        </ui-card>

        <ui-card 
            size="small"
            class="choice"
            :route="{ name: 'musiques-troll' }">
            <template v-slot:header>
                <h3 class="title">Troll / Révolutionnaire</h3>
            </template>
        </ui-card>
    </main>
</template>

<script>
import UiCard from '@/components/card'

export default {
    name: 'Musiques',

    components: {
        UiCard
    },
}
</script>
