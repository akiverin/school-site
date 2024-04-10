<template>
  <RouterLink to="#" class="events-card">
    <div class="events-card__cover">
      <img :src="assets(content.image)" class="events-card__image" alt="Image for event">
    </div>
    <p class="events-card__date">
      <span class="evant-card__day">{{content.day}}</span>{{content.month}}
    </p>
    <div class="events-card__info">
      <p class="events-card__section">
        {{content.section}}
      </p>
      <h4 class="events-card__name">
        {{content.name}}
      </h4>
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

  .events-card__cover {
    width: 100%;
    max-width: 812px;
    height: 100%;
    overflow: hidden;
  }

  .events-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .events-card__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    height: auto;
    padding: 24px;
    background-color: #FFFFFF;
  }

  .events-card__date {
    position: absolute;
    right:16px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 84px;
    height: 84px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1;
    text-align: center;
    background-color: #0C3777;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
  }

  .evant-card__day {
    font-weight: 700;
    font-size: 1.4rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1;
  }

  .events-card__section {
    color: #1333AB;
    font-weight: 700;
    font-size: 1rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .events-card__name {
    min-height: 38px;
    color: #000000;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.1;
  }

  .events-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 312px;
    height: 400px;
    text-decoration: none;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%);
    transition: box-shadow 150ms ease-in;

    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 20%), 0 7px 10px rgb(0 0 0 / 20%);

      & .events-card__image {
        transform:  scale(1.02);
        transition: transform 200ms ease;
      }
    }
  }

</style>
