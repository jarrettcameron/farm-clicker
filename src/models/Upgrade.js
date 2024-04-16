export class Upgrade {
    constructor(data) {
        this.img = data.img
        this.name = data.name
        this.description = data.description
        this.quantity = data.quantity || 0
        this.basePrice = data.basePrice
        this.automatic = data.automatic
        this.upgradeValue = data.upgradeValue
    }

    get activePrice() {
        return this.basePrice * (Math.pow(1.4, this.quantity))
    }
}