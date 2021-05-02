<template>
  <main
    class="chroniques"
    v-if="!loading">
    <h1 class="title">Petites chroniques de la Wallonie profonde</h1>

    <div class="description">
      <p>Citoyen(ne)s Wallon(ne)s et étrangers-ères, mères de famille, employé(e)s de bureau, adolescent(e)s affamé(e)s, chômeurs, retraité(e)s, anciens sportifs, anciennes étoiles, buveurs, fumeuses, lecteurs, peureux et bon-vivants en tout genre…</p>
      <p>Voici le fruit de mes réflexions déjantées et de maintes observations. Voici la description ordinaire mais effrayante de mon quotidien de jeune, de femme, tour à tour étudiante, demandeuse d’emploi, employée, écrivaine, bénévole dans notre versant francophone et plus accidenté du plat pays.</p>
      <p>Voici (roulement de tambours), en exclusivité, <span class="title__highlight">Les petites chroniques de la Wallonie Profonde</span> (terre prochainement indépendante) !</p>
    </div>

    <div class="list">
      <router-link
        v-for="a in list"
        :key="a.Titre"
        tag="div"
        class="list__item link"
        :to="{ name: 'rire-chronique', params: { id: a.id } }"
      >{{ a.Titre }} <span class="-right">Ajouté le {{ new Date(a.Date).toLocaleDateString() }}</span></router-link>
    </div>
  </main>
</template>

<script>
import MixinList from "@/mixins/list";
import UiCard from "@/components/card";

export default {
  name: "Rire",

  components: {
    UiCard,
  },

  mixins: [MixinList],

  computed: {
    name() {
      return 'rire.chronique'
    }
  },
};
</script>
