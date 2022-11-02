let number = 18;
//check if number is greater than 0
if (number > 0) {
    console.log("Are pana la 18");
}
//check if number is 0
else if(number == 0) {
    console.log("are 18 ani")
}
//if number is neither greater than 0, nor zero
else {
    console.log("are sub 18 ani")
}


let fruit = 'blue-berries';

switch (fruit) {
    case 'orange':
        console.log('these are $0.59 a pound');
        break;

    case 'apple':
        console.log('these are $0.43 a pound');
        break;

    case 'banana':
        console.log('these are $0.28 a pound');
        break;

    case 'blue-berries':
        console.log('these are $0.75 a pound');
        break;
        
    case 'limes':
        console.log('these are $0.29 a pound');
        break;

        case 'grapefruit':
        console.log('these are $0.56 a pound');
        break;
    default:
        console.log('srry,we are out of this fruit');

}

//program to display numbers from 1 to 5

let i = 2;

while(i <= 10) {
    console.log(i);
    i += 2;
   
//program to display numbers from 1 to 50
for (let i = 50; i%2 && i<50 ;i++ ){
    console.log(i);
}
}



