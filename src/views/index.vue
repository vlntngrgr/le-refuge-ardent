<template>
  <main class="accueil">
    <div class="accueil__animation">
      <h2 class="first">Magique...</h2>
      <h2 class="second">Surprenant...</h2>
      <h2 class="third">Décalé...</h2>
      <h2 class="fourth">Bienvenue au Refuge Ardent</h2>
      <h2 class="fifth">Assieds-toi, fais-toi un thé, et profite de l'ambiance</h2>
    </div>

    <div 
      class="accueil__news" 
      v-if="hasNews">
      <h3 class="news__title">Nouveautés</h3>
      <ul class="news__items">
        <router-link
          tag="li"
          class="news__item"
          v-for="n in news"
          :to="n.route"
        :key="n.id"
      >{{ n.content }}</router-link>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "Accueil",

  computed: {
    hasNews() {
      return this.news.length > 0;
    },

    news() {
      return [];
    },
  },
};
</script>
