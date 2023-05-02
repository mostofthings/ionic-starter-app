import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonCol,
  IonContent, IonGrid,
  IonicVue,
  IonInput, IonRow,
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import { getRouter } from './router/router';

const app = createApp(App).use(IonicVue);

app.component('IonContent', IonContent);
app.component('IonButton', IonButton);
app.component('IonInput', IonInput);
app.component('IonCard', IonCard);
app.component('IonCardContent', IonCardContent);
app.component('IonCardTitle', IonCardTitle);
app.component('IonCardSubtitle', IonCardSubtitle);
app.component('IonCardHeader', IonCardHeader);
app.component('IonGrid', IonGrid);
app.component('IonRow', IonRow);
app.component('IonCol', IonCol);

const router = getRouter();

app.use(router);

app.mount('#app');
