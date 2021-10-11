<template>
  <div class="description lecteur">
    <h3 v-if="hasSelection">{{ selection.Titre }} <br /><span class="lent">Peut prendre du temps pour charger, patientez quelques secondes :)</span></h3>
    
    <h3 v-else>Lecteur: Aucune méditation selectionnée</h3>

    <ui-loader v-if="loadingAudio" />

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
</template>

<script>
import UiLoader from '../loader'

export default {
  name: "AudioReader",

  components: {
    UiLoader
  },

  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>