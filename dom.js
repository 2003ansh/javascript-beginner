// // getting html elemnts using queryselector/all
// // queryselector return 'first elemtent'that match css selector

// let resultElement=document.querySelectorAll('p')
// console.log(resultElement)

//  let resultElements=document.querySelectorAll('p')
//  console.log(resultElements)
//  resultElement.forEach(key=>{
//     console.log(key)
//  }); 

// //  target elemts by id
// let elementsbyid=document.getElementById('coders')
// console.log(elementsbyid)

// //target by class
// let  elemtsbyclass=document.getElementsByClassName('coderdost')
// console.log(elemtsbyclass)
// //-------------------------------------------------------------------------

// // how to change/modify the contetnt
// let content=document.querySelector('.content p')


// console.log(content.innerText) //---> retrive and set contetnt in plain text


// console.log(content.innerHTML)  //---->retrive and set contetnt in html formate

// content.innerText +='great codders'

// content.innerHTML+='<h1>great coders58</h1>'


// console.log(content.innerText)
// // getting and setting of elements

// let link=document.querySelector('a')
// console.log(link)
// console.log(link.innerText)
// // link.forEach(function(qwe) {
// //    console.log(qwe.innerHTML);
// //  });
// //  link.forEach(function(qwe) {
// //    console.log(qwe.innerText);
// //  });
// //  link.forEach(function(link) {
// //    console.log(link.getAttribute('href'));
// //  });
//   console.log(link.getAttribute('href'))
// // console.log(link.getAttribute("href"))
// //-->getting the attributes

// //set the link or change it
//  link.setAttribute('href','https://youtu.be/RGKi6LSPDLU=500s') //----->changing the attributes
// // console.log(link.getAttribute('href'))
//  link.innerHTML="<h1>React playlist</h1>"
// // console.log(link.innerHTML)

// console.log('/*********Adding the style**********/')
//  // Adding style

//  let heading = document.querySelectorAll('h1,a')
// //  heading.classList.add('newclass')
//  heading.forEach((ele)=>
//  {
//   ele.style.color="red"
//   ele.style.textDecoration='none'
//   ele.style.backgroundColor='yellow'
//  })
// //  heading.style.color="red"

// //let head = document.querySelectorAll('.newclass')
// // head.forEach((eles)=>
// // {
// //  eles.style.background-color ='yellow'
// //  //ele.style.textDecoration='none'
// // })
// //heading.classList.add('newclass')
// let op=document.querySelector('.coderdost')

// op.classList.remove('newclass1')
// let op1=document.querySelector('#coders')
// op1.classList.add('newclass1')
// let headings = document.querySelectorAll('.newclass1')
// //console.log(head.innerText)
// headings.forEach((ele) =>{
//   ele.style.backgroundColor ='green'
//   ele.style.color='red'
// })

// let parentelement=document.querySelector('.ansh')
// console.log(parentelement.children)
// Array.from(parentelement.children).forEach((ele)=>{
//   ele.style.color='blue'
// })
// let childelement=document.querySelector('h4')
// console.log(childelement.parentElement)

// ********************************************event listener**************************/
let events=document.querySelector('.click')
events.addEventListener('click',function(){
  console.log('you clicked me')
})
let elements=document.querySelectorAll('li')
elements.forEach((element) => {
  element.addEventListener('click',function(){
    console.log('you clicked me',element.innerText)
  })
})