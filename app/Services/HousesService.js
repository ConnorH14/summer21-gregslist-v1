import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

let url = 'https://bcw-sandbox.herokuapp.com/api/houses/'

class HousesService {
  addHouse(formData){
    let newHouse = new House(formData.bedroom, formData.bathroom, formData.sqft, formData.price, formData.img)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }

  async getHouses(){
    let res = await axios.get(url)
    console.log(res.data)
    ProxyState.houses = res.data.map(h => new House(h))
  }
}

export const housesService = new HousesService()