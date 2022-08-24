document.getElementById('login-submit').addEventListener('click',function(){
    const userEmail =document.getElementById('user-email').value;
    const userPass = document.getElementById('user-pass').value;

    if(userEmail == 'bishal@gmail.com' && userPass== 'bishal'){
        window.location.href ='js/login.html';
    }


    
})