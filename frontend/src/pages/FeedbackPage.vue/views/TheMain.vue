<template>
  <div class="wrapper">
    <h1 class="h1 wrapper__title">
      Свяжитесь с&nbsp;нами
    </h1>
    <ContactsSection class="wrapper__contacts" />
    <FeedbackFormSection class="wrapper__form" />
    <MapSection class="wrapper__map" />
    <SocialSection class="wrapper__social" />
  </div>
</template>

<script setup>
import ContactsSection from './ContactsSection.vue';
import FeedbackFormSection from './FeedbackFormSection.vue';
import MapSection from './MapSection.vue';
import SocialSection from './SocialSection.vue';
</script>


<style lang="scss" scoped>

  .wrapper {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-areas:
      "title title"
      "contacts form"
      "map social";
    grid-auto-flow: 1em;
    gap: 2rem;
    width: 100%;
    max-width: $page-width;
    margin: 0 auto;
    margin-bottom: 6rem;
    padding-inline: 2rem;

    @media (width <= $page-width) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "title title title"
        "form form form"
        "contacts contacts social"
        "map map map";
    }

    @media (width <= $media-desktop) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "title"
        "form"
        "map "
        "contacts"
        "social";
      row-gap: 2rem;
    }

    @media (width <= $media-tablet) {
      padding-inline: 0;
    }
  }

  .wrapper__title {
    grid-area: title;
    margin-block: 3rem;

    @media (width <= $media-tablet) {
      margin-bottom: 0;
      font-size: 3em;
    }

  }

  .wrapper__contacts {
    grid-area: contacts;

    @media (width <= $page-width) {
      padding-inline: 0;
    }

    @media (width <= $media-tablet) {
      padding: 1rem;
    }
  }

  .wrapper__form {
    grid-area: form;
    width: 100%;

    @media (width <= $media-tablet) {
      padding: 1rem;
    }
  }

  .wrapper__map {
    grid-area: map;
    margin-top: 2rem;

    @media (width <= $media-tablet) {
      text-align: center;
    }
  }

  .wrapper__social {
    grid-area: social;
    margin-top: 2rem;

    @media (width <= $page-width) {
      margin-top: 0;
    }

    @media (width <= $media-tablet) {
      padding: 1rem;
    }
  }

</style>
