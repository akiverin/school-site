<template>
  <RouterLink to="#">
    <div class="sports-card">
      <img :src="assets(content.image)" alt="Sport-club image" class="sports-card__image">
      <h3 class="sports-card__tagline">{{content.heading}}</h3>
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
};
</script>

<style lang="scss">
  $wrapper: var(--wrapper);
  $color-blue: #1333ab;
  $color-black: #000000;

  .sports-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 26rem;
    height: 100%;
    margin: 0 0.5rem 2rem;
    text-decoration: none;
    transition: box-shadow 150ms ease-in;

    @media screen and (width <= 490px) {
      max-width: 20rem;
    }
  }

  .sports-card__image {
    max-width: 26rem;
    height: auto;

    @media screen and (width <= 490px) {
      max-width: 20rem;
    }
  }

  .sports-card__tagline {
    margin-top: 0.5em;
    color: $color-black;
    font-weight: 700;
    font-size: 1.5em;
    font-family: "PT Sans", system-ui, -apple-system, sans-serif;
    font-style: normal;
    line-height: 1.1;
  }
</style>
