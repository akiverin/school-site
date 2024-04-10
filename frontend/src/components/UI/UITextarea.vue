<script>
export default {
  name: 'UITextarea',
  inheritAttrs: false,
};
</script>

<template>
  <label class="field">
    <textarea
      v-bind="$attrs"
      class="field__textarea"
      @input="update"
      :value="value"
    />
    <span class="field__label">
      {{label}}
    </span>
  </label>
</template>

<script setup>
import {ref} from 'vue';

const value = ref('');

const $emit = defineEmits(['update:modelValue']);

const update = (e) => {
  value.value = e.target.value;
  $emit('update:modelValue', value.value);
};

defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
});
</script>


<style lang="scss" scoped>
  .field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 1rem;
  }

  .field__label {
    order: -1;
    font-size: 1.5em;
  }

  .field__textarea {
    min-height: 3rem;
    padding: 0.5rem;
    font-size: 1.3em;
    background-color: #F5F8FA;
    border: 1px solid $accent-input-border;
    border-radius: 4px;
    resize: none;

    &[required] ~ .field__label::after {
      display: inline;
      color: red;
      white-space: nowrap;
      content: ' *';
    }
  }


</style>
