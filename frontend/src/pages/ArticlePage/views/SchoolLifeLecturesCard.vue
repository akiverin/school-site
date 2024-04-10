<template>
  <!-- <RouterLink to="#"> -->
  <div class="lectures-card">
    <img class="lectures-card__image" :src="assets(content.image)" alt="Lecture image">
    <div class="lectures-card__text-wrapper" :class="{ 'lectures-card__text-wrapper-right-text': position=='right' }">
      <h3 class="lectures-card__heading visually-hidden" :class="{ 'lectures-card__heading-white-text': color=='white' }">
        {{content.heading}}
      </h3>
      <p class="lectures-card__text visually-hidden" :class="{ 'lectures-card__text_white-text': color=='white' }">
        {{content.text}}
      </p>
    </div>
  </div>
  <!-- </RouterLink> -->
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
    color: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  $wrapper: var(--wrapper);
  $color-blue: #1333ab;
  $color-black: #000000;



  .lectures-card {
    max-width: 44rem;

    @media screen and (width <= 720px) {
      max-width: 30rem;
    }

    @media screen and (width <= 490px) {
      max-width: 20rem;
    }
  }



  .lectures-card__image {
    max-width: 100%;
    object-fit: cover;
  }

  .lectures-card__text-wrapper {
    margin: -14rem 22rem 0 4rem;

    @media screen and (width <= 720px) {
      margin: -9.5rem 14rem 0 3rem;
    }

    @media screen and (width <= 490px) {
      margin: -6.75rem 9.5rem 0 1.75rem;
    }
  }




  .lectures-card__heading {
    padding-bottom: 0.5rem;
    color: #000000;
    font-weight: 700;
    font-size: 2.4rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1;

    @media screen and (width <= 720px) {
      font-weight: 700;
      font-size: 1.75rem;
    }

    @media screen and (width <= 490px) {
      padding-bottom: 0.3rem;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }


  .lectures-card__text {
    min-height: 2rem;
    color: #000000;
    font-weight: 500;
    font-size: 1.75rem;

    @media screen and (width <= 720px) {
      min-height: 1.5rem;
      font-weight: 400;
      font-size: 1.25rem;
    }

    @media screen and (width <= 490px) {
      min-height: 1rem;
      font-weight: 400;
      font-size: 0.9rem;
    }

    .lectures-card__text-wrapper-right-text {
      margin: -15rem 4rem 0 22rem;

      @media screen and (width <= 720px) {
        margin: -10.5rem 3rem 0 15rem;
      }

      @media screen and (width <= 490px) {
        margin: -7rem 1.75rem 0 10rem;
      }
    }

    .lectures-card__text-white-text {
      color: #ffffff;
    }

    .lectures-card__heading-white-text {
      color: #ffffff;
    }
  }

</style>
