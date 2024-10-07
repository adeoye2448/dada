// To opn and close the mobile navigation bar

const myNavBar = document.getElementById("navBar");
const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close");

function openAndClose(){
    if(myNavBar.style.display==="none"){
        myNavBar.style.display="flex"
    }

    else{
        myNavBar.style.display="none"
    }
}

openBtn.addEventListener('click', openAndClose);
closeBtn.addEventListener('click', openAndClose);