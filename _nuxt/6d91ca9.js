(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(o,t){o.exports=function(o){o.options.__i18n=o.options.__i18n||[],o.options.__i18n.push('{"en":{"newbook":"New Book","localStorage":"Local Browser Storage","fileStorage":"File Storage"},"es":{"newbook":"Nuevo Libro","localStorage":"Almacenamiento Local del Navegador","fileStorage":"Almacenamiento en Ficheros"}}'),delete o.options._Ctor}},226:function(o,t,e){"use strict";var n=e(214),c=e.n(n);t.default=c.a},235:function(o,t,e){"use strict";e.r(t);e(11),e(31),e(32),e(158);var n={name:"HomePage",components:{},methods:{newBook:function(){this.$store.commit("bookstore/new")},loadBook:function(){this.$store.commit("bookstore/restore")},saveBook:function(){this.$store.commit("bookstore/persist")},clearLocalStorage:function(){window.confirm("¿ Desea borrar el contenido almacenado localmente en el navegador ?")&&(localStorage.clear(),window.location.reload())},exportBook:function(){var o=new Blob([JSON.stringify(this.$store.state.bookstore.book)],{type:"application/pdf"}),link=document.createElement("a");link.href=URL.createObjectURL(o),link.download=this.$store.state.bookstore.book.title+".json",link.click(),URL.revokeObjectURL(link.href)},onImportBook:function(){this.$refs.fileUploadInput.click()},onImportBookFromFile:function(o){var t=this,e=o.target.files,n=new FileReader;n.addEventListener("load",(function(){var o=JSON.parse(n.result);t.$store.commit("bookstore/setBook",o),t.$refs.fileUploadInput.value=""})),n.readAsText(e[0])}}},c=e(39),l=e(226),component=Object(c.a)(n,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("section",{staticClass:"section"},[e("h3",{staticClass:"title is-4"},[o._v("\n    "+o._s(o.$t("localStorage"))+"\n  ")]),o._v(" "),e("button",{staticClass:"button is-danger is-light",on:{click:o.newBook}},[e("span",{staticClass:"icon"},[e("b-icon",{attrs:{icon:"book-plus"}})],1),o._v(" "),e("span",[o._v("New Book")])]),o._v(" "),e("button",{staticClass:"button is-light",on:{click:o.loadBook}},[e("span",{staticClass:"icon"},[e("b-icon",{attrs:{icon:"file-upload"}})],1),o._v(" "),e("span",[o._v("Load Book")])]),o._v(" "),e("button",{staticClass:"button is-light",on:{click:o.saveBook}},[e("span",{staticClass:"icon"},[e("b-icon",{attrs:{icon:"content-save"}})],1),o._v(" "),e("span",[o._v("Save Book")])]),o._v(" "),e("br"),o._v(" "),e("hr"),o._v(" "),e("button",{staticClass:"button is-danger",on:{click:o.clearLocalStorage}},[e("span",{staticClass:"icon"},[e("b-icon",{attrs:{icon:"eraser"}})],1),o._v(" "),e("span",[o._v("Clear Local Storage")])]),o._v(" "),e("hr"),o._v(" "),e("h3",{staticClass:"title is-4"},[o._v("\n    "+o._s(o.$t("fileStorage"))+"\n  ")]),o._v(" "),e("button",{staticClass:"button is-light",on:{click:o.onImportBook}},[e("span",{staticClass:"icon"},[e("b-icon",{attrs:{icon:"upload"}})],1),o._v(" "),e("span",[o._v("Import Book")])]),o._v(" "),e("button",{staticClass:"button is-light",on:{click:o.exportBook}},[e("span",{staticClass:"icon"},[e("b-icon",{attrs:{icon:"download"}})],1),o._v(" "),e("span",[o._v("Export Book")])]),o._v(" "),e("input",{ref:"fileUploadInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:o.onImportBookFromFile}})])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);t.default=component.exports}}]);