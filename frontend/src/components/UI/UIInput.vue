<script>
export default {
  name: 'UIInput',
  inheritAttrs: false,
};
</script>

<template>
  <label class="field" @click="checkType" :class="`field--${$attrs.type}`">
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="updateModelValue"
      class="field__input"
      :class="`field__input--${$attrs.type}`"
    >
    <span
      class="field__label"
      :class="[`field__label--${$attrs.type}`, {'visually-hidden': !label}]"
    >
      {{label}}
    </span>
  </label>
</template>

<script setup>
import { defineEmits } from 'vue';
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (e) => {
  emit('update:modelValue', e.target.value);
};

const checkType = (e) => {
  if (e.target.type === 'file' && !e.target.className.includes('field__input--file')) {
    e.preventDefault();
  }
};
</script>


<style lang="scss" scoped>
  .field  {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    margin-bottom: 1em;

    &--checkbox, &--radio {
      flex-direction: row;
      align-items: center;
      gap: 1em;
      margin-top: 1em;
      cursor: pointer;
    }

    &--file {
      position: relative;
      pointer-events: none;

      &::after {
        position: absolute;
        bottom: 0;
        display: block;
        display: inline-grid;
        width: 2.5em;
        height: 2.5em;
        background-color: $accent-input-background;
        border: 2px solid $accent-input-border;
        border-radius: 4px;
        place-items: center;
        content: 'file';
      }
    }
  }

  .field__input {
    min-height: 2rem;
    padding: 0.5em;
    font-size: 1em;
    background-color: #F5F8FA;
    border: 1px solid $accent-input-border;
    border-radius: 4px;

    &--checkbox, &--radio {
      all: unset;
      position: absolute;
      width: 1.2em;
      height: 1.2em;
      margin-right: -1.2em;
      color: $accent-blue;
      background-image: url('@/assets/images/checkbox/off.svg');
      appearance: none;
    }

    &[required] ~ .field__label::after {
      display: inline;
      color: red;
      white-space: nowrap;
      content: ' *';
    }

  }

  .field__input--checkbox {
    &:focus {
      background-image: url('@/assets/images/checkbox/off-focused.svg');
    }

    &:disabled {
      background-image: url('@/assets/images/checkbox/off-disabled.svg');
    }

    &:checked {
      background-image: url('@/assets/images/checkbox/on.svg');

      &:focus {
        background-image: url('@/assets/images/checkbox/on-focused.svg');
      }

      &:disabled {
        background-image: url('@/assets/images/checkbox/on-disabled.svg');
      }
    }

  }


  .field__input--file {
    position: relative;
    align-self: end;
    max-width: 12rem;
    pointer-events: initial;


    &::after {
      position: absolute;
      inset: 0;
      display: block;
      display: inline-grid;
      color: $accent-blue;
      font-weight: 700;
      background-color: white;
      border: 2px solid $accent-blue;
      border-radius: 4px;
      place-items: center;
      content: "Выбрать файл";
    }

    &:hover::after {
      color: white;
      background-color: $accent-blue;
      transition: background-color 0.1s ease-in .05s, color 0.1s ease-in .05s;
    }

    &:focus::after {
      color: white;
      background-color: $accent-blue;
    }

  }

  .field__label {
    order: -1;
    font-size: 1.2rem;

    &--checkbox, &--radio {
      order: 0;
      padding-left: 1.2em;
    }

  }

</style>

