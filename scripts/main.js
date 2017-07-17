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
function coldCity(city){
    return city
        .filter((area) => {
            return area.temperature < 70.0
        })
        .map((name) => {
            return name.name
        })
}

/////////// Good Job ///////////
// function goodJob(people){
//     people = people.map((name) => {
//         return "Good Job, " + name
//     })

// }

//////// Product ///////
// function productOf(num){
//     return num.reduce((product, value) => {
//         return product * value
//     })
// }

////////// Total Price ////////////
// function total(num){
//     return num
//         .map((nums) => {
//             return nums.price
//         })
//         .reduce((item, value) => {
//             return item + value
//     })
// }

//////// String Joining without using join()/////////
// function strJoin(str, space){
//     return str.reduce((string, value) => {
//         return string + space + value
//     })
// }

///////////////// Acronym ///////////
// function acronym(word){
//     return word
//         .map((words) => {
//             words = words.split("")
//             return words[0].toUpperCase()
//         })
//         .reduce((letter, value) => {
//             return letter + value
//         })
// }

//////////////// String Multiply ///////////
// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// function strMultiply(str, times){
//     times = range(0, times)
//     return times
//         .map((loop) => {
//             return str
//         })
//         .reduce((letter, value) => {
//             return letter + value
//         })
// }

////////////Sort an Array///////
// function sortAlphabetical(str){
//     return str.sort()
// }
// function sortLength(string){
//     return string
//         .map((str) =>{
//             return { index: str, length: str.length }
//         })
//         .sort((a,b) => {
//             return a.length - b.length;
//         })
//         .map((length) => {
//             return length.index
//         })
// }


/////////////Caesar Cipher//////////// NOT DONE

// function cipher(text){
//     var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//     text = text.split("");
//     var i = 0;
//     sorted = alphabet.map((letter) => {
//         i += 1
//         return {letter: letter, number: i}
//     })
//     i = 0
//     // return text
//     //     .map((text) => {
//     //         if (text in sorted){
//     //             return yes
//     //         }
//     //     })
//     //     .map((text) => {
//     //         text += 13
//     //         if(text > 25){
//     //             text -= 25
//     //             return alphabet["text"]
//     //         } else {
//     //             return alphabet["text"]
//     //         }
//         // })
//       return  Object.getPrototypeOf(alphabet."G")
// }

