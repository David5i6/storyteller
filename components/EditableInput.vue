<template>
  <div>
    <input
      v-if="edit"
      v-focus=""
      class="input"
      type="text"
      :value="valueLocal"
      @blur="
        valueLocal = $event.target.value
        edit = false
        $emit('input', valueLocal)
      "
      @keyup.enter="
        valueLocal = $event.target.value
        edit = false
        $emit('input', valueLocal)
      "
    />
    <p v-else class="title is-2" @click="edit = true">
      {{ valueLocal }}
    </p>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      edit: false,
      valueLocal: this.value,
    }
  },

  watch: {
    value() {
      this.valueLocal = this.value
    },
  },
}
</script>
