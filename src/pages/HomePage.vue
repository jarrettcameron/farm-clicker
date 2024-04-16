<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { gameService } from '../services/GameService.js';

const gold = computed(() => AppState.gold)
const computedClickPower = computed(() => gameService.computedClickPower())
const computedAutoPower = computed(() => gameService.computedAutoPower())

function performClick() {
  gameService.performClick()
}

</script>

<template>
  <div class="container-fluid mt-5">
    <section class="row justify-content-center m-5">
      <div class="col-lg-3 col-12 text-center py-3 mt-5">
        <h3 class="text-shadow text-light">Farming Clicker</h3>
        <img class="mt-5 bg-opaque pb-3 px-2 rounded img-fluid" src="https://em-content.zobj.net/source/serenityos/392/seedling_1f331.png" @click="performClick()">
      </div>
    </section>
    <section class="row justify-content-center mt-3">
      <div class="col-lg-4 col-11 rounded rounded-pill bg-opaque text-center">
        <span class="user-select-none stats d-inline-flex align-items-center p-2 fs-4 text-light"><img class="me-2 mb-1" src="https://em-content.zobj.net/source/serenityos/392/coin_1fa99.png"> {{ gold.toFixed(0) }}<img class="mb-2 mx-2" src="https://em-content.zobj.net/source/serenityos/392/carrot_1f955.png"> {{ computedClickPower }}<img class="mx-2" src="https://em-content.zobj.net/source/serenityos/392/gear_2699-fe0f.png"> {{ computedAutoPower }}s</span>
      </div>
    </section>
    <section class="row justify-content-center mt-5">
      <div class="col-xl-2 col-lg-3 col-11 text-center">
        <a class="px-4 py-2 rounded rounded-pill bg-dark text-light" href="/#/shop">SHOP</a>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.stats img {
  height: 1em;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
