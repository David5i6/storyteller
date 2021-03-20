<i18n>
{
  "en":{
    "newbook":"New Book"
  },
  "es":{
    "newbook":"Nuevo Libro"
  }
}
</i18n>

<template>
  <section class="section">
    <article class="message is-info">
      <div class="message-header">
        <p>Información</p>
      </div>
      <div class="message-body">
        <p>
          Los libros se guardan en un alamacenamiento local del navegador web.
          Al cambiar de navegador la biblioteca de libros cambiará con el. Se
          recomienda realizar una copia de seguridad cada cierto tiempo.
        </p>
      </div>
    </article>
    <div>
      <button class="button" @click="simulateLoad">Load</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  components: {},
  methods: {
    simulateLoad() {
      this.$store.commit('bookstore/set', {
        title: this.$t('newbook'),
      })
    },
  },
}
</script>
