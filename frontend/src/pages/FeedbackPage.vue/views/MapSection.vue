<template>
  <section class="requirements">
    <h2 class="h2 requirements__heading">
      Наша школа на карте
    </h2>
    <iframe class="requirements__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c495c29179e90812d3630e05c7249ddc6b7da5920cc198d9ecc5cc64d268a35&amp;source=constructor" width="500" height="400" frameborder="0" />
  </section>
</template>

<script>
</script>


<style lang="scss" scoped>
  .requirements  {
    margin: 0;
  }

  .requirements__heading  {
    font-size: 3em;
    text-align: start;
    margin-block: 1rem;
  }

  @media (width <= $media-tablet) {
    .requirements__heading {
      font-size: 2.5em;
      text-align: center;
    }
  }

  .yandex-map {
    width: 100%;
    min-height: 500px;
  }

  .requirements__map  {
    display: block;
    width: 100%;
    min-height: 600px;
    margin-top: 3rem;
    background-image: url('@/assets/images/Feedback/MapScreenshot.png');
    border-radius: 10px;
  }


</style>

