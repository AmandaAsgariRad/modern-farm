import { catalog } from "./catalog.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"


const yearlyPlan = createPlan()
console.log(yearlyPlan)
const copy2 = plantSeeds(yearlyPlan)
const harvestedFoods = harvestPlants(copy2)


const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = catalog(harvestedFoods)


//import all neccessary functions from their pages to use in the final test.
//invoke the createPlan function and assign to a variable to use when I invoke the plantSeeds function.
//then invoke the usePlants function which is a copy of the addPlants function, and assign to a variable that I will use to console log
//then invoke the harvestPlants functions, taking in the copy variable as an argument and assigning to a new variable. 

//finally use the querySelector method to find within a document, if it contains the string .container and assign this to a parent element variable, then add that 

