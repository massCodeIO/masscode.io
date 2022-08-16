<template>
  <span class="app-link">
    <a
      class="app-link"
      :href="href"
      :target="external ? '_blank' : null"
      :rel="external ? 'noopener noreferrer' : null"
    >
      <slot />
      <template v-if="external">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          class="icon"
          data-v-e3f91ec3=""
        >
          <path
            d="M0 0h24v24H0V0z"
            fill="none"
          />
          <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
        </svg>
      </template>
    </a>
  </span>
</template>

<script setup lang="ts">
interface Props {
  href: string
  external?: boolean
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.app-link {
  display: inline-flex;
  a {
    color: var(--vp-c-brand);
  }

  .icon {
    width: 12px;
    fill: var(--vp-c-gray-light-2);
  }
}
</style>
