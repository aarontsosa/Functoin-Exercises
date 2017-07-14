//////////// Return Positive numbers//////////
// function posNum(num){
//     return num.filter(function(pos){
//         return pos >= 0
//     })
// }

/////////Return Even Numbers/////////////
// function evenNum(num){
//     return num.filter(function(nums){
//         x = {
//             0 : true,
//             1 : false,
//         }
//         return x[nums % 2]
//     })
// }

/////////Square the Numbers////////////
// function squareTheNumbers(num){
//     return num.map(function(squ){
//         return squ ** 2
//     })
// }

//////////Cities ///////////
// function coldCity(city){
//     return city
//         .filter((area) => {
//             return area.temperature < 70.0
//         })
//         .map((name) => {
//             return name.name
//         })
// }

/////////// Good Job ///////////
// function goodJob(people){
//     people = people.map((name) => {
//         return "Good Job, " + name
//     })

// }

//////// Product ///////
function productOf(num){
    return num.reduce((product, value) => {
        return product * value
    })
}