let buttons = document.querySelectorAll(".readmore");
let text = document.querySelectorAll(".text");
let item = document.querySelectorAll(".items");
let btn = Array.from(buttons);
let cart = document.querySelectorAll(".cart");
let res = document.getElementById("cart").innerHTML;
let addtocart = document.querySelectorAll(".AddtoCart");
let headings = document.querySelectorAll(".headings");
let arrname = [];
let arrprice = []


    for(let i = 0 ; i<btn.length ; i++){
        buttons[i].addEventListener('click',(e)=>{
            if(buttons[i].innerHTML.includes("Read More")){
                text[i].style.height = "auto";
                item[i].style.height = "auto";
                btn[i].innerHTML = 'hide<i class="fa-sharp fa-solid fa-caret-up"></i>';
            }
            else{
                buttons[i].innerHTML = 'Read More <i class="fa-solid fa-caret-down"></i>';
                text[i].style.height = "100px"
            }
        })
        addtocart[i].addEventListener("click",(e)=>{
            res = Number(res) + 1;
            localStorage.setItem('cartvalue' , res);
            document.getElementById("cart").innerHTML = localStorage.getItem('cartvalue');
            let addtocartE1 = e.target.parentElement
            let proname = addtocartE1.children[1].innerHTML;
            let proprice = addtocartE1.children[4].textContent;
            arrname.push(proname)
            arrprice.push(proprice)
            let strname = JSON.stringify(arrname);
            let strprice = JSON.stringify(arrprice);
            localStorage.setItem('Proname',strname);
            localStorage.setItem('Proprice',strprice);
        })
    }

    // Login

let input = document.getElementsByTagName("input");
let error = []
let show = document.getElementById("show");
let pass = document.getElementById("pass");
let emailcheck = document.getElementById("email");
let inputs = document.getElementsByClassName("input");
let input1 = document.getElementsByClassName("input1");

function addEmail(){
    const existingEmail = document.getElementById("email");
    // function will stop if @ found
    if(existingEmail.value == ""){
        return 0
    }
    if(existingEmail.value.includes(" ")){
        alert("Please remove space");
    }
    else if (existingEmail.value.includes("@gmail.com")) {
        return 0
    }
    else{
        existingEmail.value = existingEmail.value + "@gmail.com"; 
    }
    
}
function submit(){
    for(let i=0 ; i<input1.length ; i++){
        if(input1[i].value == ""){
            let errorTxt = `${input1[i].name} is required`
            error.push(errorTxt)
        }
    }
    if (error.length > 0) {
        alert(error.join(","))
        error = [];
    }
    // else{
    //     alert("Thanks For Login this Website");
    //     document.getElementById("background").style.display = "none";
    //     document.getElementById("sidemenu").children[4].innerHTML = "";
    // }
    // input[0].value = "";
    // input[1].value = "";

    let password = localStorage.getItem("password");
    let email = localStorage.getItem("email");
    let check = false
    if(pass.value == password && emailcheck.value == email){
        alert("Thanks For Login this Website");
        document.getElementById("background").style.display = "none";
        document.getElementById("sidemenu").children[4].innerHTML = "";
        // console.log(document.getElementById("sidemenu").children[4].innerHTML)
        check = true;
        localStorage.setItem("check",check);
    }
    else if(pass.value == password && emailcheck.value != email){
        console.log(email , password);
        alert("Email is incorrect");
    }
    else if(pass.value != password && emailcheck.value == email){
        alert("Password is incorrect");
    }
    else{
        alert("Email and Password is incorrect");
    }

}
show.addEventListener("click" , (e)=>{
    if(show.innerHTML == "Show Password"){
    pass.setAttribute("type","text");
    show.innerHTML = "Hide Password";
    }
    else{
        pass.setAttribute("type","password");
        show.innerHTML = "Show Password";
    }
})

function showlogin(){
    document.getElementById("background").style.display = "flex";
    document.getElementById("container1").style.display = "flex";
    document.getElementById("container2").style.display = "none";
    document.getElementById("background").style.position = "fixed";
}
function loghide(){
    document.getElementById("background").style.display = "none";
}
function signuppage(){
    document.getElementById("background").style.display = "flex";
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "flex";
    document.getElementById("background").style.position = "fixed";
}

function loginpage(){
    for(let i=0 ; i<inputs.length ; i++){
        if(inputs[i].value == ""){
            let errorTxt = `${inputs[i].name} is required`
            error.push(errorTxt)
        }
    }
    if (error.length > 0) {
        alert(error.join(","))
        error = [];
    }
    let pass1 = document.getElementById("pass2").value;
    let pass2 = document.getElementById("pass3").value;

    if(pass1 != pass2){
        alert("Re_check password is incorrect");
    }
    else if(pass1.length < 6){
        alert("Your Password must have atleast 6 characters");
    }
    // else{
    //     document.getElementById("sidemenu").children[4].innerHTML = "";
    // }
    // input[0].value = "";
    // input[1].value = "";
    else{
    document.getElementById("container1").style.display = "flex"
    document.getElementById("container2").style.display = "none";
    }
    localStorage.setItem("email",document.getElementById("email2").value);
    localStorage.setItem("password",pass1);
}

