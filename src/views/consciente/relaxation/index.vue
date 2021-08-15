<template>
  <div>
    <h1 class="title">Relaxation</h1>

    <div class="description lecteur">
      <h3 v-if="hasSelection">
        {{ selection.Titre }} <br /><span class="lent">Peut prendre du temps pour charger, patientez quelques secondes :)</span></h3>
      <h3 v-else>Lecteur: Aucune relaxation selectionnée</h3>
    
      <div v-if="loadingAudio || loading" class="loader">
        <div class="body"></div>
      </div>

       <div class="lecteur__actions">
        <button 
          class="action"
          :disabled="loadingAudio"  
          @click="play"
        >play</button>
        
        <button 
          class="action" 
          :disabled="loadingAudio" 
          @click="pause"
        >pause</button>

        <button 
          class="action" 
          :disabled="loadingAudio" 
          @click="stop"
        >stop</button>
      </div>
    </div>

    <div class="list">
      <ui-card
        class="list__item"
        size="small"
        :disabled="loadingAudio || loading"
        v-for="a in list"
        :key="a.Titre"
        @click="onSelect(a)">
        <template v-slot:header>{{ a.Titre }}</template>
      </ui-card>
    </div>
  </div>
</template>

<script>
import { Howl } from "howler";
import MixinList from "@/mixins/list";
import UiCard from "@/components/card";

export default {
  name: "Meditation",

  components: {
    UiCard,
  },

  mixins: [MixinList],

  data() {
    return {
      reader: null,
      selection: null,
      state: null,
      loadingAudio: false
    };
  },

  computed: {
    hasSelection() {
      return this.selection !== null && this.reader !== null;
    },

    name() {
      return "conscience.relaxation";
    },
  },

  methods: {
    play() {
      if (this.hasSelection && this.state === "loaded") {
        this.reader.play();
        this.state = "playing";
      } else if (this.hasSelection && this.state === "paused") {
        this.reader.play();
        this.state = "playing";
      }
    },

    stop() {
      if (this.hasSelection && ["loaded", "playing", "paused"].includes(this.state)) {
        this.reader.stop();
        this.selection = null;
        this.reader = null;
        this.state = null;
      }
    },

    pause() {
      if (this.hasSelection && this.state === "playing") {
        this.reader.pause();
        this.state = "paused";
      }
    },

    onSelect(value) {
      if (this.selection !== null) {
        this.reader.stop();
      }

      this.loadingAudio = true
      this.selection = value
      console.log(this.selection.Media[0])
      this.reader = new Howl({
        src: ['https://admin.le-refuge-ardent.com' + this.selection.Media[0].url],
        onload: () => {
          this.loadingAudio = false;
          this.state = "loaded";
        },
        
      });
    },
  },
  beforeRouteLeave(to, from, next) {
    if(this.selection != null) {
      this.reader.stop();
    }
    next()
  }
};
</script>
