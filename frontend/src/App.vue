<script>
import { RouterView } from 'vue-router';
import { useUserStore } from '@/stores/user';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      user: {
        email: 'user3259@oursch.ru',
        name: 'Кирилл Петров',
        start_education: 2013,
        end_education: 2024,
        mentor: 'А. А. Павлюк',
        score: 4.36,
        specialization: 'информатика',
        users_image: 'images/Profile/profile-avatar01.webp',
        advances: [
          {'1 место': 'Региональный этап олимпиады по информатике'},
          {'2 место': 'Региональный этап олимпиады по технологии'},
          {'1 место': 'Муниципальный этап олимпиады по информатике'},
          {'3 место': 'Муниципальный этап олимпиады по литуратуре'},
          {'призер 3 степени': 'Муниципальный этап олимпиады по технологии'},
          {'призер': 'Информационный форум по кибер-безопасности PHDays 2023'},
          {'участник': 'Кейс-чемпионат Digital Exploration 2023'},
        ],
      },
    };
  },
  created() {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token !== 'null') {
      const store = useUserStore();
      token ? store.getUser(token) : '';
      this.user = store.myProfile;
    } else {
      // this.user = {};
    };
  },
};

</script>


<template>
  <TheHeader :user="user" />
  <main>
    <RouterView :user="user" />
  </main>
  <TheFooter />
</template>

<style lang="scss">
  @import 'https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap';
  @import 'https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,700&display=swap';

  * {
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-family: "PT Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
  }

  html {
    width: 100%;
    max-width: 100%;
    line-height: 1.5 !important;
  }

  main {
    padding-top: 100px;

    @media screen and (width <= $media-tablet) {
      padding-top: 54px;
    }
  }

  .h1 {
    font-weight: 700;
    font-weight: bold;
    font-size: 3rem;
    font-family: 'PT Serif', sans-serif;
    line-height: 1;
    text-align: center;

    @media (width <= $media-desktop) {
      font-size: 3em;
    }

    @media (width <= $media-tablet) {
      font-size: 2.5em;
    }

  }

  .h2 {
    margin: 60px auto;
    font-weight: 700;
    font-size: 2.5em;
    line-height: 1;
    text-align: center;

    @media (width <= $media-desktop) {
      font-size: 2em;
    }

    @media (width <= $media-tablet) {
      font-size: 1.75em;
    }
  }

  .h3 {
    margin: 60px auto;
    font-weight: 700;
    font-size: 2em;
    line-height: 1;
    text-align: center;

    @media (width <= $media-desktop) {
      font-size: 1.75em;
    }

    @media (width <= $media-tablet) {
      font-size: 1.5em;
    }
  }

</style>


