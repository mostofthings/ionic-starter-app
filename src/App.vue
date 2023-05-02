<template>
  <IonApp>
    <IonMenu
      menu-id="app-menu"
      content-id="main-content"
      side="start"
      swipe-gesture="false"
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <ion-list>
          <ion-menu-toggle>
            <ion-item
              v-for="navOption in navOptions"
              :key="navOption.name"
              lines="none"
              @click="router.push(navOption.route)"
            >
              <ion-label>{{ navOption.name }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </IonContent>
    </IonMenu>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-menu-button />
          </ion-buttons>

          <ion-title class="section-title">
            {{ routeName }}
          </ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-router-outlet />
      </ion-content>
    </ion-page>
  </IonApp>
</template>

<script setup lang="ts">
import { IonApp, IonMenu, IonMenuToggle, IonMenuButton, IonRouterOutlet, IonPage } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const navOptions = [{
  name: 'Settings',
  route: '/settings',
}, {
  name: 'About',
  route: '/about',
}];

const route = useRoute();
const router = useRouter();

const routeName = computed(() => {
  return route.name || '';
});
</script>


<style scoped lang="scss">
.section-title {
  text-transform: capitalize;
}
</style>
