<template>
  <section class="hero">
    <h1 class="h1 hero__heading">
      Поступление
    </h1>
    <p class="hero__text">
      Мы ждем учеников, которые готовы реализовывать свои идеи, прокачивать свои навыки и всегда стремятся к самосовершенствованию.
    </p>
    <UIButton :light="true" :href="`#form`">
      Подача заявления
    </UIButton>
  </section>
</template>

<style lang="scss" scoped>
  $wrapper: var(--wrapper);

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    min-height: calc(100vh - 100px);
    inline-size: 100vw;
    margin-inline-start: 50%;
    padding-bottom: 4rem;
    background-image: radial-gradient(40.47vw 40.47vw at 50% 91.95%, rgb(28 82 162 / 98%) 0%, rgb(28 82 162 / 83.3%) 19.46%, rgb(28 82 162 / 73.5%) 52.42%, rgb(28 82 162 / 63.7%) 73.47%, rgb(28 82 162 / 0%) 100%), linear-gradient(0deg, rgb(28 82 162 / 10%), rgb(28 82 162 / 10%)), url('@/assets/images/Entrance/EntranceHero.webp');
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
    transform: translateX(-50%);
    padding-inline: calc((100% - #{$wrapper}) / 2);

    @media (width <= $media-tablet) {
      background-image: linear-gradient(to top, rgb(28 82 162 / 98%) 0%, rgb(28 82 162 / 83.3%) 19.46%, rgb(28 82 162 / 73.5%) 52.42%, rgb(28 82 162 / 63.7%) 73.47%, rgb(28 82 162 / 0%) 100%), linear-gradient(0deg, rgb(28 82 162 / 10%), rgb(28 82 162 / 10%)), url('@/assets/images/Entrance/EntranceHero.webp');
    }
  }


  .hero__heading {
    padding-bottom: 1rem;
    color: white;
  }

  .hero__text {
    max-width: 60ch;
    margin-bottom: 1rem;
    color: white;
    font-weight: 400;
    font-size: 1.75em;
    font-family: "PT Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-style: normal;
    line-height: 1.4;
    text-align: center;
  }


</style>
