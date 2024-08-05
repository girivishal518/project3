// let f = [34,56,78,67,45];

// let y = function roo() {
//     let r = 34;
//     console.log(r);
//     function param() {
//         console.log(this.f);
//     }
// }
// y();

//slice method & splice
// let r = [4,5,6,7];
// const v = r.slice(0,1);
// // const v = r.splice(3);
// console.log(v);


//reduce method

let f= [45,6,78,8];

f.reduce((acc,red)=>{
    return f*2;
})
console.log();
// map method
// let arr = [3,4,6,7,8];
// const f = arr.map((length,index)=>{
//     return arr;
// });
// console.log(f);


//filter method;
// let v = [4,5,6,"rgi"];
//  const f = v.filter(()=>{
//     return v;
// })
// console.log(f);

let carditems=[
    {
        id:23,
        itemsName:"refigerator",
        img:url("C:/Users/VISHAL/OneDrive/Pictures/nes.jpg"),
    },
    {
        id:24,
        itemsName:"cooler",
        Image:url("C:/Users/VISHAL/OneDrive/Pictures/nes.jpg"),
    },
    {
        id:25,
        itemsName:"Washing Machine",
        Image:url("https://www.sprintonweb.com/wp-content/uploads/2018/07/15-Medinova-thumb-899x599.jpg"),
    }
];

// let promise = new Promise ((resolve,reject)=>{


// }).then((res)=>(res.json()))
// .then((data)=>(data.data))
// .then((carditems)=>console.log("carditems"))
// .catch((err)=>console.log("errrr..."))
// .finally(()=>console.log("continue....."));