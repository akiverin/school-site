<template>
  <section class="contacts">
    <h2 class="h2 contacts__heading">
      Наши контакты
    </h2>
    <div class="contacts__wrapper">
      <dl class="contacts__chapter">
        <dt class="contacts__title">
          Телефоны школы
        </dt>
        <dd class="contacts__description">
          <a href="tel:79876543210" target="_blank">+7(987)654-32-10</a>
        </dd>
        <dd class="contacts__description">
          <a href="tel:79784562301" target="_blank">+7(978)456-23-01</a>
        </dd>
      </dl>
      <dl class="contacts__chapter">
        <dt class="contacts__title">
          Электронный адрес
        </dt>
        <dd class="contacts__description">
          <a href="mailto:ask@ourschool.ru" target="_blank">ask@ourschool.ru</a>
        </dd>
        <dd class="contacts__description">
          <a href="mailto:pr@ourschool.ru" target="_blank">pr@ourschool.ru</a>
        </dd>
      </dl>
      <img
        class="contacts__image"
        src="@/assets/images/Feedback/FeedbackContacts.jpg"
        alt="Изображение счастливых детей"
      >
      <dl class="contacts__chapter">
        <dt class="contacts__title">
          Адрес школы
        </dt>
        <dd class="contacts__description">
          Россия, Москва, с. Ивановское, ул. Ивановская, д.1
        </dd>
      </dl>
      <dl class="contacts__chapter">
        <dt class="contacts__title">
          Как добраться?
        </dt>
        <dd class="contacts__description">
          <ol class="contacts__list">
            <li class="contacts__item">
              Простой и быстрый заезд с Ленинского шоссе.
            </li>
            <li class="contacts__item">
              Бесплатные автобусы-шаттлы, курсирующие между школой и станциями метро &laquo; Филатов Луг &raquo; и &laquo; Теплый стан &raquo;.
            </li>
            <li class="contacts__item">
              Общественный транспорт: от станции метро &laquo; Теплый стан &raquo; &ndash; автобус 555 до остановки &laquo; Наша школа &raquo;
            </li>
          </ol>
        </dd>
      </dl>
    </div>
  </section>
</template>

<style lang="scss" scoped>

  .contacts  {
    padding-inline: 4rem;
    font-family: 'PT Serif', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', "Roboto", "Oxygen", "Ubuntu", "Cantarell", 'Open Sans', 'Helvetica Neue', sans-serif;

  }

  .contacts__wrapper  {
    columns: 0 2;
    column-gap: 3.2rem;

    & > * {
      padding-bottom: 2rem;
      break-inside: avoid;
    }

    @media (width <= $media-desktop) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "item1 item2"
        "item3 item3"
        "item4 item4"
        "item5 item5"
    }
  }

  @media (width <= $media-desktop) {
    /* stylelint-disable-next-line at-rule-no-unknown */
    @for $i from 1 through 5 {
      .contacts__wrapper > *:nth-child(#{$i}) {
        grid-area: item#{$i};
      }
    }
  }

  .contacts__heading {
    text-align: start;
    margin-block: 0 1em;
  }

  .contacts__list {
    display: flex;
    flex-direction: column;
  }

  .contacts__title {
    color: $accent-blue;
    font-weight: bold;
    font-size: 1.25em;
    font-variant: small-caps;
    text-transform: uppercase;
  }

  .contacts__description {
    font-weight: 400;
    font-size: 1.4em;

    & > * {
      color: black;
      font-family: 'PT Serif', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', "Roboto", "Oxygen", "Ubuntu", "Cantarell", 'Open Sans', 'Helvetica Neue', sans-serif;

    }
  }

  .contacts__item {
    margin-inline-start: 2rem;
  }

  .contacts__image {
    display: block;
    max-width: 100%;

    @media (width <= $media-desktop) {
      display: none;
    }
  }

  @media (width <= $media-tablet) {
    .contacts__wrapper {
      display: flex;
      flex-direction: column-reverse;
    }
  }
</style>
