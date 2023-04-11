function pairwise(arr, arg) {
    let ids = [];
    let numIterations = 0;
    let aux = 1;
    while(aux > 0) {
        let initialLength = ids.length;
        if(arr.length == 0) {
            aux--;
            return 0;
        } else {
            for(i = 0; i < arr.length-1; i++) {
                for(j = 0; j < arr.length; j++) {
                    if(i != j) {
                        if(arr[i] + arr[j] == arg) {
                            ids.push(i, j);
                            arr[i] = 999;
                            arr[j] = 999;
                            numIterations = 0;
                            break;
                        }
                    }
                }
                if(initialLength != ids.length) {
                    break;
                }
                if(i == arr.length-2) {
                }
            }
            numIterations++;
            if(numIterations == 3) {
                aux--;
                let sum = ids.reduce(function(acc, cur) {
                    return acc + cur;
                });
                return sum;
            }
        }
    }
}