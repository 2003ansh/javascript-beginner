// Asynchronous javascript

//http response codes
//informational responses (100–199),
//successful responses (200–299),
//redirects (300–399),
//client errors (400–499),
//and server errors (500–599).

//-----------------------------------------------------------------------http request---------------------------------------------------------------------------------
// making http request

// let todos=(callbacks)=>{

//     let request = new XMLHttpRequest();    // request is being created but not send yet
// console.log(request, request.readyState)

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//         // console.log(request, request.readyState)
//         // console.log(request.responseText)
//         let data = JSON.parse(request.responseText)
//         callbacks(undefined, data)
//     }
//     else if (request.readyState === 4) {
//         // console.log('could not fetch the data')
//         callbacks("could not fetch the data", undefined)
//     }
// })

// // set up the request

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

// send the request
// request.send();
// }


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------different way to use callback function in ajax request-----------------------------------------------------

// let resource='https://jsonplaceholder.typicode.com/todos';

// let h=document.querySelector('h1');
// let name=document.querySelector('.name');
// let todos=(resource,callbacks)=>{
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             let data = JSON.parse(request.responseText)
//             callbacks(undefined, data)
//         }
//         else if (request.readyState === 4) {
//             callbacks("could not fetch the data", undefined)
//         }
//     })
//     request.open('GET', resource);
//     request.send();
// }
// todos(resource,(error,data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         let datas=data;
//         datas[0].title='changed';
//         datas.forEach(element => {
//         let p=document.createElement('p');
//         p.textContent=element.title;
//         p.style.color='red';
//         name.append(p);
//     });

//         console.log(datas[0].title) 
//         // h.textContent=datas[0].title;
//         console.log(data)  
//         console.log(datas)
//     }
//     console.log('callback fired')
// });

// console.log(data)






//value state change of request 
// 0: request not initialized and usent state
// 1: server connection established and request recieved and open() method called.
// 2: request recieved and response headers recieved send() method called.
// 3: request processing and response body recieved.
// 4: request finished and response is ready.we can get data now.

//--------------------------------------- -------------------------------Promises-----------------------------------------------------------------------------------
 

//----------------------------------------------------------------------ex1-------------------------------------------------------------------------------------
// let somePromise=()=>
//     {
//         return new Promise((resolve,reject)=>{
//             // resolve('resolved')
//             reject('rejected')
// })
// }

// somePromise().then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


//-----------------------------------------------------------------------example2--------------------------------------------------------------------------


// let todos=(resource)=>{
//     return new Promise((resolve,reject)=>{ //resolve and reject are functions which are called when promise is resolved or rejected.
//         let request = new XMLHttpRequest(); //create request
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 let data = JSON.parse(request.responseText)
//                 resolve(data)
//             }
//             else if (request.readyState === 4) {
//                 reject("could not fetch the data")
//             }
//         })
//         request.open('GET', resource);
//         request.send();

//     })
// }
// todos('https://jsonplaceholder.typicode.com/todos').then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})  // promise is resolved and rejected.here we hve used then and catch method to handle promise.




// // ------------------------------------------------------------------------promise chaining-------------------------------------------------------------------------


// .here we have used then method to handle promise.and multiple then method can be used to handle promise.

// let todos=(resource)=>{
//     return new Promise((resolve,reject)=>{ //resolve and reject are functions which are called when promise is resolved or rejected.
//         let request = new XMLHttpRequest(); //create request
//         request.addEventListener('readystatechange', () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 let data = JSON.parse(request.responseText)
//                 resolve(data)
//             }
//             else if (request.readyState === 4) {
//                 reject("could not fetch the data")
//             }
//         })
//         request.open('GET', resource);
//         request.send();

//     })
// }
// todos('https://jsonplaceholder.typicode.com/todos').then((datas)=>{
//     console.log("promise1 resolved",datas)
//     return todos('https://jsonplaceholder.typicode.com/todos') //second api call and return promise.
// }).then((datas)=>{console.log("promise2resolved",datas)}).catch((errors)=>{
//     console.log(errors)
// })  





// ---------------------------------------------------------------------------------------fetch api----------------------------------------------------------------------



//---------------------------------get request.this means we are only request the api to display the data------------------------------------------------------------




// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//         console.log(response)
//         // return response.text() // it is used to convert response to text format.which is inn json format.
//     return response.json(); // it is also a asynchronous method so we treat it as a promise.it is used to convert directly response to json format. so we prefer to used response.json() method.
//   })
//   .then(data => {
//     console.log('Received data:', data);  //data is in json format.
//   })
//   .catch(errors => {
//     console.error('Fetch error:', errors);
//   });









// ----------------------------post/create request.this means we are sending data to server.---------------------------------------------------


// const crreatepost=async(newpost)=>{
// try{
// let response=await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',// post is the method to send data to server.
//     body: JSON.stringify(newpost),  // this is body where we are sending data to server.
//     headers: { 'Content-Type': 'application/json;charset=UTF-8' },
// });
// if(!response.ok){
//     throw new Error('something went wrong')
// }
// else{
//     let data=await response.json();
//     return data;
// }
// }
// catch(error){
//     console.log(error.message)
// }
// };
// const newpost={
//     title:'foo',
//     body:'bar',
//     userId:1
// }
// crreatepost(newpost).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})













//---------------------------------put request.this means we are updating data to server.---------------------------------------------------

// let updatedpost=async(updatevalue,id)=>{
//     try{
//     let response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PUT',  // put is the method to update data to server.
//         body: JSON.stringify(updatevalue),  // this is body where we are sending data to server for update.
//         headers: { 'Content-Type': 'application/json;charset=UTF-8' },
//     });
//     if(!response.ok){
//         throw new Error('something went wrong in updating')
//     }
//     else{
//         let data=await response.json();
//         return data;
//     }
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }

// const updatevalue={
//     id:1,
//     title:'changed',
//     body:'changed',
//     userId:1
// };

// updatedpost(updatevalue,1).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})










//---------------------------------patch request.this means we are updating a single data to server.---------------------------------------------------
// let click=document.querySelector('#click');

// let patchpost=async(patchvalue,id)=>{
//     try{
//     let response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'PATCH',  // patch is the method to update a single data to server.
//         body: JSON.stringify(patchvalue),  // this is body where we are sending data to server for update.
//         headers: { 'Content-Type': 'application/json;charset=UTF-8' },
//     });
//     if(!response.ok){
//         throw new Error('something went wrong in patching')
//     }
//     else{
//         let data=await response.json();
//         return data;
//     }
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }

// // function is being called here.
// let patchvalue={
//     title:'changed',
//     id:1
// }  


// click.addEventListener('click',()=>{
// patchpost(patchvalue,patchvalue.id).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})

// })






//--------------------------delete request.this means we are deleting data to server.---------------------------------------------------


// let deletepost=async(id)=>{
//     try{
//     let response=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method: 'DELETE',  // delete is the method to delete data to server.
//     });
//     if(!response.ok){
//         throw new Error('something went wrong in deleting')
//     }
//     else{
//         let data=await response.json();
//         return data;
//     }
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }
// let id=1
// deletepost(id).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})











//---------------------------------------------------------------------multiple fetch api call-------------------------------------------------------------------------
//   fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok1');
//     }
//         console.log("1",response)
       
//     return response.json(); 
//   })
//   .then(data => {
//     console.log('Received data1:', data);



//     return fetch('https://jsonplaceholder.typicode.com/todos/200')
//   }).then(responses => {
//     if (!responses.ok) {
//       throw new Error('Network response was not ok2');
//     }
//         console.log("2",responses)   
//     return responses.json(); 
//   }).then(data => {
//     console.log('Received data2:', data);



//     return fetch('https://jsonplaceholder.typicode.com/todos/2')})
//     .then(responses => {
//         if (!responses.ok) {
//           throw new Error('Network response was not ok2');
//         }
//             console.log("3",responses)   
//         return responses.json(); 
//       }).then(data => {
//         console.log('Received data3:', data)})



//   .catch(error => {
//     console.error('Fetch error:', error);
//   });

// ---------------------------------async await--------------------------------

// let getTodos1=async()=>{
//     let response=await fetch('https://jsonplaceholder.typicode.com/todos');
//     let data=await response.json()
//     if(!response.ok){
//         throw new Error('could not fetch the data')
//     }
//     else{
       
//         return data;
//     }
// }

// getTodos1().then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})


//-----------------------------multiple fetch api call using async await where one fetch api does not depends upon another api.if one api fails it wont affect the second one---------------------

// let getTodos=async()=>{
    
//     try{
//     let response=await fetch('https://jsonplaceholder.typicode.com/todos');
//     let data2=await response.json()
//     console.log(response.ok)
   
//     let response1=await fetch('https://jsonplaceholder.typicode.com/todos/200');
//     let data1=await response1.json()
//     console.log(response1.ok)

//     return[data2,data1]
// }
// catch(error){
//     console.log(error.message)
// }
// }
// getTodos().then((datas)=>{
//     let[datas1,datas2]=datas
//     datas2.title='changed'
//     let p=document.createElement('p');
//     p.textContent=datas2.title;
//     p.style.color='red';
//     document.body.append(p);
//     datas1.forEach(element => {
//         let p=document.createElement('p');
//         p.textContent='userId:'+element.userId+ ' '+'id:'+element.id+' '+'title:'+element.title+' '+'completed:'+element.completed;
//         p.style.color='red';
//         document.body.append(p); 
//     })
//     console.log(datas1,datas2)}).catch((error)=>{console.log(error)})



///////--------multiple fetch api call using async await where one fetch api depends upon another api.if one api fails another wont work -----------------
//  async function getTodos() {
//         try {
//           let response = await fetch('https://jsonplaceholder.typicode.com/todos');
//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }
//           let data = await response.json();
      
//           let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/200');
//           if (!response1.ok) {
//             throw new Error('Network response was not ok');
//           }
//           let data1 = await response1.json();
      
//           return [data, data1]; // Return the data as an array
//         } catch (error) {
//           console.error('Error fetching data:', error);
//           throw error; // Re-throw the error to propagate it to the caller
//         }
//       }
      
//       getTodos().then((datas)=>{
//             let[datas1,datas2]=datas
//             datas2.title='changed'
//             let p=document.createElement('p');
//             p.textContent=datas2.title;
//             p.style.color='red';
//             document.body.append(p);
//             datas1.forEach(element => {
//                 let p=document.createElement('p');
//                 p.textContent='userId:'+element.userId+ ' '+'id:'+element.id+' '+'title:'+element.title+' '+'completed:'+element.completed;
//                 p.style.color='red';
//                 document.body.append(p); 
//             })
//             console.log(datas1,datas2)}).catch((error)=>{console.log(error)})