<script>
export default {
  name: 'TheForm',
};
</script>

<template>
  <form method="POST" :action="action">
    <slot name="fields" />
  </form>
  <slot name="buttons" />
</template>

<script setup>

defineProps({
  action: {
    type: String,
    required: true,
    default: '',
  },
});
</script>

<style lang="scss">
  .field {
    color: #33475B
  }
</style>
