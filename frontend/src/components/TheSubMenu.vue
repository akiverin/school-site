<template>
  <ul class="submenu">
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/'}]" to="/">Главная</RouterLink>
    </li>
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/about'}]" to="/about">О&nbsp;школе</RouterLink>
    </li>
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/entrance'}]" to="/entrance">Поступление</RouterLink>
    </li>
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/news'}]" to="/news">Новости</RouterLink>
    </li>
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/school-life'}]" to="/school-life">Школьная жизнь</RouterLink>
    </li>
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/advances'}]" to="/advances">Достижения</RouterLink>
    </li>
    <li class="submenu__item">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/feedback'}]" to="/feedback">Контакты</RouterLink>
    </li>
    <li class="submenu__item submenu__item--adaptive">
      <RouterLink :class="['submenu__link', {'submenu__link--active': $route.path=='/profile'}]" to="/profile">Мой профиль</RouterLink>
    </li>
  </ul>
</template>
<script>

</script>
<style lang="scss">
  .submenu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 38px;
    max-height: 46px;
    padding: 14px 0;
    list-style: none;
    background-color: #FFFFFF;
    box-shadow: 0 1px 4px rgb(0 0 0 / 25%);

    & .submenu__item--adaptive {
      display: none;
    }

    @media screen and (width <= $media-tablet) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1px;
      max-height: fit-content;
      padding: 0;
      overflow: hidden;

      & .submenu__item {
        text-align: center;
        box-shadow: 0 0 0 1px #f0f0f0;

        &--adaptive {
          display: block;
        }
      }
    }
  }


  .submenu__link {
    height: 100%;
    color: #000000;
    font-size: 1.2rem;
    line-height: 1.2;
    text-decoration: none;

    &--active {
      color: $accent-blue;
      font-weight: 700;
    }

    @media screen and (width <= $media-tablet) {
      display: block;
      padding: 10px;
    }
  }

</style>
