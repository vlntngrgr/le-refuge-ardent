<template>
  <main 
    class="story"
    v-if="!loading">
    <h1 class="title">{{ title }}</h1>

    <div class="description">
      <component
        v-for="(c, i) in introduction"
        :key="i"
        :is="c.tag"
        v-html="c.value"
      />
    </div>

    <details
      class="chapter"
      :open="isOpen(j)"
      v-for="(c, j) in chapters"
      :key="j">
      <summary 
        class="chapter__title" 
        @click.stop.prevent="toggle(c, j)"
      >{{ c.Chapitre }} ({{ c.Partie }})<span class="date">Posté le {{ new Date(c.Date).toLocaleDateString() }}</span></summary>

      <div 
        class="article"
        v-html="c.Contenu"></div>
    </details>

    <div class="signature">
      <h2 
        :class="`red`" 
        v-html="`BLUE`"
      ></h2>
    </div>

    <div class="back">
      <button 
        class="button__back" 
        @click="onBack"
      ><back class="button__icon" />Retour</button>
    </div>
  </main>
</template>

<script>
import Back from "@/components/svg/arrow";
import MixinList from "@/mixins/list";
import UiCard from "@/components/card";

export default {
  name: "Fantasy2100",

  components: {
    UiCard,
    Back,
  },

  mixins: [MixinList],

  data() {
    return {
      selected: false,
      selection: null,
    };
  },

  computed: {
    chapters() {
      return this.list;
    },

    introduction() {
      return [
        {
            tag: 'p',
            value: 'Battus et humiliés, leur suprématie d’antan semblable à un rêve lointain dont les dernières bribes s’échappent à regret, les hommes ne sont plus que quelques millions.'
        },
        {
            tag: 'p',
            value: 'La terre a changé de visage. Elle abrite aujourd’hui les Lastours, descendants des animaux du 20ème siècle, rendus méconnaissables par des mutations successives. Après 30 ans de guerre, la déesse Gaia et ses sbires règnent en maîtres.'
        },
        {
            tag: 'p',
            value: 'Dans une des dernières poches d’humanité, un soleil rouge se lève…'
        }
      ]
    },

    name() {
      return 'fantasy.2100'
    },

    title() {
      return '2100'
    }
  },

  methods: {
    toggle(chapter, id) {
      if (this.selection !== null) {
        if (this.selection === id) {
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
        name: "evasion-fantasy",
      });
    },
  },
};
</script>
