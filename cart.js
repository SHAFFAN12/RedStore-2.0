let cart = localStorage.getItem('cartvalue');
let cartValue = document.getElementById('cart').innerHTML = cart;
let product = document.querySelectorAll(".container");
let pro2 = document.querySelectorAll(".products");
// let prod = JSON.parse(localStorage.getItem('prod'));
// let pric = JSON.parse(localStorage.getItem('pric'));
let setname = JSON.parse(localStorage.getItem("Proname"));
let setprice = JSON.parse(localStorage.getItem("Proprice"));
let section = document.getElementsByTagName("section")[0];




for(let i in setname){
    // addtocart(setname , setprice);
    let createElement = document.createElement('div');
    createElement.setAttribute("class","container");
    createElement.innerHTML = `
    <div class="products">${setname[i]}</div>
    <div class="products item-price">${setprice[i]}</div>
    <input type="number" class="products qty" placeholder="0">
    <div class="products sub" id="sub">Rs : 0</div>
    <button class="products removeBtn" id="removeBtn">Remove</button>
    `
    section.append(createElement);
}
let qty = document.getElementsByClassName("qty");
for(let i = 0 ; i<qty.length ; i++){
    qty[i].addEventListener("click" , (e)=>{
        let updateE1 = e.target;
        let parentE1 = updateE1.parentElement;
        let itemprice = parentE1.children[1].innerHTML.replace('Rs : ',' ');
        let subtotal = parentE1.getElementsByClassName("sub")[0].innerHTML;
        let updatesubtotal = parseInt(itemprice,10) * parseInt(updateE1.value,10);
        let itemprices = parentE1.children[3];
        itemprices.innerHTML = `Rs : ${updatesubtotal}`;
        if(e.target.value < 0){
            itemprices.innerHTML = "Rs : 0";
        }
    })
}
let removebtn = document.getElementsByClassName("removeBtn");
removebtn = Array.from(removebtn);
for(let i in removebtn){
    removebtn[i].addEventListener('click',(e)=>{
        let parent = e.target.parentElement.remove();
        cartValue = cartValue - 1;
        document.getElementById('cart').innerHTML = cartValue;
        console.log(cartValue);
     })
}


// login
let input = document.getElementsByTagName("input");
let error = []
let show = document.getElementById("show");
let pass = document.getElementById("pass");

function addEmail(){
    const existingEmail = document.getElementById("email");
    // function will stop if @ found
    if(existingEmail.value == ""){
        return 0
    }
    else if (existingEmail.value.includes("@gmail.com")) {
        return 0
    }
    else{
        existingEmail.value = existingEmail.value + "@gmail.com"; 
    }
    if(existingEmail.value.includes(" ")){
        console.log("Yes");
        alert("Please remove space");
    }
}
function submit(){
    for(let i=0 ; i<input.length ; i++){
        if(input[i].value == ""){
            let errorTxt = `${input[i].name} is required`
            error.push(errorTxt)
        }
    }
    if (error.length > 0) {
        alert(error.join(","))
        error = [];
    }
    else{
        alert("Thanks For Login this Website");
    }
    input[0].value = "";
    input[1].value = "";

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
let a = localStorage.getItem("check");
console.log(a);
function showlogin(){
    if(a == "true"){
        alert("You already log in")
    }
    else{
        document.getElementById("background").style.display = "flex";
    }
}
function loghide(){
    document.getElementById("background").style.display = "none";
}
