<i18n>
{
  "en":{
    "chapter":"Chapter",
    "brief":"Brief"
  },
  "es":{
    "chapter":"Capítulo",
    "brief":"Resumen"
  }
}
</i18n>
<template>
  <section class="section">
    <div class="field">
      <label class="label">{{ $t('chapter') }}</label>
      <div class="control">
        <input
          :value="currentChapter.title"
          class="input"
          type="text"
          :placeholder="$t('chapter')"
          @change="setChapterTitle"
        />
      </div>
    </div>
    <hr />
    <label class="label">{{ $t('brief') }}</label>
    <b-input type="textarea" :value="brief" @blur="setChapterBrief"></b-input>
  </section>
</template>
<script>
export default {
  computed: {
    currentChapter() {
      return this.$store.state.bookstore.book.chapters[
        this.$route.params.chapter
      ]
    },
    brief() {
      return this.currentChapter.brief
    },
  },

  methods: {
    setChapterTitle(evt) {
      this.$store.commit('bookstore/setChapterTitle', {
        index: this.$route.params.chapter,
        title: evt.target.value,
      })
    },
    setChapterBrief(evt) {
      this.$store.commit('bookstore/setChapterBrief', {
        index: this.$route.params.chapter,
        brief: evt.target.value,
      })
    },
  },
}
</script>
