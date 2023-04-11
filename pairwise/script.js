function pairwise(arr, arg) {
    let ids = [];
    let aux = 1;
    while(aux > 0) {
        console.log('inicio while')
        let initialLength = arr.length;
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
    }
    console.log('retornando');
    return ids;
}