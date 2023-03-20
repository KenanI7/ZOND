


const sendEmail = document.getElementById("send-email");
const firstName = document.querySelector("input[name='first_name']");
const lastName = document.querySelector("input[name='last_name']");
const phoneNo = document.querySelector("input[name='phone_no']");
const email = document.querySelector("input[name='email']");
const description = document.querySelector("textarea[name='description']");


sendEmail.addEventListener("submit", (e)=> {
    e.preventDefault();
    const fullName = firstName.value+" "+lastName.value
    console.log(fullName)

    if(containsNumber(fullName)){
       alert("Ime ni prezime ne smiju da sadrže broj")
    }
    
    else if(fullName=="" || description.value == "" ){
        alert("Molimo vas popunite sva polja")
    }    
    
 
    
    
    else{
    window.open(`mailto:imamovick357@gmail.com?subject=Mail od ${fullName}&body=${description.value}`);
    firstName.value = "";
            lastName.value = "";
            description.value = "";
    }
})

function containsNumber(str) {
    return /[0-9]/.test(str);
  }

