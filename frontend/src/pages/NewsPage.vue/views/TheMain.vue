<template>
  <div>
    <h1 class="visually-hidden">
      Страница новостей
    </h1>
    <section class="main_news">
      <div class="main-news__wrapper">
        <h2 class="main-news__title">
          Последние новости
        </h2>
        <ul class="main-news__list">
          <li v-for="(item, index) in news" :key="index" :id="'news'+(index+1)" class="main-news__item main_news__item--big">
            <NewsCard :content="item" :type="(index==0||index==3)?'big':'default'" class="main-news__card" />
          </li>
        </ul>
      </div>
    </section>
    <section class="other-news">
      <div class="other-news__wrapper">
        <h2 class="other-news__title">
          Другие новости
        </h2>
        <ul class="other-news__list">
          <li v-for="item, index in otherNews" :key="index" :id="'news'+(index+1)" class="other-news__item">
            <HomeNewsCard :content="item" type="default" class="other-news__card" />
          </li>
        </ul>
      </div>
    </section>

    <section class="magazine-club">
      <div class="magazine-club__wrapper">
        <h2 class="magazine-club__title">
          Приглашаем в журналистский клуб
        </h2>
        <p class="magazine-club__desc">
          Наша школа поддерживает своих учащихся в&nbsp;их&nbsp;начинаниях, проектах и&nbsp;иследовательских работах.
        </p>
        <div class="magazine-club__content">
          <div class="magazine club__cover">
            <img src="@/assets/images/News/magazine_clubImage.webp" alt="Image for admission section" class="magazine-club__image">
          </div>
          <div class="magazine-club__info">
            <p class="magazine-club__text">
              Если вы&nbsp;любите писать сочинения или эссе, вам нравится посещать интересные мероприятия, делиться своими впечатлениями и&nbsp;эмоциями с&nbsp;другими, вы&nbsp;хорошо знаете граматику и&nbsp;редко совершаете ошибки в&nbsp;речи и&nbsp;письме, то&nbsp;двери в&nbsp;наш журналисткий клуб &laquo;Юнкор&raquo; для вас открыты.
            </p>
            <p class="magazine-club__text">
              Каждому активному юному журналисту мы&nbsp;вручаем пресс-карту, с&nbsp;которой он&nbsp;может посещать многие мероприятия города абсолютно бесплатно.
            </p>
            <p class="magazine-club__text">
              Мы&nbsp;проводим и&nbsp;участвуем в&nbsp;литературных вечерах, поэтических встречах, интеллектуальных играх, олимпиадах по&nbsp;журналистике и&nbsp;во&nbsp;многом другом.
            </p>
            <TheButton label="Узнать больше" type="border" path="entrance" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import news from '@/assets/data/news.json';
import otherNews from '@/assets/data/other-news.json';
import NewsCard from '@/components/NewsCard.vue';
import HomeNewsCard from './HomeNewsCard.vue';
import TheButton from '@/components/TheButton.vue';
</script>

<script>
export default {
  name: 'NewsPage',
  components: {
    NewsCard,
    HomeNewsCard,
    TheButton,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    font-family: 'PT Serif', sans-serif;
    font-style: normal;
    line-height: 1;
  }

  .main-news__title {
    margin: 60px auto;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }

  .main-news__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .main-news__list {
    display: grid;
    grid-template:
      "news1 news1 news2 news3" 1fr
      "news4 news4 news5 news6" 1fr / 1fr 1fr 1fr 1fr;
    gap: 24px;
    list-style: none;

    @media screen and (width <= 1260px) {
      grid-template:
        "news1 news1" auto
        "news2 news3" auto
        "news6 news6" auto
        "news4 news5" auto / 1fr 1fr;
      max-width: 812px;
      margin: 0 auto;
    }

    @media screen and (width <= 780px) {
      grid-template:
        "news1" 1fr
        "news2" 1fr
        "news3" 1fr
        "news5" 1fr
        "news4" 1fr
        "news6" 1fr / 1fr;
      max-width: 420px;
      margin: 0 auto;
    }


  }

  .other-news__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:20px;
    list-style: none;
  }

  .other-news__item{
    max-width:360px ;
  }

  .main-news__item {
    &#news1 {
      grid-area: news1;
    }

    &#news2 {
      grid-area: news2;
    }

    &#news3 {
      grid-area: news3;
    }

    &#news4 {
      grid-area: news4;
    }

    &#news5 {
      grid-area: news5;
    }

    &#news6 {
      grid-area: news6;
    }

    &#news7 {
      grid-area: news6;
    }

    &#news8 {
      grid-area: news6;
    }

  }

  .other-news__wrapper {
    max-width: 1400px;
    margin: 24px auto;
    padding: 0 40px;
  }



  .other-news__title {
    margin: 60px auto;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }


  .other-news__action {
    display: flex;
    justify-content: end;
    margin-top: 36px;
  }

  .magazine-club__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 60px;
    padding: 0 40px;
  }


  .magazine-club__desc {
    max-width: 840px;
    margin-bottom: 40px;
    font-size: 1.8rem;
    line-height: 1.2;
    text-align: center;
  }

  .magazine-club__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 80px;

    @media screen and (width <= 796px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .magazine-club__cover {
    position: relative;
    max-width: 100%;
    height: 100%;
  }

  .magazine-club__title {
    margin: 60px auto;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }

  .magazine-club__image {
    width: 100%;
    min-width: 364px;
    object-fit: cover;
  }

  .magazine-club__info {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 24px;
  }

  .magazine-club__text {
    font-size: 1.2rem;
    line-height: 1.2;
  }
</style>
