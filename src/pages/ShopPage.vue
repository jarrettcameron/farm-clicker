<script setup>
    import { AppState } from '../AppState.js';
import { gameService } from '../services/GameService.js';
    const cropUpgrades = AppState.upgrades.filter(x => !x.automatic)
    const autoUpgrades = AppState.upgrades.filter(x => x.automatic)

    function purchaseItem(upgrade) {
        gameService.purchaseItem(upgrade)
    }
</script>


<template>
    <section class="container-fluid">
        <section class="row">
            <div class="col mt-3">
                <a href="/#" class="btn bg-opaque text-light fs-5"><i class="mdi mdi-exit-to-app"></i></a>
            </div>
        </section>
        <section class="row justify-content-center">
            <div class="col-lg-4 col-11 my-3 my-lg-0 p-3 px-4 mx-1 bg-opaque text-light">
                <h6>CROP UPGRADES</h6>
                <p class="text-secondary fs-small">These upgrades provide more gold when clicking on crops.</p>
                <div class="row flex-column">
                    <div class="col-12" v-for="upgrade in cropUpgrades" :key="upgrade.name">
                        <div class="d-inline-flex">
                            <img :src="upgrade.img">
                            <div>
                                <span>{{ upgrade.name }}<br><span class="fs-small text-secondary">{{ upgrade.description }}</span></span>
                                <br>
                                <span class="text-secondary fs-small">You have {{ upgrade.quantity }}x.</span>
                                <button @click="purchaseItem(upgrade)" class="fs-small my-3 float-end btn btn-outline-light">Purchase - ${{ upgrade.activePrice.toFixed(0) }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-11 my-3 my-lg-0 p-3 px-4 mx-1 bg-opaque text-light">
                <h6>EQUIPMENT UPGRADES</h6>
                <p class="text-secondary fs-small">These upgrades provide gold gained every second.</p>
                <div class="row flex-column">
                    <div class="col" v-for="upgrade in autoUpgrades" :key="upgrade.name">
                        <div class="d-inline-flex">
                            <img :src="upgrade.img">
                            <div>
                                <span>{{ upgrade.name }}<br><span class="fs-small text-secondary">{{ upgrade.description }}</span></span>
                                <br>
                                <span class="text-secondary fs-small">You have {{ upgrade.quantity }}x.</span>
                                <button @click="purchaseItem(upgrade)" class="fs-small my-3 float-end btn btn-outline-light">Purchase - ${{ upgrade.activePrice.toFixed(0) }}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>


<style lang="scss" scoped>

img {
    max-height: 3em;
    object-fit: cover;
    margin-right: 1em;
    aspect-ratio: 1/1;
}

.fs-small {
    font-size: 12px;
}
</style>