<template>
  <section class="feedback">
    <h2 class="h2 visually-hidden">
      Форма обратной связи
    </h2>
    <TheForm action="/feedback">
      <template #fields>
        <UIInput
          :label="`Имя`"
          name="name"
          required
        />
        <UIInput
          :label="`Фамилия`"
          name="surname"
          required
        />
        <UIInput
          :label="`Email`"
          name="email"
          type="email"
          required
        />
        <UISelect
          :label="`Тема сообщения`"
          :initial="`Выберите тему из списка`"
          :options="topics"
          :search="true"
          v-model="feedbackForm"
          name="topic"
        />
        <UITextarea
          :label="`Сообщение`"
          name="message"
          rows="10"
          required
        />
      </template>
      <template #buttons>
        <UIButton class="feedback__button">
          Отправить сообщение
        </UIButton>
      </template>
    </TheForm>
  </section>
</template>

<script setup>
import TheForm from '@/components/TheForm.vue';
import { ref } from 'vue';

const feedbackForm = ref('');

const topics = ref([
  {label: 'Вопросы поступления', value: 'entrance questions'},
  {label: 'Качество обучения', value: 'education quality'},
  {label: 'Программа обучения', value: 'education program'},
  {label: 'Стоимость', value: 'price'},
  {label: 'Качество преподавания', value: 'teaching quality'},
  {label: 'Другое', value: 'other'},
]);

</script>

<style lang="scss" scoped>
  .feedback {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .feedback__button {
    margin-block-start: 1rem;
    margin-inline-start: auto;
  }

  @media (width <= $media-tablet) {
    .feedback__button {
      font-size: 1em !important;
      margin-inline: auto;
    }
  }


  .feedback__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
