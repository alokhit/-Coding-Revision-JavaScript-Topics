// console.log("TOGGLER - CLOSURES");

// clouser

// function clouser (){
//     var x = 5;
//     function a(){
//        console.log("A was called", x);
//     }
//     a();
// }
// clouser();


// function clouser (){
//     var x = 5;
//    return function a(){
//        console.log("A was called", x);
//     }
//   return a;
// }
// var z = clouser();
// console.log(z);
// z();

// function test(...args){
//     var index = -1;
 
//  return function(){
//     if(args.length-1 > index){

//       index++;
//       console.log(args[index])
//     }
//  }
// }

//   const res = test(1,2,3);

//   res();
//   res();
//   res();

// function test(...args){
//     var index = -1;

//     return function (){
//         if(args.length-1  > index){

//             index++;
//             console.log(args[index]);
//         }
//     }
// }
// const res = test(1,2,3,4);
 
// res();
// res();
// res();
// res();

function test (...args){
    var index = -1;

    return function (){
        if(args.length-1 > index){
            index++;
            console.log(args[index])
        }
    }
}

const res =  test(1,2,3,4,5);
res();
res();
res();
res();
res();