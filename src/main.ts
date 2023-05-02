import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import {
  IonButton, IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonCol,
  IonContent, IonGrid, IonHeader,
  IonicVue,
  IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToolbar,
} from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';
import { getRouter } from './router/router';

const app = createApp(App).use(IonicVue);

app.component('IonPage', IonPage);
app.component('IonContent', IonContent);
app.component('IonButtons', IonButtons);
app.component('IonButton', IonButton);
app.component('IonInput', IonInput);
app.component('IonCard', IonCard);
app.component('IonHeader', IonHeader);
app.component('IonCardContent', IonCardContent);
app.component('IonCardTitle', IonCardTitle);
app.component('IonCardSubtitle', IonCardSubtitle);
app.component('IonCardHeader', IonCardHeader);
app.component('IonGrid', IonGrid);
app.component('IonRow', IonRow);
app.component('IonCol', IonCol);
app.component('IonToolbar', IonToolbar);
app.component('IonTitle', IonTitle);
app.component('IonLabel', IonLabel);
app.component('IonList', IonList);
app.component('IonItem', IonItem);
app.component('IonPage', IonPage);

const router = getRouter();

app.use(router);

app.mount('#app');
