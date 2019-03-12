// 6 kyu

function array_diff(a, b) {
    let result = a;
    b.forEach(bEl => {
        result = result.filter(aEl => bEl !== aEl)
    })
    return result;
}