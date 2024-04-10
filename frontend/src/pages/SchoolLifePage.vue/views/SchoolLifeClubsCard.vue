<template>
  <RouterLink to="#">
    <div class="clubs-card">
      <img :src="assets(content.image)" alt="Club image" class="clubs-card__image">
      <div class="clubs-card__text-wrapper">
        <h3 class="clubs-card__tagline">{{content.heading}}</h3>
        <p class="clubs-card__text">{{content.text}}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { assets } from '@/main.js';
</script>

<script>
import { RouterLink } from 'vue-router';

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
  $wrapper: var(--wrapper);
  $color-blue: #1333ab;
  $color-black: #000000;

  .clubs-card__image {
    display: block;
    width: calc(100% - 3rem);
    height: auto;
    margin-top: -7rem;
  }

  .clubs-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%);
    transition: box-shadow 150ms ease-in;

    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 20%), 0 7px 10px rgb(0 0 0 / 20%);

      & .clubs-card__image {
        transform:  scale(1.02);
        transition: transform 200ms ease;
      }
    }
  }

  .clubs-card__tagline {
    margin-top: 0.5em;
    padding: 0 1.5rem;
    color: $color-black;
    font-weight: 700;
    font-size: 1.5em;
    font-family: "PT Sans", system-ui, -apple-system, sans-serif;
    font-style: normal;
    line-height: 1.1;
  }

  .clubs-card__text {
    margin-top: 1em;
    padding: 0 1.5rem 3rem;
    color: $color-black;
    font-weight: 400;
    font-size: 1em;
    font-family: "PT Sans", system-ui, -apple-system, sans-serif;
    font-style: normal;
    line-height: 1.3;
  }
</style>
