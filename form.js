let form = document.querySelector('.signup')
console.log(form)


//REgular Expression (regex)
//it is a pattern of characters used to do pattern matching with strings
// or we can say data validation
//Implemntation of password validation
//length at least =8
// at least one special character
// at least one number
// at least one uppercase and lowercase
// let email = document.getElementById('email')
let passwordpattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}/
let user=document.getElementById('username')
let userpattern=/^[A-Za-z]{6}$/
form.addEventListener('submit', (e) => {
    console.log(e)
    e.preventDefault()
    console.log(form.email.value,form.password.value,form.username.value)
    let result=passwordpattern.test(form.password.value)
    console.log(result)
    if(result){
        console.log('valid password')
    }
    else{
        console.log('invalid password')
        alert('invalid password')
    }
})
user.addEventListener('keyup', (e) => {
    console.log(e)
    let res=userpattern.test(e.target.value)
    if(res){
        console.log('valid user')
        user.classList.add('correct')
        user.classList.remove('error')
        username.append('valid user')
    }
    else{
        console.log('invalid user')
        // alert('invalid password')
        user.classList.add('error')
        let err=document.createElement('p')
        err.textContent='invalid user'
        form.append(err)
        user.classList.remove('correct')
    }
})
