<template>
  <main class="memes">
    <h1 class="title">Troll Forever...</h1>
    <div class="description">
      <p>Quelques memes troll collectés sur le net</p>
    </div>

   <div 
      class="memes__items" 
      v-for="item in list" 
      :key="item.id">
      <img
        :alt="img.url"
        class="memes__item"
        @click.stop.prevent="openImage(img)"
        :key="img.url"
        :src="getURL(img.url)"
        v-for="img in item.Image[0]"
      />
    </div>

    <div
      @click.stop.prevent="closeImage"
      class="memes__selection"
      v-if="selected">
      <img :alt="selection.url" :src="getURL(selection.url)" />
    </div>

    <div class="signature">
      <h2 
        class="black" 
        v-html="`<b>WHITE</b>`"
      ></h2>
    </div>
  </main>
</template>

<script>
import MixinList from "@/mixins/list"

export default {
  name: "MemesTroll",

  mixins: [MixinList],

  data() {
    return {
      selected: false,
      selection: null,
    };
  },

  computed: {
    name() {
      return 'rire.memes.troll'
    }
  },

  methods: {
    closeImage() {
      this.selected = false;
      this.selection = null;
    },

    openImage(img) {
      if (this.selection !== null) {
        this.selection = null;
        this.selected = false;
      } else {
        this.selection = img;
        this.selected = true;
      }
    },

    getURL(path) {
      return 'http://localhost:1337' + path
    }
  },
};
</script>
