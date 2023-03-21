const multiples = (x, n) => {
    let res = []
    for (let i = 1; i <= n; i++) {
        res.push(i*x)
    }
    return res
}

console.log(multiples(17,6))