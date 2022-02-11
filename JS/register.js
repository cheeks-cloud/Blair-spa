var Login=document.getElementById('btnlogin');
var register=document.getElementById('register');


Login.addEventListener('click',LoginFunction);
register.addEventListener('click',RegisterFunction);
function LoginFunction(e){
    e.preventDefault();
    window.location.href='login.html';
}

function RegisterFunction(e){
    e.preventDefault();
    window.location.href='register_section.html';
}
