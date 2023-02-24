document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const email =emailField.value;

    const passwordField = document.getElementById('user-password');
    const password =passwordField.value;
    console.log(password);

    // step 4 :verify email and password 
     if(email == 'sontan@gmail.com' && password =='sontan'){
        window.location.href ='bank.html'
    }
     else{
        alert('invalid user ')
    }
})  
