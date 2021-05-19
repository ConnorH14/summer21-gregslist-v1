import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js"

export class HousesController{
    constructor(){
        ProxyState.on('houses', this.drawHouses)
    }

    drawHouses(){
        let template = ''
        ProxyState.houses.forEach(house =>{
            template += /*html */ `
            <div class="col-lg-4 listing my-3">
                <div class="card"> 
                    <div>
                        <img src="${house.img}" height="200" />
                    </div>
                    <div class="card-body">
                        <p>
                            <b>Bed: ${house.bedroom} Bath: ${house.bathroom}</b>
                        </p>
                        <p>
                            <em>Square Footage: ${house.sqft}</em>
                        </p>
                        <p>
                            <em>Price: ${house.price}</em>
                        </p>
                    </div>
                </div>
            </div>
            `
        })   
        document.getElementById('listings').innerHTML = template
        document.getElementById('car-fab').classList.add('d-none')
        document.getElementById('house-fab').classList.remove('d-none')
        document.getElementById('car-form').classList.add('d-none')
    }

    addHouse(event){
        event.preventDefault()
        let form = event.target
        let formData = {
            bedroom: form.bedroom.value,
            bathroom: form.bathroom.value,
            sqft: form.sqft.value,
            price: form.price.value,
            img: form.img.value
        }
        housesService.addHouse(formData)
        form.reset()
        this.toggleForm()
    }

    toggleForm(){
        document.getElementById('house-form').classList.toggle('d-none')
    }
    
    
}