<template>
  <section class="requirements">
    <h2 class="h2 requirements__heading">
      Требования к&nbsp;кандидатам
    </h2>
    <p class="requirements__text">
      Перед заполнением заявки, ознакомьтесь с&nbsp;требованиями для поступления, по&nbsp;всем вопросам обращайтесь к&nbsp;поддержке через форму обратной связи или по&nbsp;телефону на&nbsp;странице &laquo;Контакты&raquo;.
    </p>
    <ol class="requirements__list">
      <li class="requirements__item">
        <div class="requirements__content">
          <h3 class="h3 requirements__claim">
            Мы&nbsp;осуществляем набор учащихся в&nbsp;начальную школу (с&nbsp;1 по&nbsp;4 классы), в&nbsp;некоторые классы средней школы, а&nbsp;именно набор в&nbsp;6, 7 и&nbsp;8 классы, а&nbsp;так&nbsp;же в&nbsp;10 классы старшей школы.
          </h3>
          <p class="requirements__description">
            Количество вакантных мест: 1 класс&nbsp;&mdash; 36 мест, 2 класс &ndash;19 мест, 3 класс&nbsp;&mdash; 12 мест, 4 класс&nbsp;&mdash; 20 мест, 6 класс&nbsp;&mdash; 31 место, 7 класс&nbsp;&mdash; 4 места, 8 класс&nbsp;&mdash; 38 мест, 10 класс&nbsp;&mdash; 5 мест. Указанные данные о&nbsp;количестве свободных мест могут быть уже иными, для уточнения информации обратить через форму обратной связи или по&nbsp;телефону через страницу &laquo;Контакты&raquo;.
          </p>
        </div>
      </li>
      <li class="requirements__item">
        <div class="requirements__content">
          <h3 class="h3 requirements__claim">
            Хорошие или отличные результаты тестирования (очно или онлайн) и&nbsp;очных вступительных экзаменов.
          </h3>
          <p class="requirements__description">
            Тестирование проводится очно по&nbsp;будням с&nbsp;14:00 до&nbsp;18:20 или в&nbsp;формате онлайн по&nbsp;предварительному соглашению с&nbsp;приемной комиссией. Вступительные экзамены можно прийти написать по&nbsp;будням с&nbsp;9:40 до&nbsp;13:50 в&nbsp;отдел приемной комиссии Нашей школы. Для 10 классов необходимо приложить результаты ОГЭ.
          </p>
        </div>
      </li>
      <li class="requirements__item">
        <div class="requirements__content">
          <h3 class="h3 requirements__claim">
            Справка о&nbsp;состоянии здоровья формы 086у и&nbsp;справка о&nbsp;группе здоровья.
          </h3>
          <p class="requirements__description">
            К&nbsp;заявке для поступления необходимо приложить данные два медицинских документа в&nbsp;отсканированном виде или электронную копию из&nbsp;электронной карточки. В&nbsp;случае положительного ответа о&nbsp;поступлении учащегося, данные справки требуется принести в&nbsp;оригинале в&nbsp;мед-кабинет Нашей школы.
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>

  .requirements {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .requirements__heading {
    margin-bottom: 2rem;
  }

  .requirements__text {
    max-width: 950px;
    margin-bottom: 2rem;
    font-size: 1.75em;
    text-align: center;

    @media (width <= $media-tablet) {
      font-size: 1.25em;
    }
  }

  .requirements__list {
    display: flex;
    flex-direction: column;
    gap: 4em;
    padding: 4rem 3rem;
    background-color: $accent-gray;

    @media (width <= $media-tablet) {
      padding: 1rem 2rem;
    }
  }

  .requirements__item {
    position: relative;
    display: flex;
    list-style: none;
    counter-increment: advantages;


    &::before {
      inset-inline-start: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: start;
      min-width: 2.2rem;
      min-height: 2.2rem;
      color: $accent-blue;
      font-weight: 700;
      font-size: 1.5em;
      border: .2rem solid $accent-blue;
      border-radius: 50%;
      content: counter(advantages);

      @media (width <= $media-tablet) {
        display: none;
      }
    }

  }

  .requirements__content {
    padding-inline-start: 2rem;

    @media (width <= $media-tablet) {
      padding-inline-start: 0;
    }

  }

  .requirements__claim {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: start;
    margin-block: 0 1rem;

    @media (width <= $media-tablet) {
      font-size: 1.5em;
    }
  }

  .requirements__description {
    margin-top: 1rem;
    font-size: 1.5em;
    text-align: start;

    @media (width <= $media-tablet) {
      font-size: 1.25em;
    }
  }
</style>



