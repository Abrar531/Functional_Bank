document.getElementById("login-submit").addEventListener('click', function(){
    console.log("button clicked");

    //get user email
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value;
    console.log(userEmail)
    
    //get user password
    const passField = document.getElementById('user-pass')
    const userPass = passField.value;
    console.log(userPass)

    //check email and password 
    if(userEmail == 'sontan@gmail.com' && userPass == 'secret'){
        console.log("valid user");
        window.location.href = "banking.html"
    }
})