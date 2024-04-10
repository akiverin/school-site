import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import components from '@/components/UI';
import VueSvgInlinePlugin from 'vue-svg-inline-plugin';

const app = createApp(App);

components.forEach((c) => {
  app.component(c.name, c);
});

app.use(VueSvgInlinePlugin);
app.use(createPinia());
app.use(router);

app.mount('#app');

export function assets(path) {
  return new URL(`/src/assets/${path}`, import.meta.url).href;
}
