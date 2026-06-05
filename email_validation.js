<script>

function checkMail()

{

var a = document.getElementById("myText").value;

var pattern = "^[\\w-\\.]+@[\\w]+\\.[\\w]+$";

var regex = new RegExp(pattern);

if(regex.test(a))

{

alert("Valid");

}

else

{

alert("Invalid");

}

}

</script>