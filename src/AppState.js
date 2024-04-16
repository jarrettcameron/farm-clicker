import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  gold: 0,
  upgrades: [
    new Upgrade({
      img: "https://em-content.zobj.net/source/serenityos/392/carrot_1f955.png",
      name: "Carrot",
      description: "Planting Carrots is a great place to start!",
      automatic: false,
      basePrice: 15,
      upgradeValue: 3
    }),
    new Upgrade({
      img: "https://em-content.zobj.net/source/serenityos/392/tomato_1f345.png",
      name: "Tomato",
      description: "Planting Tomatoes is a great way to boost profits!",
      automatic: false,
      basePrice: 150,
      upgradeValue: 30
    }),
    new Upgrade({
      img: "https://em-content.zobj.net/source/serenityos/392/mushroom_1f344.png",
      name: "Mushroom",
      description: "Planting Mushrooms is definitely worth the investment!",
      automatic: false,
      basePrice: 1500,
      upgradeValue: 300
    }),
    new Upgrade({
      img: "https://em-content.zobj.net/source/serenityos/392/cockroach_1fab3.png",
      name: "Bug B Gone",
      description: "Stop those pests in their tracks with Bug B Gone!",
      automatic: true,
      basePrice: 200,
      upgradeValue: 10
    }),
    new Upgrade({
      img: "https://em-content.zobj.net/source/serenityos/392/gear_2699-fe0f.png",
      name: "Rusty Rotavator",
      description: "Prepare land and deter pests with maximum efficiency!",
      automatic: true,
      basePrice: 2000,
      upgradeValue: 100
    }),
    new Upgrade({
      img: "https://em-content.zobj.net/source/serenityos/392/tractor_1f69c.png",
      name: "Big Ole' Tractor",
      description: "A farmer's best friend - what can't it be used for!",
      automatic: true,
      basePrice: 20000,
      upgradeValue: 1000
    })
  ]
})
