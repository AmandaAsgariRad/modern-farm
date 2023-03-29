//create and export a function to catalog the harvested foods, taking in an agrument, creating a string variable to return at the end.
export const catalog = (harvestedFoods) => {
    
    let htmlString = ""

    //iterate a for loop to find each food object within the array and interpolate in a string to the varialbe created
    for (const food of harvestedFoods) {
        htmlString += `<section class="plant">${food.type}</section>`

    }


    return htmlString

}

