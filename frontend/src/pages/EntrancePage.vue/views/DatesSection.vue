<template>
  <section class="dates">
    <h2 class="h2 dates__heading">
      График подачи и рассмотрения заявок
    </h2>
    <ul class="dates__list">
      <li class="dates__item">
        <img v-svg-inline class="dates__icon" src="@/assets/images/Entrance/EntranceIcon1.svg" alt="">
        <div class="dates__text-info">
          <span class="dates__text">
            форма для подачи заявления на&nbsp;поступление открыта
          </span>
          <h3 class="dates__date">
            до 30 сентября
          </h3>
        </div>
      </li>
      <li class="dates__item">
        <img v-svg-inline class="dates__icon" src="@/assets/images/Entrance/EntranceIcon2.svg" alt="">
        <div class="dates__text-info">
          <span class="dates__text">
            анализ заявок на&nbsp;поступление и&nbsp;отбор претендентов
          </span>
          <h3 class="dates__date">
            до 21 ноября
          </h3>
        </div>
      </li>
      <li class="dates__item">
        <img v-svg-inline class="dates__icon" src="@/assets/images/Entrance/EntranceIcon3.svg" alt="">
        <div class="dates__text-info">
          <span class="dates__text">
            проверка документов и&nbsp;рассылка ответов с&nbsp;результатами отбора
          </span>
          <h3 class="dates__date">
            до 1 февраля
          </h3>
        </div>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="scss">

  .dates {
    max-width: $page-width;
    inline-size: 100vw;
    margin-bottom: 2rem;
    margin-inline-start: 50%;
    transform: translateX(-50%);
  }

  .dates__heading {
    margin-bottom: 2rem;
  }

  .dates__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    list-style: none;


    @media (width <= $media-tablet) {
      display: flex;
      flex-direction: column;
    }

  }

  .dates__item {
    display: flex;
    align-items: center;
    padding: 0.63em 1.25rem;
    background-color: $accent-gray;

    @media (width <= $media-desktop) {
      flex-direction: column;
      padding-inline: 1rem;

    }

    @media (width <= $media-tablet) {
      flex-direction: row;
      padding-inline: 1rem 2rem;
    }
  }

  .dates__icon {
    flex-shrink: 0;
    padding: 0;
    color: $accent-blue;
  }

  .dates__text-info {
    margin-bottom: -.8rem;
    padding-block: 1rem;
    text-align: center;

    @media (width <= $media-desktop) {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
    }

  }

  .dates__text {
    font-size: 1.5em;
    line-height: 1;
    text-wrap: balance;

    @media (width <= $media-desktop) {
      font-size: 1.25em;
    }
  }

  .dates__date {
    padding: 0;
    color: $accent-blue;
    font-size: 2.25em;
    text-justify: bottom;

    @media (width <= $media-desktop) {
      font-size: 1.5em;
    }
  }



</style>
