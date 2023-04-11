function pairwise(arr, arg) {
    let ids = [];
    let numIterations = 0;
    let aux = 1;
    while(aux > 0) {
        console.log('inicio while')
        console.log('array: '+arr)
        let initialLength = arr.length;
        if(arr.length == 0) {
            console.log('retornando');
            aux--;
            return 0;
        } else {
            for(i = 0; i < initialLength-1; i++) {
                for(j = 0; j < initialLength; j++) {
                    if(i != j) {
                        if(arr[i] + arr[j] == arg) {
                            ids.push(i, j);
                            arr.splice(j, 1);
                            arr.splice(i, 1);
                            console.log('push '+i+' e '+j);
                            console.log('arr modificado: '+arr);
                            console.log('arr ids: '+ids)
                            numIterations = 0;
                            break;
                        }
                    }
                }
                if(initialLength != arr.length) {
                    console.log('initial length != arr.length');
                    break;
                }
                if(i == initialLength-2) {
                    console.log('i == initial length - 2')
                    aux--;
                }
            }
            numIterations++;
            if(numIterations == 3) {
                console.log('retornando');
                aux--;
                let sum = ids.reduce(function(acc, cur) {
                    return acc + cur;
                });
                return sum;
            }
        }
    }
}