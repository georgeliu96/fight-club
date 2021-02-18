// courtesy of Chao Fan

// O (nlogn)
var findLongestChain = function(pairs) {
    const sorted = pairs.sort((a, b) => {
      return a[1] - b[1];
    });
    
    
    let counter = 1;
    let current = 0;
    
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i][0] > sorted[current][1]) {
            counter++;
            current = i;
        }
    }
    
    return counter;
}