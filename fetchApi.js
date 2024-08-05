const url = 'http://reqres.in/api/users?page=2';

// fetch(url)
// .then((res)=>res.json())
// .then(data => (data.data.slice(0,5)))
// .then(arr => console.log(arr))
// .catch(err => console.log(err))
// .finally(console.warn("disconnecting......"))


//  fetch(url).then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(console.warn("success"))


async function connectig(){
    try{
    const res = await fetch(url)
    const data = await res.json();

    console.log(data.data.slice(0,4));
    }
    catch(err){
        console.log(err + "that's the reason");
    }
}
connectig();