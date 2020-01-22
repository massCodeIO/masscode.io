<template>
  <button class="app-button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },

  data () {
    return {}
  }
}
</script>

<style lang="scss">
.app-button {
  display: inline-block;
  border: 1px solid var(--color-primary);
  border-radius: 3px;
  padding: 0 24px;
  outline: none;
  font-size: var(--text-sm);
  font-weight: 600;
  height: 40px;
  transition: all 0.3s;
  cursor: pointer;
  background-color: var(--color-primary);
  color: #fff;
  &:hover {
    background-color: var(--color-primary-hover);
    border-color: var(--color-primary-hover);
    color: #fff;
  }
  &[plain] {
    background-color: transparent;
    color: var(--color-primary);
    &:hover {
      // background-color: var(--color-primary);
      color: #fff;
      border-color: var(--color-primary);
    }
  }
  // &:hover {
  //   background-color: var(--color-primary);
  //   color: #fff;
  // }
  // &--filled {
  //   background-color: var(--color-primary);
  //   color: #fff;
  //   &:hover {
  //     background-color: var(--color-primary-hover);
  //     color: #fff;
  //   }
  // }
}
</style>
