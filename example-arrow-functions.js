var names = ['Andrew','Julie','Jen'];

// names.forEach(function (name) {
//   console.log('forEACH', name);
// });
//
// names.forEach( (name) => {
//   console.log('arrowFunc', name);
//
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Stanley'));

// var person ={
//   name: 'Stanley',
//   greet: function () {
//       names.forEach( (name) => {
//         console.log(this.name + ' says hi to ' + name )
//       });
//   }
// };
//
// person.greet()

//chanllenge
function add (a,b) {
  return a + b;
}
var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(4,7));

var addExpression = (a,b) => a+b;
 console.log(addExpression(1,3));
// console.log(add(9,0));
