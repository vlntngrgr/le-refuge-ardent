<template>
  <div>
    <div class="version" v-if="isDev">Development</div>

    <menu-primary 
      :header="{ label: 'Le refuge ardent' }" 
      :menu="menu" 
    />

    <main class="container">
      <ui-loader />
      <router-view />
    </main>

    <footer class="container">
      <div class="cookie">
        Ce site n’utilise pas de cookies… Sauf ceux double chocolat qui se sont
        sacrifiés pour que je puisse développer ledit site… Merci les gars
        #lesauveurs #tousensemble #lepleindenergie 
        <div class="legal">
          <router-link 
            class="link" 
            :to="{ name: 'mentions-legales' }"
          >Mentions légales</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import UiLoader from './components/loader'
import MenuPrimary from "./components/primary";
import MenuMood from "./components/mood";
import MixinMenu from "./mixins/menu";

export default {
  name: "BurningShellIndex",

  components: {
    UiLoader,

    MenuMood,
    MenuPrimary,
  },

  mixins: [
    MixinMenu,
  ],

  computed: {
    isDev() {
      return process.env.NODE_ENV === "development";
    },
  },

  mounted() {
    this.$visited()
  }
};
</script>
