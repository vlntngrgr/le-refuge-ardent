<template>
  <div class="ui-loader">
    <div 
      class="ui-loader__body -is-dot"
      v-if="isDot">
      <div class="ui-loader__dot"></div>
      <div class="ui-loader__dot"></div>
      <div class="ui-loader__dot"></div>
    </div>

    <div class="ui-loader__label">
      <slot>Chargement...</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiLoader',

  props: {
    layout: {
      type: String,
      validator: (value) => {
        return ['dot'].includes(value)
      },
      default: 'dot'
    }
  },

  computed: {
    isDot() {
      return this.layout === 'dot'
    }
  }
}
</script>
