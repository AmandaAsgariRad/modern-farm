//importing all the neccessarry functions from their files to use in this function

import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


//create and export a function to determine what seeds are being planted. This will take in the plan as an arguement and creating a for loop to iterate thru the plan to find out the rows within each plan. The rows will be an array and within each for loop, there will be a nested for loop to find each plant object within that rowArr. Within that, if the plant object's name equals a specific string, a new variable will be created and that plants specific function listed above will be assigned to it. This function does not return anything.
export const plantSeeds = (plan) => {
    for (const rowArr of plan) {
        for (const plant of rowArr) {
            if (plant === "Asparagus") {
                const asparagusSeed = createAsparagus()
                addPlant(asparagusSeed)
            }
            else if (plant === "Corn") {
                const cornSeed = createCorn()
                addPlant(cornSeed)
            }
            else if (plant === "Potato") {
                const potatoSeed = createPotato()
                addPlant(potatoSeed)
            }
            else if (plant === "Soybean") {
                const soybeanSeed = createSoybean()
                addPlant(soybeanSeed)
            }
            else if (plant === "Sunflower") {
                const sunflowerSeed = createSunflower()
                addPlant(sunflowerSeed)
            }
            else if (plant === "Wheat") {
                const wheatSeed = createWheat()
                addPlant(wheatSeed)
            }
        }
    }
 return usePlants()

}

