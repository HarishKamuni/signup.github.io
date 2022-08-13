function signup(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

       

    if( pass==""){
        alert("Please enter name,email and password");
        
        
    }else{
       
        localStorage.setItem("name1",name);
        localStorage.setItem("email1",email);
        localStorage.setItem("pass1",pass);
    
        alert("You Successfully Resistered");
        ;
        
        
    }
   
 
}

function login(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    const email1 = localStorage.getItem("email1");
    const pass1 = localStorage.getItem("pass1");

    if(email=="" || pass==""){
        alert("Please enter email and password");
    }

    else if(email==email1 && pass==pass1){
        window.location.href="index1.html";
    }else{
        alert("email or password incorrect");
    }
}