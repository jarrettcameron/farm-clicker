import { AppState } from "../AppState.js"
import { Upgrade } from "../models/Upgrade.js"
import { loadState, saveState } from "../utils/Store.js"

let loaded = false

class GameService {
    computedClickPower() {
        let z = 1
        AppState.upgrades.filter(x => !x.automatic).forEach(x => z += x.quantity * x.upgradeValue)
        return z
    }

    computedAutoPower() {
        let z = 0
        AppState.upgrades.filter(x => x.automatic).forEach(x => z += x.quantity * x.upgradeValue)
        return z
    }

    performClick() {
        AppState.gold += this.computedClickPower()
        this.saveData()
    }

    harvestInterval() {
        AppState.gold += this.computedAutoPower()
        this.saveData()
    }

    purchaseItem(upgrade) {
        if (AppState.gold >= upgrade.activePrice) {
            AppState.gold -= upgrade.activePrice
            upgrade.quantity++
            this.saveData()
        }
    }

    saveData() {
        if (!loaded) return
        saveState('upgrades', AppState.upgrades)
        saveState('gold', AppState.gold)
    }

    loadData() {
        const goldState = loadState('gold', 0)
        if (!isNaN(goldState) && goldState != null) {
            // @ts-ignore
            AppState.gold = parseInt(goldState)
        }

        const upgradeState = loadState('upgrades', [Upgrade])
        if (upgradeState.length != 0) {

            AppState.upgrades = upgradeState
        }

        loaded = true
    }
}

export const gameService = new GameService()