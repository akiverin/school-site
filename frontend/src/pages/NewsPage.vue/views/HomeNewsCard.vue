<template>
  <RouterLink to="#" class="news-card" :class="{ 'news-card--big': type=='big' }">
    <div class="news-card__cover">
      <div class="news-card__window" />
      <img :src="assets(content.image)" class="news-card__image" alt="Image for news">
    </div>
    <div class="news-card__info">
      <p class="news-card__section">
        {{content.section}}
      </p>
      <h4 class="news-card__name">
        {{content.tagline}}
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
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">

  .news-card__cover {
    width: 100%;
    max-width: 812px;
    height: 100%;
    overflow: hidden;
  }

  .news-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .news-card__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    height: auto;
    padding: 24px;
    background-color: #FFFFFF;
  }

  .news-card__section {
    color: #1333AB;
    font-weight: 700;
    font-size: 1rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .news-card__name {
    min-height: 38px;
    color: #000000;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.1;
  }

  .news-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-decoration: none;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%);
    transition: box-shadow 150ms ease-in;

    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 20%), 0 7px 10px rgb(0 0 0 / 20%);

      & .news-card__image {
        transform:  scale(1.02);
        transition: transform 200ms ease;
      }
    }

    &--big {
      & .news-card__window {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgb(0 0 0 / 0%) 27.6%, rgb(0 0 0 / 45%) 64.06%, rgb(0 0 0 / 75%) 100%);
      }

      & .news-card__cover {
        width: 100%;
        max-width: 812px;
        height: 100%;
      }

      & .news-card__info {
        position: absolute;
        bottom: 0;
        z-index: 2;
        height: auto;
        padding: 24px;
        background-color: transparent;
      }

      & .news-card__name {
        max-height: 90px;
        overflow: hidden;
        color: #FFFFFF;
        font-size: 1.5rem;
        line-height: 1.2;
      }

      .news-card__section {
        color: #FFFFFF;
      }
    }
  }

</style>
