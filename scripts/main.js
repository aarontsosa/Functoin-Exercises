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
function squareTheNumbers(num){
    return num.map(function(squ){
        return squ ** 2
    })
}