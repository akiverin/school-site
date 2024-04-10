<template>
  <div class="error">
    <div class="error__wrapper">
      <img src="@/assets/icons/404.svg" alt="" class="error__image">
      <div class="error__info">
        <p class="error__desc">
          Мы уже работаем над устранением данной ошибки, мы сожалем что вам пришлось с ней столкнуться! Вы можете перейти на главную страницу, нажав на кнопку, или на нужную вам страницу через навигационное меню.
        </p>
        <TheButton label="Главная страница" path="/" />
      </div>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/TheButton.vue';

export default {
  name: 'The404Error',
  components: { TheButton },
};
</script>

<style lang="scss">
  .error__wrapper {
    display: flex;
    flex: 1 1 0px;
    max-width: 1400px;
    min-height: calc(100vh - 100px);
    margin: 0 auto;
    padding: 0 40px;

    @media (width <= $media-tablet) {
      flex-direction: column;
    }
  }

  .error__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;
    max-width: 40%;
    padding: 20px;
    font-size: 1.4rem;
    text-align: center;

    @media screen and (width <= $media-tablet) {
      max-width: 100%;
      font-size: 1.32rem;
    }

    @media screen and (width <= $media-mobile) {
      max-width: 100%;
      font-size: 1.14rem;
    }
  }

  .error__image {
    max-width: 60%;
    min-height: 360px;

    @media screen and (width <= $media-tablet) {
      max-width: 100%
    }
  }

</style>


