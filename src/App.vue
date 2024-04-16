<script setup>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { gameService } from './services/GameService.js';

const appState = computed(() => AppState)

onMounted(() => setInterval(() => gameService.harvestInterval(), 1000))
onMounted(() => gameService.loadData())

</script>

<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
