const email = document.querySelector("#email");
const Password = document.querySelector("#Password"); 
const addbtn = document.querySelector(".addbtn");
const newlogin = [];
const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordregex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
addbtn.addEventListener("click", (e) =>{
    e.preventDefault();
    
    const login = {
        email:email.value,
        Password:Password.value

    }
    
    newlogin.push(login);
    console.log(newlogin);
    displaylogin();
    

});

const displaylogin = ()=>{
    console.log(newlogin);
   const data = newlogin.map((ele)=>{
        return `
        <tr>
        <td>${ele.email}</td>
        <td>${ele.Password}</td>
        
        </tr>
        
        `;


    }).join(' ');
    document.querySelector(".loginTable").innerHTML = data;
}


email.addEventListener("blur", ()=>{
    if(emailregex.test(email.value)){
       email.classList.add(`is-valid`);
       email.classList.remove(`is-invalid`);
    }else{
       
       email.classList.add(`is-invalid`);
       email.classList.remove(`is-valid`);
    }
});
Password.addEventListener("blur", ()=>{
    if(passwordregex.test(Password.value)){
        Password.classList.add(`is-valid`);
        Password.classList.remove(`is-invalid`);
    }else{
       
        Password.classList.add(`is-invalid`);
        Password.classList.remove(`is-valid`);
    }
});