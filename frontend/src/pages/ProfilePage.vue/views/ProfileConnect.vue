<template>
  <div class="connect-block">
    <div class="connect-block__cover">
      <img class="connect-block__image" src="@/assets/icons/vk.png" alt="icon social network">
    </div>
    <div class="connect-block__info">
      <p class="connect-block__title">
        {{resourse.title}}
      </p>
      <p class="connect-block__desc">
        {{resourse.desc}}
      </p>
      <div class="connect-block__actions">
        <TheButton label="Перейти" view="link" type="border" size="mini" :path="resourse.open_link" />
        <TheButton label="Отвязать" view="link" type="cancel" size="mini" :path="resourse.close_link" />
      </div>
    </div>
  </div>
</template>
<script>
import TheButton from '@/components/TheButton.vue';

export default ({
  components: {
    TheButton,
  },
  props: {
    resourse: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss">
  .connect-block {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .connect-block__cover {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px;
    background-color: #F5F8FA;
    border-radius: 8px;

    @media screen and (width <= 540px){
      height: fit-content;
      padding: 18px;
      border-radius: 6px;
    }
  }

  .connect-block__image {
    width: 72px;
    height: 72px;

    @media screen and (width <= 540px){
      width: 52px;
      height: 52px;
    }
  }

  .connect-block__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .connect-block__title {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1;

    @media screen and (width <= 540px){
      font-size: 1.32rem;
    }
  }

  .connect-block__desc {
    color: #1333AB;
    font-size: 1.4rem;
    line-height: 1;

    @media screen and (width <= 540px){
      font-size: 1.14rem;
    }
  }

  .connect-block__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 6px;

    @media screen and (width <= 540px){
      gap: 6px;
    }
  }
</style>
