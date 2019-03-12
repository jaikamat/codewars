// 5 kyu

function pigIt(str){
    let cache = '';
    let append = '';
    let regex = /[a-zA-Z]/;
    
    for (let char of str) {
        if (regex.test(char)) cache += char;
        else {
            if (cache) {
                append += pigStr(cache);
                cache = '';
            }
        append += char;
        }
    }
    
    return cache ? append + pigStr(cache) : append;
}
  
function pigStr(str) {
    return str.slice(1) + str.slice(0, 1) + 'ay'
}