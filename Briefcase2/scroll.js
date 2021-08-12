const header = document.getElementById("header-main");

function scrollHeaderTop(){
    if(window.scrollY > 500) {
        header.classList.add("fixed-header");
    }
}

header.addEventListener("click", scrollHeaderTop);
document.addEventListener("scroll", scrollHeaderTop);

// document.onscroll = scrollHeaderTop;