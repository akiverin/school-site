<template>
  <div class="wrapper">
    <HeroSection class="wrapper__hero" />
    <DatesSection class="wrapper__dates" />
    <RequirementsSection class="wrapper__requirements" />
    <ApplicationFormSection id="form" class="wrapper__form" />
  </div>
</template>

<script setup>
import HeroSection from './HeroSection.vue';
import DatesSection from './DatesSection.vue';
import RequirementsSection from './RequirementsSection.vue';
import ApplicationFormSection from './ApplicationFormSection.vue';
</script>


<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    max-width: $wrapper;
    margin: 0 auto;

    @media (width <= $media-desktop) {
      padding-inline: 2rem;
    }
  }

  .wrapper__form {
    @media (width <= $media-desktop) {
      inline-size: 100vw;
      margin-inline-start: 50%;
      padding-inline: .5rem;
      transform: translateX(-50%);
    }
  }

</style>
