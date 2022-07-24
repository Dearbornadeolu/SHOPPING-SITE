const userEmail = document.querySelector('#recieve-email')
const userPassword = document.querySelector('#recieve-password')
//let evalEmail = userEmail.value
const userDetails = [
    {
        userName : 'Dearborn',
        phoneNum : '+234 667 8888',
        email : 'example@gmail.com',
        password : 'Tell'
    }
]
function btnRecieveInput(){
    userDetails.forEach(userDetails =>{
        if ((userEmail.value === userDetails.email ) && (userPassword.value === userDetails.password) ){
            document.location.href = 'marketplace.html'
        }
        else{
            alert('wrong input.')
            document.location.reload(true)
        }
    })
}