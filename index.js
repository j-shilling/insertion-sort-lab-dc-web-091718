function findMinAndRemove(array){
    if (array.length === 0)
	return null;
    
    let min_index = 0;
    for (let i = 0; i < array.length; i++) {
	if (array[i] < array[min_index]) {
	    min_index = i;
	}
    }

    return array.splice(min_index, 1)[0];
}

function insertionSort(array){
    let copy = array.slice();
    let ret = [];
    
    while (copy.length > 0) {
	ret.push(findMinAndRemove(copy));
    }

    return ret;
}
