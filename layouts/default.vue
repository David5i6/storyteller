<template>
  <div>
    <nav
      class="navbar header has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar">
        <!--
        <a class="navbar-item" href="/">
          <img src="~assets/buefy.png" alt="Buefy" height="28" />
        </a>
        -->
        <p class="title is-1">📖 {{ getTitle }}</p>
        <!--
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>-->
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of beginitems" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>

        <!--
        <p class="menu-label is-hidden-touch">Capítulos y secciones</p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of $store.state.bookstore.book.chapters"
            :key="key"
          >
            <nuxt-link :to="'/chapter/' + key" exact-active-class="is-active">
              <b-icon icon="book" /> {{ item.title }}
            </nuxt-link>

            <ul>
              <li v-for="(sitem, skey) of item.sections" :key="skey">
                <nuxt-link
                  :to="'/chapter/' + key + '/' + skey"
                  exact-active-class="is-active"
                >
                  <b-icon icon="bookmark" /> {{ sitem.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        -->

        <p class="menu-label is-hidden-touch">Etiquetas</p>
        <ul class="menu-list">
          <li v-for="(item, key) of enditems" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beginitems: [
        {
          title: 'Home',
          icon: 'home',
          to: this.localePath({ name: 'index' }),
        },
        {
          title: 'Libro',
          icon: 'book-open',
          to: this.localePath({ name: 'book' }),
        },
        {
          title: 'Acerca de...',
          icon: 'account-question',
          to: this.localePath({ name: 'about' }),
        },
      ],
      enditems: [
        {
          title: 'Personajes',
          icon: 'account-multiple',
          to: this.localePath({ name: 'characters' }),
        },
        {
          title: 'Objetos',
          icon: 'duck',
          to: this.localePath({ name: 'objects' }),
        },
        {
          title: 'Lugares',
          icon: 'island',
          to: this.localePath({ name: 'places' }),
        },
        {
          title: 'Líneas Temporales',
          icon: 'timeline-clock',
          to: this.localePath({ name: 'timelines' }),
        },
      ],
    }
  },
  head() {
    return this.$nuxtI18nHead()
  },

  computed: {
    getTitle() {
      return this.$store.state.bookstore.book.title
    },
  },

  mounted() {
    this.$store.commit('bookstore/restore')
  },
  methods: {
    changeBookTitle(newTitle) {
      this.$store.state.bookstore.book.title = newTitle
    },
  },
}
</script>
