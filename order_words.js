function order(words) {
    let wordArr = words.split(' ');
    let sorted = wordArr.map(el => el.split('')).sort(sort);
    
    return sorted.map(el => el.join('')).join(' ');
}
  
    function sort(a,b) {
        let aNum = a.find(el => !isNaN(parseInt(el)));
        let bNum = b.find(el => !isNaN(parseInt(el)));
    
        return aNum - bNum;
}