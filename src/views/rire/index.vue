<template>
  <main class="rire">
    <h1 class="title">Rire</h1>

    <ui-card size="small" class="rire__choice">
      <template v-slot:header>
        <h3 class="title">Petites chroniques de la Wallonie profonde</h3>
      </template>
    </ui-card>

    <ui-card size="medium" class="rire__choice">
      <template v-slot:header>
        <h3 class="title">Memes</h3>
      </template>
      <template>
        <ui-card size="small" class="rire__choice">
          <template v-slot:header> Troll </template>
        </ui-card>
        <ui-card size="small" class="rire__choice">
          <template v-slot:header> Geek </template>
        </ui-card>
        <ui-card size="small" class="rire__choice">
          <template v-slot:header> Homme/Femme </template>
        </ui-card>
      </template>
    </ui-card>
  </main>
</template>

<script>
import UiCard from "@/components/card";

export default {
  name: "Rire",

  components: {
    UiCard,
  },
};
</script>
