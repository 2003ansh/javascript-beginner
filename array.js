let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n']

console.log(letters.reverse())
console.log(letters.reverse())

// slice method return the new array and not change the original array and also not add the element in the array
// let news=letters.slice(0,5) //---->slice(starting index,ending index). here ending index is not included and it will return the element from starting index to ending index-1. it can also take negative index.


// splice delete the element from the array and return the deleted element and also change the original array and also add the element in the array
// let news=letters.splice(0,5,'A','B','C','D','E') //---->splice(starting index,how many element you want to delete,element you want to add,element you want to add)
let news=letters.splice(0,5,'A','B','C','D','E')
console.log(news)
console.log(letters)

 let salaries = [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000]
 // map method return the new array and not change the original array and also not add the element in the array.basicallly it is used to iterate the array.
 let newsalaries=salaries.map(ele=>{
    console.log(ele)
    let increment=ele+ele*0.5;return increment}
 )
    console.log(newsalaries)

    let students=[{id:1,name:'ansh'},{id:2,name:'anuj'},{id:4,name:'anand'},{id:4,name:'aniket'},{id:5,name:'anmol'}];

    // find method is used to find the element in the array and return the element if it is present in the array otherwise return undefined.
    let result=students.find(ele=>{
        
        return ele.id===4
    })
    console.log(result)

  //  filter method is used to filter the element in the array and return the element if it is present in the array otherwise return undefined.

    //let result1=students.filter(ele=>{ ele.id===4;return ele}) here it will return the array of object.basicall filter method is used to filter the element in the array and return the element if it is present in the array otherwise return undefined. for example if we want to filter the element whose id is greater than 3 then we can use filter method.
    let result1=students.filter(ele=>{ if(ele.id>=3)return ele})
    console.log(result1)
    
    // findIndex method is used to find the index of the element in the array and return the index if it is present in the array otherwise return -1.
    let ages=[21,22,23,24,25,26,27,28,29,30];
    let result2=ages.findIndex(ages=>{
        return ages>=25 
    })
    console.log(result2)