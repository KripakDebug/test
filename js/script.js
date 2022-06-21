let array = ["папапа", "ававававав", "папа", "ав"];

let longestWord = 0;
    for (let i = 1; i < array.length; i++) {
            if(array[i].length > longestWord){ 
            longestWord = array[i].length; 
             };  
    };




console.log(longestWord);