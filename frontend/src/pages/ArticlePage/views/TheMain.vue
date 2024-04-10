<template>
  <div>
    <section class="promo">
      <h1 class="promo__heading">
        Школьная жизнь
      </h1>
      <p class="promo__decsription">
        Создаем условия для активного и здорового образа жизни, способствуем культурному и творческому развитию и позволяем преобретать навыки
      </p>
    </section>
    <section class="clubs">
      <div class="clubs__wrapper">
        <h2 class="clubs__heading">
          Школьные объединения
        </h2>
        <ul class="clubs__list">
          <li class="clubs__card" v-for="(item, id) in clubs" :key="id">
            <SchoolLifeClubsCard :content="item" class="clubs-card" />
          </li>
        </ul>
      </div>
    </section>
    <section class="sports">
      <div class="sports__wrapper">
        <h2 class="sports__heading">
          Спортивные секции
        </h2>
        <ul class="sports__list">
          <li class="sports__card" v-for="(item, id) in sports" :key="id">
            <SchoolLifeSportsCard :content="item" class="sports-card" />
          </li>
        </ul>
      </div>
    </section>
    <section class="lectures">
      <h2 class="lectures__heading">
        Лекции и курсы в Нашей школе <span class="lectures__heading lectures__heading--blue">
          (new)
        </span>
      </h2>
      <ul class="lectures__list">
        <li class="lectures__card" v-for="item, index in lectures" :key="index" :id="'lectures'+(index+1)">
          <SchoolLifeLecturesCard :content="item" :color="(index==1||index==3||index==4||index==5)?'white':'default'" :position="(index==4)?'right':'default'" class="lectures-card" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import SchoolLifeClubsCard from './SchoolLifeClubsCard.vue';
import SchoolLifeSportsCard from './SchoolLifeSportsCard.vue';
import SchoolLifeLecturesCard from './SchoolLifeLecturesCard.vue';
import clubs from '@/assets/data/clubs.json';
import sports from '@/assets/data/sports.json';
import lectures from '@/assets/data/lectures.json';
</script>

<script>

export default {
  components: {
    SchoolLifeClubsCard,
    SchoolLifeSportsCard,
    SchoolLifeLecturesCard,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
  $wrapper: var(--wrapper);
  $color-blue: #1333ab;
  $color-black: #000000;

  .promo {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    min-height: calc(100vh - 100px);
    background-image: url("@/assets/images/SchoolLife/SchoolLifePagePromo.webp");
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: cover;
  }

  .promo__heading {
    padding-bottom: 1rem;
    color: #ffffff;
    font-weight: 700;
    font-size: 3rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1;
    text-align: center;
  }

  .promo__decsription {
    max-width: 60ch;
    margin-bottom: 2rem;
    color: white;
    font-weight: 400;
    font-size: 1.75em;
    font-family: 'PT Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', "Roboto", "Oxygen", "Ubuntu", "Cantarell", 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    line-height: 1.4;
    text-align: center;
  }

  .clubs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .clubs__wrapper {
    margin: 0 15px;
  }

  .clubs__heading {
    margin: 60px auto;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }

  .clubs__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    row-gap: 8rem;
    max-width: 1440px;
    margin-top: 9rem;
    column-gap: 1rem;
    list-style: none;
  }

  .clubs__card {
    max-width: 26rem;
  }

  .sports {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sports__wrapper {
    margin: 0 15px;
  }

  .sports__heading {
    margin: 60px auto 40px;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }

  .sports__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-width: 1440px;
    list-style: none;
  }

  .lectures {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
  }

  .lectures__heading {
    margin: 30px 15px;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    text-align: center;
  }

  .lectures__heading--blue {
    color: #1333AB;
  }

  .lectures__list {
    display: grid;
    grid-template:
      "lecture1 lecture2" 278px
      "lecture3 lecture4" 278px
      "lecture5 lecture6" 278px / 1fr 1fr;
    gap: 24px;
    list-style: none;

    @media screen and (width <= 1440px) {
      grid-template:
        "lecture1" 278px
        "lecture2" 278px
        "lecture3" 278px
        "lecture4" 278px
        "lecture5" 278px
        "lecture6" 278px / 1fr;
      margin: 0 auto;
    }

    @media screen and (width <= 720px) {
      grid-template:
        "lecture1" 190px
        "lecture2" 190px
        "lecture3" 190px
        "lecture4" 190px
        "lecture5" 190px
        "lecture6" 190px / 1fr;
      margin: 0 auto;
    }

    @media screen and (width <= 490px) {
      grid-template:
        "lecture1" 126px
        "lecture2" 126px
        "lecture3" 126px
        "lecture4" 126px
        "lecture5" 126px
        "lecture6" 126px / 1fr;
      gap: 12px;
      margin: 0 auto;
    }
  }

</style>
