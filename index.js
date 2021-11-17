

// function FullName (firstname , lastname) {
//     console.log(firstname + " " + lastname);
// }
// FullName("Enkhjin" , "Nasanbayar")

// function addNumbers (a , b) {
//     return a + b;
// }
// let sum = addNumbers(2 , 3)
// console.log(sum)

    // function arrayOfRetangle (a , b) {
    //     return  a * b;
    // }
    // let s = arrayOfRetangle(3 , 5);
    // console.log(s)

//  sar oruulanguut stringeer ulirliig n hewlene. 

// function checkSeason (sar) {
//     if(sar >= 8 || sar >= 10) {
//         return 'namar'
//     }
// }   
// console.log(checkSeason(8)) 



// 3 toonii ihiig oldog function 
// function max(a , b , c) { 
//     if (a > b && a > c) {
//         return a;
//     } 
//     if(b > a && b > c) {
//         return b;
//     }
//     return c;
// }
// console.log(max(10 , 6 , 5))

// Math.max duudaad 2 toonii ihiig olj bolno

// function printfArr(a) {
//    for (let i = 0; i < a.length; i++ ) {
//        console.log(a[i])
//    }
// }
// printfArr([2 , 4 , 5, 1 ])

function findx (a , b , c) {
    let x = (-b + Math.sqrt(b*b-4*a*c))/2;
    // x2 = (-b - sqrt(b*b - 4*a*c))/2;
   console.log(x)
}
findx(3 , 4 , 5)