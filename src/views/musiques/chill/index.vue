<template>
  <main 
    class="musiques" 
    v-if="!loading">
    <h1 class="title">Musiques Chill / Relax</h1>

    <div class="list">
      <a
        :key="m.key"
        class="list__item link"
        target="_blank"
        v-for="m in list"
        :href="m.url"
      >{{ m.Titre }} <span class="-right">Ajoutée le {{ new Date(m.Date).toLocaleDateString() }}</span></a>
    </div>
  </main>
</template>

<script>
import MixinList from "@/mixins/list";
import UiCard from "@/components/card";

export default {
  name: "MusiquesChill",

  components: {
    UiCard,
  },

  mixins: [MixinList],

  computed: {
    name() {
      return "musiques.chill";
    },
  },
};
</script>
