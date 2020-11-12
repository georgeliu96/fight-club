const minDistance = (str1, str2) => {
    if (!str1 || !str2) return Math.abs(str1.length - str2.length);

    const del = minDistance(str1.slice(1), str2) + 1;
    const ins = minDistance(str1, str2.slice(1)) + 1;
    const replace_cost = str1[0] == str2[0] ? 0 : 1;
    const rep = minDistance(str1.slice(1), str2.slice(1)) + replace_cost;

    return Math.min(del, ins, rep)
}

console.log(minDistance("horse", "ros")) // => 3