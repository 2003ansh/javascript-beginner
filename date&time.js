// let current = new Date();
// console.log(current.getHours())


// let current1 = new Date(2003,09,23);
// console.log(current1)

// let current2 = new Date(2015,06,20).getTime();
// console.log(current2)

// //1689791400000
// console.log((24*60*60*1000)+(11*60*60*1000)+(15*60*1000))

let hour=document.querySelector(".hr");
let minute=document.querySelector(".min");
let second=document.querySelector(".sec");

console.log(hour,minute,second)
let clock=function(){
    let dates =new Date()
    let hr=dates.getHours()
    let min=dates.getMinutes()
    let sec=dates.getSeconds()
    hour.innerText=hr;
    minute.textContent=min
    second.textContent=sec
}
setInterval(clock,1000)
