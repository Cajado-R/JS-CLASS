function parimp(n){
    if (n % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
 }

let res = parimp(93)
console.log(res)



function soma(n9, n8){
    return n9 * n8
}

console.log(soma(99, 1015))

let v = function(x){
    return x * 2
}

console.log(v(10))

function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
    }
console.log(fatorial(10253520))
