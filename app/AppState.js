import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car("Honda", "Accord", 10000, "rusty", 500, "//placehold.it/500x500"),
    new Car("Ford", "Truck", 30000, "clean", 1000, "//placehold.it/500x500")
  ]

  /** @type {House[]} */
  houses = [
    new House(3, 2, 2000, 300000, "//placehold.it/500x500"),
    new House(6, 4.5, 4000, 600000, "//placehold.it/500x500")
  ]

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
