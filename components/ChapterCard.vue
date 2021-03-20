<template>
  <div class="card">
    <header class="card-header">
      <nuxt-link :to="chapterLink">
        <p class="card-header-icon">
          <b-icon icon="book" />
        </p>
      </nuxt-link>
      <p class="card-header-title has-text-grey">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <p class="notification">{{ item.brief }}</p>

        <progress class="progress" value="15" max="100">15%</progress>

        <p v-for="(sitem, skey) of item.sections" :key="skey">
          <nuxt-link :to="'/chapter/' + index + '/' + skey">
            <b-icon icon="bookmark" />
          </nuxt-link>
          {{ sitem.title }}
        </p>
      </div>
      <div class="content has-text-centered">
        <button class="button is-success" @click="addSection()">
          <span class="icon">
            <b-icon icon="plus" />
          </span>
          <span>Añadir Sección</span>
        </button>
      </div>
    </div>

    <footer class="card-footer">
      <div class="card-footer-item">
        <div class="buttons has-addons">
          <button
            class="button is-link is-light"
            :disabled="isFirst"
            @click="moveChapterDown"
          >
            <span class="icon">
              <b-icon icon="arrow-left" />
            </span>
          </button>

          <button class="button is-danger is-light">
            <span class="icon">
              <b-icon icon="delete" />
            </span>
          </button>
          <button
            class="button is-link is-light"
            :disabled="isLast"
            @click="moveChapterUp"
          >
            <span class="icon">
              <b-icon icon="arrow-right" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  computed: {
    item() {
      return this.$store.state.bookstore.book.chapters[this.index]
    },
    title() {
      return this.$store.state.bookstore.book.chapters[this.index].title
    },
    chapterLink() {
      return '/chapter/' + this.index
    },

    isFirst() {
      return this.index === 0
    },
    isLast() {
      return this.index === this.$store.state.bookstore.book.chapters.length - 1
    },
  },
  methods: {
    addSection() {
      this.$store.commit('bookstore/addSection', this.index)
    },
    moveChapterUp() {
      this.$store.commit('bookstore/moveChapterUp', this.index)
    },
    moveChapterDown() {
      this.$store.commit('bookstore/moveChapterDown', this.index)
    },
  },
}
</script>
