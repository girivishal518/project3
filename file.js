// primitive Type
// Number, boolean, String, undefined, null, Bigint, Symbol

//Object type
// Array, Object, function

// Variable Type let, var, const


// let v = function (a, b){
//     return a+b;
// }

// console.log(v(2, 3));

// console.log((function abc(a, b){
//     console.log("Aaayayayay..");
//     return "Hell0"+a+b;
// }) (90, 90)
// );

// let arr = [2, 8, "Man", true];

// let b = arr; // shallow copy 

// console.log(arr);
// console.log(b);
// b.push("Last 1")

// console.log(arr);
// console.log(b);
// sprerad operator

//DEEP COPY 
// let newArr = [...arr, "newEle"]
// newArr.push("Vishal")
// console.log(newArr);
// console.log(arr);


// dESTRUCTURING 
// let obj = {
//     name : "Vishal",
//     address : {
//         galino : 33,
//         "house No" : 90
//     },
//     key : 123,
// }

// console.log(obj.address["house No"]);

// const {name, address, key} = obj


// console.log(name, address, key);

// let arr = [11, 111, 122, 131, 232, 2]



//TimeSort Algo
//  let f = arr.sort((a,b) => {
//     console.log(`VAlue of a = ${a}    b = ${b}`);
//     console.log(arr);
// return (a-b)
// });
// console.log(f);

// console.log(arr);

// let brr = new Array();
// brr.push(90);


// console.log(arr.forEach((index, val) =>{
//     console.log(index);
//     return index+10;
// }) );

// function abc(v, i){
//    return v;
// }

// let val = arr.map(abc)

// console.log(val);

const products = [
    {
        id : 11,
        productName : "Laptop",
        price : 420,
    },
    {
        id : 11,
        productName : "AC",
        price : 14999,
    },
    {
        id : 11,
        productName : "Refrigratoir",
        price : 999,
    },
    {
        id : 101,
        productName : "TV",
        price : 920,
    },
    {
        id : 112,
        productName : "Mobile",
        price : 4200,
    }
    
]


// let pro = products.filter((product, index) =>{
//         return product.price > 1000
// })

// console.log(pro);

// let v = products.reduce((product, curr) =>(curr.price), 0)

let arr = [4, 7, 8, 0]

// function Reducer(acc, curr, ind) {
//     console.log(`${acc}   ${curr}, ${ind}`);
//     return acc+curr
// }

// function Reducer1(acc, curr) {
//     console.log(`  ${curr}, ${acc}`);
//     return acc+curr
// }


// arr.reduce(Reducer1, 0)


// console.log(v);


// let o = {}
// o[0] = 34;
// console.log(o);

// let obj = products.reduce((obj1, product) =>{
//     console.log(`${obj1}   ${product}`);
//     obj1[product.id] = product
//     return obj1
// }, {})

// console.log(obj);


// let arr1 = products.slice(-4, -1); // no change in Original array

// console.log(arr1);

// let a = products.splice(0, 2, {id : 123, name : "MAnsun"});

// console.log(a);
// console.log(products);


// Adding elements

// products.splice(0, 0,  {
//     id : 1210,
//     productName : "Mobile",
//     price : 4200,
// })

// let arr2 = [2, [3, 4, [3, 7, [9, 0]]]]
// console.log(arr2.flat(2));

// let obj = {
//     id : 112,
//     productName : "Mobile",
//     price : 4200,
// } 

// let obj2 = {}
// // [ 'id', 'productName', 'price' ]
// Array.from(Object.keys(obj)).forEach((key, ind) =>{

//    let v =  Array.from(Object.values(obj)).forEach((val, i) =>{
//     console.log(val);
//             return val;
//     })
//     console.log(v);
// })



