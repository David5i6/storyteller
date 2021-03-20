<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-icon" v-if="icon">
        <b-icon :icon="icon" />
      </p>
      <p class="card-header-title has-text-grey">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <div class="content has-text-centered">
        <slot></slot>
      </div>
    </div>
    <!--
    <footer class="card-footer">
      <div class="card-footer-item">
        <span> Footer </span>
      </div>
    </footer>-->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
