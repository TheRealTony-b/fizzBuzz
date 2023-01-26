const fizz = "fizz";
const buzz = "buzz";
let firstDivider = 3;
let secondDivider = 5;


function fizzBuzz(fizz, buzz, firstDivider, secondDivider) {


for (let i = 0; i <= 100; i++) {

if (i % firstDivider == 0 && i % secondDivider == 0){
    console.log(fizz + buzz);
}

else if (i % firstDivider == 0) {
   console.log(fizz); 
}

else if (i % secondDivider == 0) {
   console.log(buzz); 
}

else {
        console.log(i);
    }
}
 }


 fizzBuzz(fizz, buzz, firstDivider, secondDivider);