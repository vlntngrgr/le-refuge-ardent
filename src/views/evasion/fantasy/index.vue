<template>
  <main class="musiques">
    <h1 class="title">Fantasy</h1>

    <div class="description"></div>

    <div class="list">
      <router-link
        tag="div"
        v-for="i in list"
        :key="i.title"
        class="list__item link"
        :to="{ name: i.link }"
        v-html="i.title"
      />
    </div>
  </main>
</template>

<script>
import UiCard from "@/components/card";

export default {
  name: "fantasy",

  components: {
    UiCard,
  },

  computed: {
    list() {
      return [
        {
            title: '2100',
            description: '',
            link: 'evasion-fantasy-2100'
        }
      ]
    },
  },
};
</script>
