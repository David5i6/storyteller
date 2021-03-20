<i18n>
{
  "en":{
    "section":"Section",
    "text":"Text"
  },
  "es":{
    "section":"Sección",
    "text":"Texto"
  }
}
</i18n>
<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      <b-icon icon="book" size="is-large" /> {{ currentChapter.title }}
    </h2>
    <div class="field">
      <label class="label">{{ $t('section') }}</label>
      <div class="control">
        <input
          :value="currentSection.title"
          class="input"
          type="text"
          :placeholder="$t('section')"
          @change="setSectionTitle"
        />
      </div>
    </div>
    <hr />
    <label class="label">{{ $t('text') }}</label>
    <b-input type="textarea" :value="text" @blur="setSectionText"></b-input>
  </section>
</template>
<script>
export default {
  computed: {
    text() {
      return this.currentSection.text
    },
    currentChapter() {
      return this.$store.state.bookstore.book.chapters[
        this.$route.params.sectionchapter
      ]
    },
    currentSection() {
      return this.currentChapter.sections[this.$route.params.section]
    },
  },
  mounted() {
    // Por ahora nada
  },

  methods: {
    setSectionTitle(evt) {
      this.$store.commit('bookstore/setSectionTitle', {
        chapterIndex: this.$route.params.sectionchapter,
        sectionIndex: this.$route.params.section,
        title: evt.target.value,
      })
    },
    setSectionText(evt) {
      this.$store.commit('bookstore/setSectionText', {
        chapterIndex: this.$route.params.sectionchapter,
        sectionIndex: this.$route.params.section,
        text: evt.target.value,
      })
    },
  },
}
</script>
