//create an emptpy array called field. create and export a function that takes in a seed arguement to determine if the seed that im taking in contains an array within itself. This will be used to teseting. So creating an if statement to use the isArray method to check this. If it does, create a nested for loop to find each item object within the seed array and them will push that item to the field array i've created on this page. If the seed does not contain an array, it wil just push that seed to the field array. Then create a copy of the previous function to use eventually. Use the .map Method for this. These functions do not return anything

let field = []

export const addPlant = (seed) => {
     if (Array.isArray(seed)) {
         for (const item of seed) {
             field.push(item)
          }
      }
     else {
         field.push(seed)
      }

  }


export const usePlants = () => {
    return field.map(seed => ({...seed}))
}

