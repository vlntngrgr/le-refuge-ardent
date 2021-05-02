export default {
  data() {
    return {
      loading: true,
      item: null,
    }
  },

  methods: {
    reset() {
      this.loading = true;
      this.$view({ id: this.$route.params.id, name: this.name })
        .then((item) => this.item = item)
        .catch((e) => isDev && console.error(e))
        .finally(() => this.loading = false)
    }
  },

  mounted() {
    this.reset()
  }
}