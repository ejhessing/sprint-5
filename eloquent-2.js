
//Problem 1:
//Looping a triangle
for(var i = 0; i < 7; i++){
	var hashtag = "#";
	for(var j = 0;j < i;j++){
		hashtag += "#";
	}
	console.log(hashtag);
}

//Problem 2:
//FizzBuzz
for(var i = 1; i <= 100; i++){
	if(i%5 === 0 && i%3 === 0){
		console.log("FizzBuzz");
	}else if(i%3 === 0){
		console.log("Fizz");		
	} else if(i%5 === 0){
		console.log("Buzz");		
	} else{
		console.log(i);
	}
}


//Problem 3:
// Chess Board
function chessBoard(height, width){
	for(var i =0; i< height;i++){
		var line = "";
		for(var j =0; j< width;j+=2){
			if(i%2 === 0){
				line += " #";
			} else {
				line += "# ";
			}
		}
		console.log(line);
	}
}