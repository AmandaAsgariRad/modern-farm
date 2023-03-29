export const harvestPlants = (growingPlants) => {
    let seedArr = []
    let number = 0

    for (const plant of growingPlants) {
        if (plant.type === "Corn") {
            number = plant.output / 2
        }
        else {
            number = plant.output
        }
    for (let i = 0; i < number; i++) {
        seedArr.push(plant)
    }   
}

        
    return seedArr
   
}

//create and export a function taking in an agrument for the growing plants.
// export const harvestPlants = (growingPlants) => {
//     create a variable that returns an empty array and start a counter variable at 0
    //let seedArr = []
//     let number = 0

        //iterate thru a for loop to find every plant object within the growingplants arguement and for every plant, if the plant object's type equals corn, then we will divide the plant objects output property by 2 and reassign number varialbe to that value. Else, the number variable will equal the plant objects output property. Outside of the first for loop, iterate thru an for loop to find out if the output from the previous loop stops when its reached its max number. Doing this by setting the index to 0 and as long as the index is less than the number, the counter will continue to add onto the index until the max out put is reached. Will push that plant object to the seedArr and return it.
//     for (const plant of growingPlants) {
//         if (plant.type === "Corn") {
//             number = plant.output / 2
//         }
//         else {
//             number = plant.output
//         }
//     for (let i = 0; i < number; i++) {
//         seedArr.push(plant)
//     }
// }
        
//     return seedArr
   
// }