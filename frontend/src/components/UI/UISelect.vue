<script>
export default {
  name: 'UISelect',
  inheritAttrs: false,
};
</script>

<template>
  <!-- eslint-disable vue/no-deprecated-slot-attribute -->
  <label class="field">
    <selectmenu
      class="field__selectmenu"
      v-if="browserSupport"
      v-bind="$attrs"
      @change="handleChange"
      :value="modelValue"
    >
      <button
        class="field__button"
        type="button"
        slot="button"
        behavior="button"
      >
        <span
          class="field__selected"
          behavior="selected-value"
          slot="selected-value"
        />
        <svg class="field__icon" width="16" height="16" viewBox="0 0 16 16">
          <path
            d="M1 5 l7 7 L15 5"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="field__popover">
        <UIInput
          v-if="$props.search"
          class="field__search"
          v-model="searchValue"
          type="search"
        />
        <option
          class="field__initial"
          style="display: none;"
          selected
          disabled
        >
          {{initial}}
        </option>
        <option
          v-for="option in searchedOptions"
          :value="option.value"
          :class="['field__option', {'field__option--filtered': option.isFiltered}]"
          :key="option.value"
        >
          {{option.label}}
        </option>
      </div>
    </selectmenu>
    <!-- fallback -->
    <select
      v-else
      class="field__select"
      v-bind="$attrs"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option class="field__initial" selected disabled style="display: none;">
        {{initial}}
      </option>
      <option class="field__option" :key="option.value" :value="option.value" v-for="option in options">
        {{option.label}}
      </option>
    </select>
    <span class="field__label">
      {{label}}
    </span>
  </label>
</template>

<script setup>
import {ref, computed} from 'vue';

const $props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Object,
    default: () => {},
    required: true,
  },
  initial: {
    type: String,
    default: '',
  },
  search: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const $emit = defineEmits(['update:modelValue']);

const searchValue = ref('');
const selected = ref('');

const handleChange = (e) => {
  $emit('update:modelValue', e.target.value);
  selected.value = e.target.value;
};

const browserSupport = computed(() => {
  return window.HTMLSelectMenuElement !== undefined;
});

const searchedOptions = computed(() => {
  return $props.options.map((option) => {
    const isFiltered = !option.label.toLowerCase().includes(searchValue.value.trim().toLowerCase());
    return {
      label: option.label,
      value: option.value,
      isFiltered,
    };
  });
});

</script>


<style lang="scss" scoped>

  $accent-dark: #33475b;

  .field  {
    display: flex;
    flex-direction: column;
    gap: .25rem;
    margin-bottom: 1rem;
  }

  .field__selectmenu {
    position: relative;
    min-height: 2.5rem;

    &[required] ~ .field__label::after {
      content: ' *';
      color: red;
    }

    &[disabled] {
      filter: grayscale(1) opacity(0.5);
    }
  }

  .field__label {
    order: -1;
    font-size: 1.2rem;
  }

  .field__button {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    color: $accent-gray;
    font-size: 1.25em;
    text-align: start;
    background-color: #F5F8FA;
    border: 1px solid $accent-input-border;
    border-radius: 4px;
    appearance: none;
  }

  .field__icon {
    z-index: 2;
    width: 1rem;
    height: 1rem;
    color: $accent-dark;
  }

  .field__selected {
    z-index: 1;
    color: $accent-dark;
  }

  .field__search {
    margin-inline: 1rem;
    position: absolute;
    top: 0;
  }

  .field__initial {
    color: $accent-gray
  }

  .field__popover {
    display: flex;
    flex-direction: column;
    max-height: 40vh;
    overflow-y: scroll;
  }


  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .field__selectmenu:open .field__button .field__icon {
    transform: rotateX(180deg);
    transition: transform .2s ease-in-out;
  }

  .field__option {
    min-height: 2.5rem;
    margin-bottom: .25rem;
    padding: 0.75rem 0;
    font-size: 1.25em;
    margin-inline: .25rem;
    padding-inline: .5rem;

    &:hover {
      border-radius: 4px;
    }

    &--filtered {
      display: none;
    }
  }

  .field__select {
    min-height: 2.5rem;
    padding: 0.5rem 1rem;
    color: $accent-dark;
    font-size: 1.3em;
    background-color: #F5F8FA;
    border: 1px solid $accent-input-border;
    border-radius: 4px;
    appearance: none;

    &[required] ~ .field__label::after {
      display: inline;
      color: red;
      white-space: nowrap;
      content: ' *';
    }
  }
</style>
