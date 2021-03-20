<i18n>
{
  "en":{
    "title":"Title"
  },
  "es":{
    "title":"Título"
  }
}
</i18n>

<template>
  <section class="section">
    <div class="field">
      <label class="label">{{ $t('title') }}</label>
      <div class="control">
        <input
          :value="$store.state.bookstore.book.title"
          class="input"
          type="text"
          :placeholder="$t('title')"
          @change="setTitle"
        />
      </div>
    </div>
    <hr />
    <div class="columns is-multiline">
      <div
        v-for="(item, key) of $store.state.bookstore.book.chapters"
        :key="key"
        class="column is-3"
      >
        <ChapterCard :key="key" :index="key"> </ChapterCard>
      </div>
    </div>
    <button class="button is-success" @click="addChapter">
      <span class="icon">
        <b-icon icon="plus" />
      </span>
      <span>Añadir Capítulo</span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  components: {},

  computed: {
    getTitle() {
      return this.$store.state.bookstore.book.title
    },
  },
  methods: {
    addChapter(evt) {
      this.$store.commit('bookstore/addChapter')
    },

    setTitle(evt) {
      this.$store.commit('bookstore/setTitle', evt.target.value)
    },
    simulateLoad() {
      this.$store.commit('bookstore/set', {
        title: this.$t('newbook'),
      })
    },
  },
}
</script>
