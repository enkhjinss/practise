// function isEndingWidth(string , search) {
//    for(let i = 0; i < string.length; i ++) {
//        console.log(string[i])
//        if (string[i] === search) {
           

//        }
//     }
// }
// console.log(isEndingWidth('gdartv', 'g'))

// function repeat(string, count) {
//     str = ''
//     for(let i = 0; i < count; i ++) {
//         str += string;
//         str += ' '
//     }return str

// } console.log(repeat('hello' , 5))

// function toUpperCase(string) {
//     //97-123 jijig useg
//     //65-90 tom useg
//     for (let i = 0; i < string.length; i ++) {
//         let str = ''
//         str += string[i];
//         let ascii = str.charCodeAt(0) - 32;
//         let a = String.fromCharCode(ascii);
//         return a;
//     } 

// }
// console.log(toUpperCase('hello'))

function indexOf(string, search) {
    for(let i = 0; i < search.length; i ++) {
        for(let j = 0; j < string.length; j ++) {
            if(search[i] === string[j] ) {   //l h 
                i ++;
                j ++;
            } 
            
        }
        
    } 
}
console.log(indexOf('hello world', 'll'));