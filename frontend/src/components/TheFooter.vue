<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__content">
        <div class="footer__useful useful">
          <p class="useful__title">
            Полезные ссылки
          </p>
          <ul class="useful__list">
            <li class="useful__item">
              <RouterLink class="useful__link" to="contacts">Свяжитесь с&nbsp;нами</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="useful__link" to="#">Информация о&nbsp;COVID-19</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="useful__link" to="#">Доступность образования</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="useful__link" to="#">Вакансии в&nbsp;Нашу школу</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="useful__link" to="#">Общественная безопасность</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="useful__link" to="#">Людям с&nbsp;ограниченными возможностями</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="useful__link" to="#">Политика конфиденциальности</RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer__program program">
          <p class="program__title">
            Программы обучения
          </p>
          <ul class="program__list">
            <li class="program__item">
              <RouterLink class="program__link" to="contacts">Программы обучения</RouterLink>
            </li>
            <li class="program__item">
              <RouterLink class="program__link" to="#">Выпускные работы</RouterLink>
            </li>
            <li class="program__item">
              <RouterLink class="program__link" to="#">Достижения</RouterLink>
            </li>
            <li class="useful__item">
              <RouterLink class="program__link" to="#">Наши преподаватели</RouterLink>
            </li>
            <li class="program__item">
              <RouterLink class="program__link" to="#">Поступление</RouterLink>
            </li>
            <li class="program__item">
              <RouterLink class="program__link" to="#">Навигация</RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer__other">
          <div class="footer__school-life school-life">
            <p class="school-life__title">
              Школьная жизнь
            </p>
            <ul class="school-life__list">
              <li class="school-life__item">
                <RouterLink class="school-life__link" to="#">Внеучебная деятельность</RouterLink>
              </li>
              <li class="school-life__item">
                <RouterLink class="school-life__link" to="#">Афиша мероприятий</RouterLink>
              </li>
              <li class="school-life__item">
                <RouterLink class="school-life__link" to="#">Кружки и&nbsp;секции</RouterLink>
              </li>
            </ul>
          </div>
          <div class="footer__social social">
            <p class="social__title">
              Социальные сети
            </p>
            <ul class="social__list">
              <li class="social__item">
                <RouterLink class="social__link" to="#">Сообщество Вконтакте</RouterLink>
              </li>
              <li class="social__item">
                <RouterLink class="social__link" to="#">Мы&nbsp;в&nbsp;VK&nbsp;Клипах</RouterLink>
              </li>
              <li class="social__item">
                <RouterLink class="social__link" to="#">Канал на&nbsp;RuTube</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="footer__copyright">
        <span>&copy; Наша школа.</span>
        <span class="footer__authors">
          Киверин Андрей, Бондарь Илья, Крапивин Иван, Савенков Виктор, Киселев Максим 211-321.
        </span>
        <span>Московский политехнический университет.</span>
      </p>
    </div>
  </footer>
</template>
<script>
import { RouterLink } from 'vue-router';
</script>
<style lang="scss">
  .footer {
    background-color: #072655;
  }

  .footer__wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 72px 40px 60px;
  }

  .footer__content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 60px 36px;
  }

  .footer__other {
    display: flex;
    flex-direction: column;
    gap: 54px;
  }

  .useful__list, .social__list, .program__list, .school-life__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
  }

  .useful__title, .social__title, .program__title, .school-life__title {
    width: fit-content;
    margin-bottom: 32px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 2px solid white;
  }

  .useful__link, .social__link, .program__link, .school-life__link {
    color: #FFFFFF;
    font-size: 1.2rem;
    font-family: 'PT Serif', sans-serif;
    text-decoration: none;
  }

  .footer__copyright {
    display: flex;
    flex-direction: column;
    margin-top: 92px;
    color: #FFFFFF;
    font-size: 1.2rem;
    line-height: 1.25;
    text-align: center;
  }

  .footer__authors {
    font-style: italic;
  }
</style>
