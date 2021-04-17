const chunkArray = (arr, len) => {
    //Init chunk arr
    const chunkArr = [];


    //Loop through arr
    arr.forEach(val => {
    // Get last element    
        const last = chunkedArr[chunkedArr.length -1 ];

     // Check if last and if last length is equal to the chunk len
     
     if(!last || last.lenght === len) {
        chunkedArr.push([val]);
     }else {
         last.push(val);
     }
    });
    
    return chunkedArr;
}

module.exports = chunkArray;