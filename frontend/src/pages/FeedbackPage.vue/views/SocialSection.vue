<template>
  <section class="social">
    <h2 class="h2 social__heading">
      Наша школа в интернете
    </h2>
    <ul class="social__list">
      <li class="social__item">
        <img class="social__image" src="@/assets/images/Feedback/IconVK.svg" alt="">
        <a class="social__link" href="https://vk.com">Сообщество во Вконтакте</a>
      </li>
      <li class="social__item">
        <img class="social__image" src="@/assets/images/Feedback/IconOK.svg" alt="">
        <a class="social__link" href="https://ok.ru">Группа в Одноклассниках</a>
      </li>
      <li class="social__item">
        <img class="social__image" src="@/assets/images/Feedback/IconYoutube.svg" alt="">
        <a class="social__link" href="https://youtube.com">Канал на YouTube</a>
      </li>

      <li class="social__item">
        <img class="social__image" src="@/assets/images/Feedback/IconTikTok.svg" alt="">
        <a class="social__link" href="https://tiktok.com">Аккаунт в TikTok</a>
      </li>
      <li class="social__item">
        <img class="social__image" src="@/assets/images/Feedback/IconTelegram.svg" alt="">
        <a class="social__link" href="https://t.me">Канал в Telegram</a>
      </li>
      <li class="social__item">
        <img class="social__image" src="@/assets/images/Feedback/IconWhatsapp.svg" alt="">
        <a class="social__link" href="https://whatsapp.com">Whatsapp для связи</a>
      </li>
    </ul>
  </section>
</template>
<style scoped lang="scss">

  .social__heading {
    font-size: 3em;
    text-align: start;
    margin-block: 1rem;



    @media (width <= $media-tablet) {
      font-size: 2.5em;
    }
  }


  .social__list {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    margin-top: 3rem;
  }

  .social__item  {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-inline-start: 2rem;

    @media (width <= $media-tablet) {
      padding-inline-start: 0;
    }
  }

  .social__link  {
    color: #0000ff;
    font-size: 1.75em;
    text-decoration: underline;
  }


</style>
