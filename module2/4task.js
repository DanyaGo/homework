function myArray(rows,columns){
	var arr = [];
	for(var i = 0; i < columns; i++){
		arr[i] = [];
		for(var j = 0; j < rows; j++){
			if(( i + j ) % 2 == 0) {
				arr[i][j]= '.';
			}else{arr[i][j]= '*';}}
		} return arr;
	}
	console.log(myArray(12,12).join('\n'));