import '@app/styles/index.css';
import { createApp } from 'vue';
import { router } from '@app/router';
import App from '@app/App.vue';

const app = createApp(App);
app.use(router).mount('#app');
