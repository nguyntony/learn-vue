import { createApp } from 'vue';
import App from './App.vue';
// this is another way to import global styles instead of having it in the App.vue style tag.
import './assets/global.css';

createApp(App).mount('#app');
