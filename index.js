
// // factory way
// function RCreate (color, name , model){
//     return{
//         name:name,
//         model:model,
//         color:color,
//         start:function(){
//             console.log('stack');
//         }
//     }
// }
// const b= RCreate("red","BMW","1001")
// console.log(b);
// constractor
function Cat (name,old,){
    this.name = name;
    this.old = old;
    console.log(this);
}
const shrase =new Cat('loly','20')
console.log(shrase);