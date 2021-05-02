<template>
  <main>
    <h1 class="title">Auto-compassion</h1>

    <div class="list">
      <router-link
        v-for="a in list"
        :key="a.title"
        tag="div"
        class="list__item link"
        :to="{ name: 'compassion-article', params: { id: a.id } }"
        v-html="a.Titre"
      />
    </div>
  </main>
</template>

<script>
import UiCard from "@/components/card"
import MixinList from "@/mixins/list"

export default {
  name: "RireCompassionsList",

  components: {
    UiCard,
  },

  mixins: [MixinList],

  computed: {
    name() {
      return 'conscience.compassion'
    }
  }
};
</script>
