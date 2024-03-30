const axios= require('axios');


//make request to api

axios.get("https://jsonplaceholder.typicode.com/users/1/posts")
.then((res)=>{
    console.log(res);

})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log("This will always run")
})