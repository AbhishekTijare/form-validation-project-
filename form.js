console.log("this is validation project ");

let validEmail;
let validName;
let validPhone;



const  Name = document.getElementById('userName');
Name.addEventListener('blur',()=>{
    console.log("name is blured");

    let regex= /^[a-zA-Z]([0-9a-zA-Z]){2,20}$/;
    let str = Name.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log("name is valid");
        if (Name.classList.contains("is-invalid")){
        Name.classList.remove('is-invalid');}
        validName = true;
    }else{
        console.log("name is invalid ");
        Name.classList.add('is-invalid');
        validName = flase;
    }
})



const  email = document.getElementById("userEmail");
email.addEventListener('blur',()=>{
    console.log("email is blured");

    let regex= /^([-\_\.0-9a-zA-Z]+)@([-\_\.a-zA-Z]+).([a-zA-Z]+)$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log("email is valid");
        if (email.classList.contains("is-invalid")){
        email.classList.remove('is-invalid');}
        validEmail = true;
    }else{
        console.log("email is invalid ");
        email.classList.add('is-invalid');
        validEmail = false;
    }
})


const  phone = document.getElementById("userPhone");
phone.addEventListener('blur',()=>{
    console.log("phone is blured");

    let regex= /^([0-9]{10}$)/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log("phone is valid");
        if (phone.classList.contains("is-invalid")){
        phone.classList.remove('is-invalid');}
        validPhone = true;
    }else{
        console.log("phone is invalid ");
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

const submit = document.getElementById("submit");
submit.addEventListener('click',(e)=>{
     e.preventDefault();
     console.log("you clicked on submit ");
     if (validName && validEmail && validPhone){
        console.log("all valid,submitting");
        let alertNotice = document.getElementById('alertNotice');
        alertNotice.innerHTML=`<div class="alert alert-success" role="alert">
                                    Everything valid! Submitted successfully. 
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>`
                                    setTimeout(()=>{
                                        alertNotice.innerHTML ="";
                                    },5000);
     } else if(!validName){
        console.log("Name invalid");
        let alertNotice = document.getElementById('alertNotice');
        alertNotice.innerHTML=`<div class="alert alert-danger" role="alert">
                                    Name invalid!  Not Submitted. 
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>`
                                    setTimeout(()=>{
                                        alertNotice.innerHTML ="";
                                    },5000);

     } else if (!validEmail){
        console.log("email invaild");
        let alertNotice = document.getElementById('alertNotice');
        alertNotice.innerHTML=`<div class="alert alert-danger" role="alert">
                                    Email invalid!  Not Submitted. 
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>`
                                    setTimeout(()=>{
                                        alertNotice.innerHTML ="";
                                    },5000);

     } else{
        console.log("phone invaild");
        let alertNotice = document.getElementById('alertNotice');
        alertNotice.innerHTML=`<div class="alert alert-danger" role="alert">
                                    Phone number invalid!  Not Submitted. 
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>`
                                    setTimeout(()=>{
                                        alertNotice.innerHTML ="";
                                    },5000);
     }
})
