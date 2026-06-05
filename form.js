function f()

{

var a = document.forms["myForm"];

var u = a.uname.value;

var p = a.pword.value;

if(u=="admin" && p=="123")

{

alert("valid");

}

else

{

alert("Invalid");

}

}