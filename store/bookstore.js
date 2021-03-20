import Vue from 'vue'

function emptyNewBook() {
  return {
    title: 'Untitled book',
    chapters: [emptyChapter()],
  }
}

function emptySection() {
  return {
    title: 'Section',
    text: '',
  }
}

function emptyChapter() {
  return {
    title: 'Chapter',
    brief: '',
    sections: [emptySection()],
  }
}

export const state = () => ({
  book: emptyNewBook(),
})

export const mutations = {
  set(state, book) {
    state.book = book
  },

  addChapter(state) {
    state.book.chapters.push(emptyChapter())
  },

  moveChapterUp(state, chapterIndex) {
    const prevIndex = chapterIndex + 1
    const tmp = state.book.chapters[prevIndex]
    Vue.set(state.book.chapters, prevIndex, state.book.chapters[chapterIndex])
    Vue.set(state.book.chapters, chapterIndex, tmp)
    console.log('Subiendo el elemento: ' + chapterIndex)
  },

  moveChapterDown(state, chapterIndex) {
    const prevIndex = chapterIndex - 1
    const tmp = state.book.chapters[prevIndex]
    Vue.set(state.book.chapters, prevIndex, state.book.chapters[chapterIndex])
    Vue.set(state.book.chapters, chapterIndex, tmp)
    console.log('Subiendo el elemento: ' + chapterIndex)
  },

  addSection(state, chapterIndex) {
    state.book.chapters[chapterIndex].sections.push(emptySection())
  },

  setSectionTitle(state, sectionIndexAndTitle) {
    const { chapterIndex, sectionIndex, title } = sectionIndexAndTitle
    state.book.chapters[chapterIndex].sections[sectionIndex].title = title
  },
  setSectionText(state, sectionIndexAndTitle) {
    const { chapterIndex, sectionIndex, text } = sectionIndexAndTitle
    console.log(text)
    state.book.chapters[chapterIndex].sections[sectionIndex].text = text
  },

  setChapterTitle(state, chapterIndexAndTitle) {
    const { index, title } = chapterIndexAndTitle
    state.book.chapters[index].title = title
  },
  setChapterBrief(state, chapterIndexAndBrief) {
    const { index, brief } = chapterIndexAndBrief
    state.book.chapters[index].brief = brief
  },

  setTitle(state, newTitle) {
    state.book.title = newTitle
  },

  setBook(state, book) {
    state.book = book
  },

  new(state) {
    state.book = emptyNewBook()
  },

  persist(state) {
    window.localStorage.setItem('storybook-book', JSON.stringify(state.book))
  },

  restore(state) {
    state.book = JSON.parse(window.localStorage.getItem('storybook-book'))
  },
}
