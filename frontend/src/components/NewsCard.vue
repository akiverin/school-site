<template>
  <RouterLink to="#" class="news-card" :class="{'news-card--big': type=='big'}">
    <img :src="assets(content.image)" alt="" class="news-image">
    <div class="news-text-wrapper">
      <h2 class="news-title">{{content.title}}</h2>
      <p class="news-tagline">{{content.tagline}}</p>
      <p class="news-text">{{content.text}}</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { assets } from '@/main.js';
</script>

<script>
export default {
  name: 'NewsCard',
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

<style lang="scss" scoped>
  $color-blue: #1333ab;
  $color-black: #000000;

  .news-card {
    width: 100%;
    max-height: 804px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%), 0 3px 3px rgb(0 0 0 / 15%);
    transition: box-shadow 150ms ease-in;


    &:hover {
      box-shadow: 0 0 10px rgb(0 0 0 / 20%), 0 7px 10px rgb(0 0 0 / 20%);

      & .news-card__image {
        transform:  scale(1.02);
        transition: transform 200ms ease;
      }
    }

    .news-image {
      width: calc(100% + 40px); // ширина изображения с учетом отступов
      height: auto;
      margin: -20px;
    }

    .news-title {
      margin-top: 2em;
      color: $color-blue;
      font-weight: 700;
      font-size: 20px;
      font-family: 'PT Serif', sans-serif;
      font-style: normal;
      font-variant: small-caps;
      line-height: 1;
    }

    .news-tagline {
      margin-top: 0.5em;
      color: $color-black;
      font-weight: 700;
      font-size: 1.5em;
      font-family: 'PT Serif', sans-serif;
      font-style: normal;
      line-height: 1.1;
    }

    .news-text {
      margin-top: 1em;
      color: $color-black;
      font-weight: 400;
      font-size: 1em;
      font-family: 'PT Serif', sans-serif;
      font-style: normal;
      line-height: 1.3;
    }
  }
</style>
