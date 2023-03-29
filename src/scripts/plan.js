const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

export const createPlan = () => {
    const plan = []


    for (let index = 0; index < 3; index++) {
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}

// //create an array of plants and assign to a variable
// const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

// //create and export a fucntion to create the plan that does not take in any arguements.
// export const createPlan = () => {
//     //create an empty array that will hold the plan and assign to a varialbe
//     const plan = []

//     //use a for loop to create the plan, iterate thru to keep adding to the index as long as it does not go over 2
//     for (let index = 0; index < 3; index++) {
//         //create an array to hold the rows, assign to a variable.  
//         const row = []
//         //as long as the above is happening, then iterate thru to keep adding to the row as long as it does not go over 5
//         for (let j = 0; j < 6; j++) {
//             //then push the 
//             row.push(crop.next().value)
//         }
//         plan.push(row)
//     }

//     return plan
// }






/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

