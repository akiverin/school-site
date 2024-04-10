<template>
  <RouterLink to="#" class="education-card">
    <div class="education-wrap">
      <img :src="assets(content.image)" alt="Direction image" class="education-image">
      <div class="education-info">
        <p class="education-title">
          {{content.title}}
        </p>
        <p class="education-text">
          {{content.text}}
        </p>
        <svg class="education-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7H12.2L6.6 1.4L8 0L16 8L8 16L6.6 14.6L12.2 9H0V7Z" />
        </svg>
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
};
</script>

<style lang="scss">

  .education {
    &-info {
      position: absolute;
      top:0;
      width: 100%;
      height: 100%;
      padding: 32px;
      background-color: #F6F6F6;
      transition: ease-out 300ms;
    }

    &-wrap {
      position: relative;
      max-width:285px;
      max-height:192px;
      color: black;
      text-decoration: none;

      &:hover {
        color: white;

        &>.education-info {
          background-color: rgba($color: #0F479A, $alpha: 65%);
        }

        &>.education-info>svg{
          fill:white;
        }
      }
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-title {
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 1.2rem;
    }

    &-text {
      font-size: 0.9rem;
    }

    &-arrow {
      position: absolute;
      right: 32px;
      bottom: 32px;
      transition: ease-out 300ms;
      fill:black;
    }
  }
</style>
