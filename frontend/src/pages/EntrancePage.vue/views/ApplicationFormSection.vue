<template>
  <section class="application">
    <h2 class="h2">
      Электронная форма для подачи заявки заявления на поступление
    </h2>
    <TheForm action="/entrance" id="#form" class="application__form">
      <template #fields>
        <div class="application__form">
          <UIInput
            :label="`ФИО заявителя`"
            name="applicant"
            required
          />
          <UIInput
            :label="`ФИО ребенка`"
            name="child"
            required
          />
          <UISelect
            :label="`Страна`"
            :initial="`Выберите страну из списка`"
            :search="true"
            :options="countries"
            name="country"
            v-model="selectedCountry"
            required
          />
          <UISelect
            :label="`Город проживания`"
            :initial="`Выберите город из списка`"
            :options="cities"
            :search="true"
            v-model="feedbackForm"
            id="citySelect"
            name="city"
            required
          />
          <UIInput
            :label="`Дата рождения ребенка`"
            type="date"
            name="birth"
            required
          />
          <UIInput
            :label="`Свидетельство о рождении или паспорт ребенка`"
            type="file"
            name="birth-certificate"
            required
          />
          <UIInput
            :label="`Справка о состоянии здоровья формы 086у`"
            type="file"
            name="health-certificate"
            required
          />
          <UIInput
            :label="`Справка о группе здоровья`"
            type="file"
            accept="image/*,.pdf"
            name="health-group"
            required
          />
          <UISelect
            :label="`Класс для поступления`"
            :options="classes"
            :initial="`Выберите класс из списка`"
            required="true"
            name="class"
          />

          <UISelect
            :label="`Специализация ребенка (с 8 класса)`"
            :initial="`Выберите специализацию из списка`"
            :options="specializations"
            name="specialization"
          />
          <UIInput
            :label="`Эссе ребенка о своих увлечениях (от 240 слов)`"
            type="file"
            name="essay"
            required
          />
          <UIInput
            :label="`Результаты тестирования`"
            type="file"
            name="testing-result"
            required
          />
          <UIInput
            :label="`Результаты вступительных экзаменов`"
            type="file"
            name="exams-result"
            required
          />
          <UITextarea
            :label="`Дополнительная информация`"
            placeholder="Введите дополнительную информацию"
            name="additional"
            rows="8"
          />
        </div>
      </template>
      <template #buttons>
        <div class="application__buttons">
          <UIInput
            :label="`Согласие на обработку персональных данных`"
            type="checkbox"
            name="data-processing"
            required
          />
          <UIButton type="submit">
            Отправить заявление
          </UIButton>
        </div>
      </template>
    </TheForm>
  </section>
</template>


<script setup>
import { ref, watch, onMounted, reactive } from 'vue';
import TheForm from '@/components/TheForm.vue';

const API_KEY = 'wtf403';

const countries = ref([]);
const selectedCountry = ref('');
const cities = ref([]);

const classes = ref([
  { label: '1 класс', value: '1'},
  { label: '2 класс', value: '2'},
  { label: '3 класс', value: '3' },
  { label: '4 класс', value: '4' },
  { label: '5 класс', value: '5' },
  { label: '6 класс', value: '6' },
  { label: '7 класс', value: '7' },
  { label: '8 класс', value: '8' },
  { label: '9 класс', value: '9' },
  { label: '10 класс', value: '10' },
  { label: '11 класс', value: '11' },
]);

const specializations = ref([
  {label: 'Естественно-Научная', value: 'scientific'},
  {label: 'Гуманитарная', value: 'humanitarian' },
]);

async function fetchCountries() {
  const response = await fetch(`http://api.geonames.org/countryInfoJSON?username=${API_KEY}&lang=ru`);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let result = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    result += decoder.decode(value);
  }
  countries.value = JSON.parse(result).geonames.map((country) => ({
    value: country.countryCode,
    label: country.countryName,
  }));
}

async function fetchCities() {
  const response = await fetch(`http://api.geonames.org/searchJSON?country=${selectedCountry.value}&featureClass=P&lang=ru&username=${API_KEY}`);
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let result = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    result += decoder.decode(value);
  }
  cities.value = JSON.parse(result).geonames.map((city) => ({
    value: city.toponymName,
    label: city.name,
  }));
}

onMounted(() => {
  fetchCountries();
});

watch(selectedCountry, () => {
  fetchCities();
  const citySelect = document.getElementById('citySelect');
  if (selectedCountry.value !== '') {
    citySelect.disabled = false;
  }
});


</script>


<style lang="scss" scoped>
  .application {
    max-width: $page-width;
    margin-bottom: 2rem;

    & > * {
      break-inside: avoid;
    }
  }

  .application__form {
    column-count: 2;
    column-gap: 3.2em;
    padding-inline: 1em;

    @media (width <= $media-desktop) {
      column-gap: 1rem;
    }

    @media (width <= $media-tablet) {
      column-count: 1;
    }
  }

  .application__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

