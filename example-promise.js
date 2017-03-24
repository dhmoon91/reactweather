// function getTempCallback(location,callback) {
//   //Once it gets weather, pass weather into callback
//   //callback expects 2 argument
//
//   //success case
//   callback(undefined, 78);
//   //for error
//   callback('City not found');
// }
//
// //calling function
// getTempCallback('Philadelphia', function (err,temp){
//   if (err){
//     console.log('error', err);
//
//   }else {
//     console.log('success', temp);
//   }
// });
//
// //PROMISES
// function getTempPromise (location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//     //if things went well
//
//   });
// }
//
// //first function -> Success case, second -> error
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise Success', temp);
//
// }, function (err) {
//   console.log('promise error',err);
//
// });


//chanllenge area
function addPromise (a,b){
  return new Promise (function (resolve,reject){
    if (typeof a ==='number' && typeof b ==='number'){
      resolve(a+b);
    }else{
      reject ("not a number")
    }
  })
};

addPromise('hi',8).then(function (sum) {
  console.log('Success,', sum)
}, function (err){
  console.log('promise error',err);
});
