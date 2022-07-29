if (document.body.id === 'signup') {
    document.querySelector('#header-backbtn').addEventListener('click', function () {
        document.location.href = 'index.html'
    })
    document.querySelector('#submit').addEventListener('click', function () {
        if ((document.getElementById('password').value) !== (document.getElementById('conPassword').value)) {
            alert('Your passsword and confirm password are not matching')
        } else {
            if ((document.getElementById('FirstName').value.length < 1) || (document.getElementById('LastName').value.length < 1)
                || (document.getElementById('email').value.length < 1) || document.getElementById('password').value.length < 1) {
                alert('please input you may have missed a column')
                document.location.reload(true)
            } else {
                localStorage.setItem("userFname", document.getElementById('FirstName').value)
                localStorage.setItem("userLname", document.getElementById('LastName').value)
                localStorage.setItem("userEmail", document.getElementById('email').value)
                localStorage.setItem("userTel", document.getElementById('tel').value)
                localStorage.setItem("password", document.getElementById('password').value)
                localStorage.setItem("confirmPassword", document.getElementById('conPassword').value)
                document.location.href = 'login.html'
            }
        }
    })
} else {
    const userEmail = document.querySelector('#recieve-email')
    const userPassword = document.querySelector('#recieve-password')
    //let evalEmail = userEmail.value
    function btnRecieveInput() {
        if (localStorage.getItem("userFname") == null) {
            alert('match not found!!! pls sign up')
            document.location.href= 'signup.html'
        } else if ((userEmail.value === localStorage.getItem('userEmail')) && (userPassword.value === localStorage.getItem('password'))) {
            document.location.href = 'marketplace.html'
        }
        else {
            alert('wrong input.')
            document.location.reload(true)
        }
    }
}