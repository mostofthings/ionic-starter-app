import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {
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

const app = createApp(App).use(IonicVue);

app.component('ion-content', IonContent);
app.component('ion-input', IonInput);
app.component('ion-card', IonCard);
app.component('ion-card-content', IonCardContent);
app.component('ion-card-title', IonCardTitle);
app.component('ion-card-subtitle', IonCardSubtitle);
app.component('ion-card-header', IonCardHeader);
app.component('ion-grid', IonGrid);
app.component('ion-row', IonRow);
app.component('ion-col', IonCol);

app.mount('#app');
