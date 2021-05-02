export default {
  data() {
    return {
      loading: true,
      limit: -1,
      list: null,
      page: 1,
    }
  },

  methods: {
    onPage(page) {
      this.page = page;
      this.reset();
    },

    reset() {
      this.loading = true;
      this.$find({ page: this.page, limit: this. limit, name: this.name })
        .then((list) => this.list = list)
        .catch((e) => isDev && console.error(e))
        .finally(() => this.loading = false)
    }
  },

  mounted() {
    this.reset()
  }
}