<template>
  <RouterLink class="tile" :class="{'tile--disactive': tile.active==false}" :to="tile.active==false?'':tile.link">
    <div v-if="tile.count > 0" class="tile__badge">
      <p class="tile__count">{{tile.count}}</p>
    </div>
    <img class="tile__icon" :src="assets(tile.path)">
    <div class="tile__info"><p class="tile__title">{{tile.title}}</p></div>
  </RouterLink>
</template>
<script setup>
import { assets } from '@/main.js';

const props = defineProps({
  tile: {
    type: Object,
    default: NaN,
  },
});

</script>

<style lang="scss">

  .tile__title {
    color: #000000;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1;
    text-align: center;
    text-decoration: none;
  }

  .tile__icon {
    height: 49px;
  }

  .tile {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    width: 140px;
    height: 140px;
    padding: 16% 0 8%;
    text-decoration: none;
    background-color: #F5F8FA;
    border: 1px solid transparent;
    border-radius: 6px;

    &:hover {
      background-color: #f5f9fd;
      border: 1px solid #e7f0f6;
    }

    &--disactive {
      background-color: #F5F8FA47;
      border: 1px solid #F5F8FA;
      cursor: default;

      &:hover {
        background-color: #F5F8FA47;
        border: 1px solid #F5F8FA;
      }

      & .tile__icon {
        opacity: 0.28;
      }

      & .tile__title {
        opacity: 0.28;
      }
    }
  }


  .tile__badge {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: #1333AB;
    border-radius: 50%;
  }

  .tile__count {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1;
    text-decoration: none;
  }

  .tile__info {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 40px;
    padding: 0 8px;
  }

  @media screen and (width <= 540px){
    .tile__title {
      font-size: 1rem;
    }

    .tile__icon {
      height: 40px;
    }

    .tile {
      gap: 8px;
      width: 120px;
      height: 120px;
      border-radius: 4px;
    }
  }
</style>
