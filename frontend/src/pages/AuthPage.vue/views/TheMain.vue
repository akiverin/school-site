<template>
  <div class="page">
    <h1 class="visually-hidden">
      Вход в систему
    </h1>
    <div class="page__modal">
      <section class="auth">
        <div class="auth__form">
          <h2 class="title" v-if="auth=='login'">
            Авторизация
          </h2>
          <h2 class="title" v-if="auth=='register'">
            Регистрация
          </h2>
          <TheForm v-if="auth=='login'">
            <template #fields>
              <UIInput label="Почта" type="email" name="login" v-model="loginEmail" required />
              <UIInput label="Пароль" type="password" name="password" v-model="loginPassword" required />
            </template>
            <template #buttons>
              <div class="auth__buttons">
                <UIButton @click="$router.push('/register')" :light="true">
                  Регистрация
                </UIButton>
                <UIButton @click="sendLogin">
                  Войти
                </UIButton>
              </div>
            </template>
          </TheForm>
          <TheForm class="auth__form" v-else-if="auth=='register'">
            <template #fields>
              <UIInput label="ФИО" type="text" name="name" v-model="name" required />
              <UIInput label="Почта" type="email" name="login" v-model="email" required />
              <UISelect
                label="Специализация"
                initial="Выберите профиль из списка"
                :search="true"
                :options="allSpecializations"
                name="specialization"
                v-model="selectedSpecialization"
                required
              />
              <UIInput label="Пароль" type="password" name="password" required v-model="password" />
              <UIInput label="Подтверждение пароля" type="password" name="password" v-model="password2" required />
            </template>
            <template #buttons>
              <div class="auth__buttons">
                <UIButton @click="$router.push('/login')" :light="true">
                  Войти
                </UIButton>
                <UIButton type="submit" @click="sendReg">
                  Зарегистрироваться
                </UIButton>
              </div>
            </template>
          </TheForm>
          <div v-else>
            <span style="color: red">
              Props <code>auth</code> required
            </span>
          </div>
        </div>
      </section>
      <section class="providers" v-if="auth=='login'">
        <h2 class="title">
          Авторизация через соц. сети
        </h2>
        <div class="providers__wrapper">
          <a class="providers__social" href="https://vk.com">
            <img class="providers__image" src="@/assets/images/Profile/AuthVKIcon.png" alt="VK icon">
          </a>
          <a class="providers__social" href="https://google.com">
            <img class="providers__image" src="@/assets/images/Profile/AuthGoogleIcon.png" alt="Google icon">
          </a>
          <a class="providers__social" href="https://apple.com">
            <img class="providers__image" src="@/assets/images/Profile/AuthAppleIcon.png" alt="Apple icon">
          </a>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import TheForm from '@/components/TheForm.vue';
import TheButton from '@/components/TheButton.vue';
import UIInput from '@/components/UI/UIInput.vue';
import UISelect from '@/components/UI/UISelect.vue';

import { useUserStore } from '@/stores/user';

import { ref } from 'vue';

const props = defineProps({
  auth: {
    type: String,
    default: '',
  },
});
const allSpecializations = ref([
  {label: 'Естественно-Научная', value: 'scientific'},
  {label: 'Гуманитарная', value: 'humanitarian' },
  {label: 'Информатика', value: 'informatic' },
]);
</script>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      selectedSpecialization: '',
      password: '',
      password2: '',
      loginEmail: '',
      loginPassword: '',
    };
  },
  methods: {
    sendReg() {
      let obj = {
        name: this.name,
        email: this.email,
        password: this.password,
        specialization: this.selectedSpecialization,
      };
      this.password2 === this.password ? useUserStore().addUser(obj) : console.log('errorReg');
    },
    sendLogin() {
      let obj = {
        email: this.loginEmail,
        password: this.loginPassword,
      };
      this.loginEmail !== '' && this.loginPassword !== '' ? useUserStore().loginUser(obj) : console.log('errorLogin');
    },
  },
};
</script>

<style lang="scss" scoped>
  .page {
    display: grid;
    min-height: calc(100vh - 100px);
    background-image: url("@/assets/images/Profile/AuthPageBackground.webp");
    background-size: cover;
    place-items: center;
  }

  .page__modal {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    min-width: 500px;
    padding: 1em 2em;
    padding-bottom: 2em;
    background-color: white;
    border-radius: .5em;
    box-shadow: 0 0 1em rgb(0 0 0 / 25%);
  }

  .auth {
    display: flex;
    flex-direction: column;
  }

  .auth__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .auth__buttons {
    display: flex;
    justify-content: end;
    gap: 1em;
  }

  .title {
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  .providers  {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .providers__wrapper {
    display: flex;
    justify-content: center;
    gap: 1.5em;
  }

  .providers__social  {
    display: block;
    padding: .75em;
    background-color: #f2f1eb;
    border: 0;
    border-radius: .25em;
  }

  .providers__image {
    display: block;
    width: 2em;
    height: 2em;
  }

</style>
