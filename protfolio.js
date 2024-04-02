function handlesubmit(e){
    e.preventDefault
    
    const Fullname=document.getElementById("FullnameError");
    if(Fullname.length<3){
        FullnameError.style.disply="block";
        FullnameError.style.color="red";
        FullnameError.innerHTML=<p>"Fullname should contain minimum 3 letters"</p>

    }
}