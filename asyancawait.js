const url = 'http://reqres.in/api/users?page=2';
async function connect(url){
   try{
    const res = await fetch(url)
    const data = await res.json();
    console.log(data);
   }
   catch(err){
    console.log(err + " this is reason");
   }
}
connect(url);