// let arr = [3,5,9,34,4]
// arr.slice(2 , 4)

// let a = arr.sort((a,b)=>{
//     return (a-b);
// })
// console.log(arr);

// shallow Copy
// console.log(arr);
// arr.push(67)
// console.log(arr);


//deep copy
// let newArr = [...arr]
// newArr.push(78)
// console.log(newArr);
// console.log(arr);

// const products = [
//     {
//         id : 11,
//         productName: "Machine",
//         price : 14000
//     },
//     {
//         id : 12,
//         productName: "AC",
//         price : 22000
//     },
//     {
//         id : 13,
//         productName: "tv",
//         price : 12000
//     },
//     {
//         id : 14,
//         productName: "cooler",
//         price : 2500
//     },
//     {
//         id : 15,
//         productName: "refigerator",
//         price : 12000
//     },
// ]

//  let a = products.filter((product,index)=>{
//     return product.price>15000
// })
// console.log(a);
// let id
// let promise  = new Promise((resolve,reject)=>{
//     id = setInterval(()=>{
//         // console.log("resolve");
//         console.log("calling promise");
//         resolve();

//     },1000)
// }).then((e)=>{
//     console.log("success");
// }).catch(()=>{
//     console.log("reject");
// }).finally(()=>{
//     console.log("finally");
//     // clearInterval(id)
// })

// const url = 'http://reqres.in/api/users?page=2';

// fetch(url)
// .then((res)=>res.json())
// .then((data)=>(data.data.slice(0,3)))
// .then((arr)=>console.log(arr))
// .catch((err)=>console.log("errr"))
// .finally(console.warn("disconnecting......."));


// async function connect(){
//     for(let i= 1;i<=30;i++){
//         console.log(i);
//     }
// }
// connect();

// let obj = {
//     name: "Namdjsdif",
//     classId: 344,
//     fun: function (val1) {
//         console.log(this.name);
//     }
// }
// let obj1 = {
//     name: "Namdjdfdfkjvnfvnsdif",
//     classId: 344,
//     fun: function (val1) {
//         console.log(this);
//     }
// }




// var name1 = "Vishal" 
// function abc(name, pass) {
    
//     console.log(`${name}  ==> ${pass}`);
// }
// // abc("ajnasa", 333);
// // abc.apply()

// // obj.fun.apply(obj1, ["a"])

// abc.apply(obj, [name1, 7889])


// let abc={
//     userName:"virat",
//     hobby:"cricket",
//     country:"india"
// }

// function c(name,pass){
//     console.log(name,pass);
//     // console.log(pass);
// };
// c.apply(abc,["vishal","4566"]);

