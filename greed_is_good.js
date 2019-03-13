// 5 kyu

function score(dice) {
    let total = 0;
    let sortDice = dice.sort().join('');
    
    if (sortDice.includes('111')) { sortDice = sortDice.replace(/111/, ''); total += 1000; }
    if (sortDice.includes('222')) { sortDice = sortDice.replace(/222/, ''); total += 200; }
    if (sortDice.includes('333')) { sortDice = sortDice.replace(/333/, ''); total += 300; }
    if (sortDice.includes('444')) { sortDice = sortDice.replace(/444/, ''); total += 400; }
    if (sortDice.includes('555')) { sortDice = sortDice.replace(/555/, ''); total += 500; }
    if (sortDice.includes('666')) { sortDice = sortDice.replace(/666/, ''); total += 600; }
    
    total += (sortDice.match(/1/g) || []).length * 100;
    total += (sortDice.match(/5/g) || []).length * 50;
    
    return total;
}