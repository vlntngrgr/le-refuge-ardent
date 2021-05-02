<template>
  <main 
    class="chronique"
    v-if="!loading">
    <h1 
      class="title" 
      v-html="item.Titre"
    ></h1>
    
    <h1 
      class="subtitle" 
      v-if="hasSubtitle" 
      v-html="item.SousTitre"
    ></h1>

    <div 
      class="article" 
      v-html="item.Contenu"
    ></div>

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
      ><back class="button__icon" /> Retour</button>
    </div>
  </main>
</template>

<script>
import Back from "@/components/svg/arrow";
import MixinItem from "@/mixins/item";
import UiCard from "@/components/card";

export default {
  name: "Rire",

  components: {
    UiCard,
    Back,
  },

  mixins: [MixinItem],

  computed: {
    hasSubtitle() {
      return this.item.SousTitre !== "null"
    },

    name() {
      return 'rire.chronique'
    },
  },

  methods: {
    onBack() {
      this.$router.push({ name: "rire-chroniques" })
    }
  },
};
</script>
