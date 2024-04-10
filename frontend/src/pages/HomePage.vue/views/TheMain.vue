<template>
  <section class="hero">
    <div class="hero__wrapper">
      <div class="hero__cover">
        <img src="@/assets/images/Home/heroImage.webp" alt="Cover for site" class="hero__image">
      </div>
      <div class="hero__info">
        <h1 class="hero__title">
          Наша Школа открывает двери
        </h1>
        <p class="hero__ad">
          Мы&nbsp;начинаем набор в&nbsp;1&ndash;4, 6&ndash;8 и&nbsp;10&nbsp;классы.
        </p>
        <p class="hero__desc">
          Успей подать заявку до&nbsp;30&nbsp;сентября&nbsp;&mdash; и&nbsp;получи приглашение на&nbsp;День открытых дверей и&nbsp;возможность уникальной консультации с&nbsp;приемной комиссией школы.
        </p>
        <TheButton label="Подать заявку" path="entrance" />
      </div>
    </div>
  </section>
  <section class="banner">
    <div class="banner__wrapper">
      <ul class="banner__list">
        <li class="banner__item" v-for="(text,index) in banner" :key="index">
          <p class="banner__title">
            {{text}}
          </p>
          <svg class="banner__separator" :class="{'banner__separator--end': index == banner.length - 1}" width="20" height="126" viewBox="0 0 20 126" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 1L1 125.5" stroke="white" stroke-linecap="round" />
          </svg>
        </li>
      </ul>
    </div>
  </section>
  <section class="last-news">
    <div class="last-news__wrapper">
      <h2 class="last-news__title">
        Последние новости
      </h2>
      <ul class="last-news__list">
        <li v-for="item, index in news" :key="index" :id="'news'+(index+1)" class="last-news__item last-news__item--big">
          <HomeNewsCard :content="item" :type="(index==0||index==3)?'big':'default'" class="last-news__card" />
        </li>
      </ul>
      <div class="last-news__action">
        <TheButton :path="'/news'" :label="'Больше новостей'" />
      </div>
    </div>
  </section>
  <section class="events">
    <div class="events__wrapper">
      <h2 class="events__title">
        Предстоящие события
      </h2>
      <ul class="events__list">
        <li class="events__item" v-for="(item,index) in events" :key="index">
          <HomeEventsCard :content="item" />
        </li>
      </ul>
      <div class="last-news__action">
        <TheButton :path="'#'" :label="'Больше событий'" type="light" />
      </div>
    </div>
  </section>
  <section class="admission">
    <div class="admission__wrapper">
      <h2 class="admission__title">
        Поступление
      </h2>
      <p class="admission__desc">
        Наша школа поддерживает своих учащихся в&nbsp;их&nbsp;начинаниях, проектах и&nbsp;иследовательских работах.
      </p>
      <div class="admission__content">
        <div class="admission__cover">
          <img src="@/assets/images/Home/admissionImage.webp" alt="Image for admission section" class="admission__image">
        </div>
        <div class="admission__info">
          <p class="admission__text">
            Мы&nbsp;ждем учеников, которые готовы уделять достаточно времени и&nbsp;проявлять любознательность на&nbsp;занятиях в&nbsp;тех или иных видах деятельности, творческих или иследовательских проектах, а&nbsp;так в&nbsp;своей жизне в&nbsp;целом.
          </p>
          <p class="admission__text">
            Дети, подростки и&nbsp;молодежь&nbsp;&mdash; будущее нашей страны, поэтому мы&nbsp;считаем своим долгом воспитывать в&nbsp;них нужные качества и&nbsp;давать знания, в&nbsp;первую очередь которые пригодятся им&nbsp;на&nbsp;жизненом пути.
          </p>
          <p class="admission__text">
            Активность и&nbsp;любопытство мы&nbsp;считаем важными качествами, которые, если направить их&nbsp;в&nbsp;нужное русло, поможет нашим учащимся в&nbsp;будущем.
          </p>
          <TheButton label="Узнать больше" type="border" path="entrance" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import events from '@/assets/data/events.json';
import TheButton from '@/components/TheButton.vue';
import HomeNewsCard from './HomeNewsCard.vue';
import HomeEventsCard from './HomeEventsCard.vue';
import { useNewsStore } from '@/stores/news';
import news from '@/assets/data/news.json';

</script>

<script>


export default {
  components: {
    TheButton,
    HomeNewsCard,
    HomeEventsCard,
  },
  data() {
    return {
      banner: [
        'Более 6000 учащихся по всей России',
        'Профессиональный преподавательский состав',
        'Гарантия поступления в ведущий вуз страны',
        'Бесплатное обучение абсолютно для всех',
      ],
      news: [],
    };
  },
  async created() {
    const store = useNewsStore();
    await store.getNews();
    // this.news = store.allNews;
    this.news = news;
  },
};
</script>

<style lang="scss">

  .hero__wrapper {
    display: grid;
    grid-template-columns: 5fr 6fr;
    gap: 20px;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 0 0 40px;

    @media screen and (width <= 786px){
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  }

  .hero__title {
    font-weight: 700;
    font-size: 3.2rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1;
  }

  .hero__image {
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 0;
    object-fit: cover;

    @media screen and (width <= 786px){
      max-height: 240px;
    }
  }

  .hero__ad {
    margin-top: 50px;
    color: #1C52A2;
    font-size: 1.4rem;
    font-style: italic;
    line-height: 1.4;
  }

  .hero__desc {
    margin-top: 18px;
    margin-bottom: 74px;
    font-size: 1.4rem;
    line-height: 1.4;
  }

  .hero__cover {
    grid-column: 2;
    width: 100%;
    height: 100%;
  }

  .hero__info {
    display: flex;
    grid-row: 1;
    grid-column: 1;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
    padding: 40px;
  }

  .banner {
    background: linear-gradient(180deg, #1C52A2 0%, #0F479A 100%);
    background-color: #1C52A2;
  }

  .banner__wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .banner__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;

  }

  .banner__item {
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-size: 1.4rem;
  }

  .banner__separator {
    width: 18px;
    height: 124px;
    margin: 0 25px;

    &--end {
      opacity: 0;
    }
  }

  .banner__title {
    max-width: 260px;
    max-height: 102px;
    line-height: 1.2;
  }

  .last-news__list {
    display: grid;
    grid-template:
      "news1 news1 news2 news3" 360px
      "news5 news6 news4 news4" 360px / 1fr 1fr 1fr 1fr;
    gap: 24px;
    list-style: none;

    @media screen and (width <= 1086px) {
      grid-template:
        "news1 news1" 360px
        "news2 news3" 360px
        "news4 news4" 360px
        "news5 news6" 360px / 1fr 1fr;
      max-width: 812px;
      margin: 0 auto;
    }

    @media screen and (width <= 460px) {
      grid-template:
        "news1" 360px
        "news2" 360px
        "news3" 360px
        "news5" 360px
        "news4" 360px
        "news6" 360px / 1fr;
      max-width: 420px;
      margin: 0 auto;
    }
  }

  .last-news__wrapper {
    max-width: 1400px;
    margin: 24px auto;
    padding: 0 40px;
  }

  .last-news__item {
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
  }

  .last-news__title, .events__title, .admission__title {
    margin: 60px auto;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }

  .events__title {
    color: #FFFFFF;
  }

  .last-news__action {
    display: flex;
    justify-content: end;
    margin-top: 36px;
  }

  .events {
    margin-top: 20px;
    padding: 40px 0 80px;
    background-color: #1C52A2;
  }

  .events__wrapper, .admission__wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .events__list {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    overflow-x: scroll;
    list-style: none;
  }

  .admission__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    margin-bottom: 60px;
  }

  .admission__title {
    margin-bottom: 30px;
  }

  .admission__desc {
    max-width: 840px;
    margin-bottom: 40px;
    font-size: 1.8rem;
    line-height: 1.2;
    text-align: center;
  }

  .admission__content {
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 80px;

    @media screen and (width <= 796px) {
      grid-template-rows: auto;
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .admission__cover {
    position: relative;
    max-width: 100%;
    height: 100%;
  }

  .admission__image {
    width: 100%;
    min-width: 364px;
    object-fit: cover;
    height: 100%;
  }

  .admission__info {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 24px;
  }

  .admission__text {
    font-size: 1.2rem;
    line-height: 1.2;
  }
</style>
