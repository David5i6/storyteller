<i18n>
{
  "en":{
    "newbook":"New Book",
    "localStorage":"Local Browser Storage",
    "fileStorage":"File Storage"
  },
  "es":{
    "newbook":"Nuevo Libro",
    "localStorage":"Almacenamiento Local del Navegador",
    "fileStorage":"Almacenamiento en Ficheros"
  }
}
</i18n>

<template>
  <section class="section">
    <h3 class="title is-4">
      {{ $t('localStorage') }}
    </h3>

    <button class="button is-danger is-light" @click="newBook">
      <span class="icon"> <b-icon icon="book-plus" /> </span>
      <span>New Book</span>
    </button>
    <button class="button is-light" @click="loadBook">
      <span class="icon"> <b-icon icon="file-upload" /> </span>
      <span>Load Book</span>
    </button>
    <button class="button is-light" @click="saveBook">
      <span class="icon"> <b-icon icon="content-save" /> </span>
      <span>Save Book</span>
    </button>
    <br />
    <hr />
    <button class="button is-danger" @click="clearLocalStorage">
      <span class="icon"> <b-icon icon="eraser" /> </span>
      <span>Clear Local Storage</span>
    </button>

    <hr />
    <h3 class="title is-4">
      {{ $t('fileStorage') }}
    </h3>

    <button class="button is-light" @click="onImportBook">
      <span class="icon"> <b-icon icon="upload" /> </span>
      <span>Import Book</span>
    </button>
    <button class="button is-light" @click="exportBook">
      <span class="icon"> <b-icon icon="download" /> </span>
      <span>Export Book</span>
    </button>
    <input
      ref="fileUploadInput"
      type="file"
      style="display: none"
      accept="application/json"
      @change="onImportBookFromFile"
    />
  </section>
</template>

<script>
export default {
  name: 'HomePage',

  components: {},
  methods: {
    newBook() {
      this.$store.commit('bookstore/new')
    },
    loadBook() {
      this.$store.commit('bookstore/restore')
    },
    saveBook() {
      this.$store.commit('bookstore/persist')
    },
    clearLocalStorage() {
      if (
        window.confirm(
          '¿ Desea borrar el contenido almacenado localmente en el navegador ?'
        )
      ) {
        localStorage.clear()
        window.location.reload()
      }
    },
    exportBook() {
      const blob = new Blob(
        [JSON.stringify(this.$store.state.bookstore.book)],
        {
          type: 'application/pdf',
        }
      )
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = this.$store.state.bookstore.book.title + '.json'
      link.click()
      URL.revokeObjectURL(link.href)
    },
    onImportBook() {
      this.$refs.fileUploadInput.click()
    },
    onImportBookFromFile(event) {
      const files = event.target.files
      const fr = new FileReader()
      fr.addEventListener('load', () => {
        const book = JSON.parse(fr.result)
        this.$store.commit('bookstore/setBook', book)
        // Reseteamos porque si no no hay "change"
        this.$refs.fileUploadInput.value = ''
      })
      fr.readAsText(files[0])
    },
  },
}
</script>
