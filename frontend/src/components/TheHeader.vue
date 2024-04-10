<template>
  <header class="header">
    <TheMenu @show-submenu="() => submenuActive = !submenuActive" :user="user" />
    <TheSubMenu class="submemu" :class="{'submenu--show': submenuActive}" />
  </header>
</template>

<script>
import TheMenu from '@/components/TheMenu.vue';
import TheSubMenu from '@/components/TheSubMenu.vue';

export default {
  props: {
    user: {
      type: Object,
      require: true,
      default: NaN,
    },
  },
  components: {
    TheMenu,
    TheSubMenu,
  },
  data() {
    return {
      submenuActive: false,
    };
  },
  methods: {
    mmm() {
      submenuActive = true;
    },
  },
};

</script>

<style lang="scss">
  .header {
    position: fixed;
    z-index: 8;
    width: 100vw;
  }

  .submenu {
    @media screen and (width <= $media-tablet) {
      display: none;
    }

    &--show {
      @media screen and (width <= $media-tablet) {
        display: grid;
      }
    }
  }
</style>
