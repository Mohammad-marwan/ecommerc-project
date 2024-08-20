const sidebar = document.querySelector(".sidebar");
const bars_navbar = document.querySelector(".bars_navbar");
const navbar_upper = document.querySelector(".navbar_upper");
const navbar = document.querySelector(".navbar");
const carousel = document.querySelector(".carousel");


bars_navbar.addEventListener("click",() => {
    try{

   
    
    sidebar.classList.add("show-sideBar");
     document.body.classList.add("padding")
   
}catch{
    alert("error sidebar");
}

});
const icon_close = document.querySelector(".icon_close");
icon_close.addEventListener("click", () =>{
    try{
    sidebar.classList.remove("show-sideBar");
    document.body.classList.remove("padding")
}
    catch{
        alert("error");
    }
    
})
const lightmode = document.querySelector(".lightmode");
const darkmode = document.querySelector(".darkmode");

lightmode.addEventListener("click",()=>{
    try{
    lightmode.classList.add("d_none");
    darkmode.classList.remove("d_none");
    sidebar.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    navbar.classList.add("dark-mode");
    const logo_dark= document.querySelector(".logo_dark");
    logo_dark.setAttribute("src","./images/logo_images/logo-light.png");
    const footer = document.querySelector(".footer");
    footer.classList.add("dark-mode");
    const logo_light= document.querySelector(".logo_light");
    logo_light.setAttribute("src","./images/logo_images/logo-light.png");
    
    
}
    catch{
        alert("error dark mode");
    }
})
darkmode.addEventListener("click",()=>{
    try{
    lightmode.classList.remove("d_none");
    darkmode.classList.add("d_none");
    document.body.classList.remove("dark-mode");
    sidebar.classList.remove("dark-mode");
   navbar.classList.remove("dark-mode");
    const logo_dark= document.querySelector(".logo_dark");
    logo_dark.setAttribute("src","./images/logo_images/logo-dark.png");
    const footer = document.querySelector(".footer");
    footer.classList.remove("dark-mode");
    const logo_light= document.querySelector(".logo_light");
    logo_light.setAttribute("src","./images/logo_images/logo-dark.png");
}
catch{
    alert("error");
}
})
const Clothing_items=document.querySelector(".Clothing_items");
window.addEventListener("scroll",()=>{
    

if(window.scrollY > Clothing_items.offsetTop-100){
    navbar.classList.add("scrollnav");
}
else{
    navbar.classList.remove("scrollnav");
}
});

const up_btn = document.querySelector(".up_btn");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 200 ){
    up_btn.classList.add("show_btn");
    }
    else{
        up_btn.classList.remove("show_btn");
    }
});

up_btn.addEventListener("click",()=>{
    window.scrollTo({top:0 , behavior:"smooth"})

});

const  img_portfolio_menswear = document.querySelector(".img_portfolio_menswear");
img_portfolio_menswear.addEventListener("mouseenter",()=>{
    img_portfolio_menswear.setAttribute("src","./images/portfolio/menswearback.jpg");

});
img_portfolio_menswear.addEventListener("mouseleave",()=>{
    img_portfolio_menswear.setAttribute("src","./images/portfolio/menswear.jpg");

});
const  img_portfolio_menswear0 = document.querySelector(".img_portfolio_menswear0");
img_portfolio_menswear0.addEventListener("mouseenter",()=>{
    img_portfolio_menswear0.setAttribute("src","./images/portfolio/menswear0back.jpg");

});
img_portfolio_menswear0.addEventListener("mouseleave",()=>{
    img_portfolio_menswear0.setAttribute("src","./images/portfolio/menswear0.jpg");

});

const  img_portfolio_menswear1 = document.querySelector(".img_portfolio_menswear1");
img_portfolio_menswear1.addEventListener("mouseenter",()=>{
    img_portfolio_menswear1.setAttribute("src","./images/portfolio/menswear1back.jpg");

});
img_portfolio_menswear1.addEventListener("mouseleave",()=>{
    img_portfolio_menswear1.setAttribute("src","./images/portfolio/menswear1.jpg");

});

const  img_portfolio_jeans = document.querySelector(".img_portfolio_jeans");
img_portfolio_jeans.addEventListener("mouseenter",()=>{
    img_portfolio_jeans.setAttribute("src","./images/portfolio/jeansback.jpg");

});
img_portfolio_jeans.addEventListener("mouseleave",()=>{
    img_portfolio_jeans.setAttribute("src","./images/portfolio/jeans.jpg");

});

const  img_portfolio_jeans0 = document.querySelector(".img_portfolio_jeans0");
img_portfolio_jeans0.addEventListener("mouseenter",()=>{
    img_portfolio_jeans0.setAttribute("src","./images/portfolio/jeans0back.jpg");

});
img_portfolio_jeans0.addEventListener("mouseleave",()=>{
    img_portfolio_jeans0.setAttribute("src","./images/portfolio/jeans0.jpg");

});

const  img_portfolio_jeans1 = document.querySelector(".img_portfolio_jeans1");
img_portfolio_jeans1.addEventListener("mouseenter",()=>{
    img_portfolio_jeans1.setAttribute("src","./images/portfolio/jeans1back.jpg");

});
img_portfolio_jeans1.addEventListener("mouseleave",()=>{
    img_portfolio_jeans1.setAttribute("src","./images/portfolio/jeans1.jpg");

});

const img_portfolio_shose = document.querySelector(".img_portfolio_shose");
img_portfolio_shose.addEventListener("mouseenter",()=>{
    img_portfolio_shose.setAttribute("src","./images/portfolio/oneshose.jpg");

});
img_portfolio_shose.addEventListener("mouseleave",()=>{
    img_portfolio_shose.setAttribute("src","./images/portfolio/shose.jpg");

});
const img_portfolio_shose0 = document.querySelector(".img_portfolio_shose0");
img_portfolio_shose0.addEventListener("mouseenter",()=>{
    img_portfolio_shose0.setAttribute("src","./images/portfolio/oneshose0.jpg");

});
img_portfolio_shose0.addEventListener("mouseleave",()=>{
    img_portfolio_shose0.setAttribute("src","./images/portfolio/shose0.jpg");

});
const img_portfolio_shose1 = document.querySelector(".img_portfolio_shose1");
img_portfolio_shose1.addEventListener("mouseenter",()=>{
    img_portfolio_shose1.setAttribute("src","./images/portfolio/oneshose1.jpg");

});
img_portfolio_shose1.addEventListener("mouseleave",()=>{
    img_portfolio_shose1.setAttribute("src","./images/portfolio/shose1.jpg");

});
const menswear_danger = document.querySelector(".menswear_danger");
menswear_danger.addEventListener("click",()=>{
    img_portfolio_menswear.setAttribute("src","./images/portfolio/menswear.jpg");
});
const menswear_light = document.querySelector(".menswear_light");
menswear_light.addEventListener("click",()=>{
    img_portfolio_menswear.setAttribute("src","./images/portfolio/menswear__.jpg");
});
const menswear_dark = document.querySelector(".menswear_dark");
menswear_dark.addEventListener("click",()=>{
    img_portfolio_menswear.setAttribute("src","./images/portfolio/menswear_.jpg");
});
const menswear0_secondary = document.querySelector(".menswear0_secondary");
menswear0_secondary.addEventListener("click",()=>{
    img_portfolio_menswear0.setAttribute("src","./images/portfolio/menswear0.jpg");
});
const menswear0_light = document.querySelector(".menswear0_light");
menswear0_light.addEventListener("click",()=>{
    img_portfolio_menswear0.setAttribute("src","./images/portfolio/menswear00.jpg");
});
const menswear0_dark = document.querySelector(".menswear0_dark");
menswear0_dark.addEventListener("click",()=>{
    img_portfolio_menswear0.setAttribute("src","./images/portfolio/menswear000.jpg");
});
const menswear1_beige = document.querySelector(".menswear1_beige");
menswear1_beige.addEventListener("click",()=>{
    img_portfolio_menswear1.setAttribute("src","./images/portfolio/menswear1.jpg");
});
const menswear1_Pistachio = document.querySelector(".menswear1_Pistachio");
menswear1_Pistachio.addEventListener("click",()=>{
    img_portfolio_menswear1.setAttribute("src","./images/portfolio/menswear11.jpg");
});
const jeans_black = document.querySelector(".jeans_black");
jeans_black.addEventListener("click",()=>{
    img_portfolio_jeans.setAttribute("src","./images/portfolio/jeans.jpg");
});
const jeans_secondary = document.querySelector(".jeans_secondary");
jeans_secondary.addEventListener("click",()=>{
    img_portfolio_jeans.setAttribute("src","./images/portfolio/jeansgray.jpg");
});
const jeans_white = document.querySelector(".jeans_white");
jeans_white.addEventListener("click",()=>{
    img_portfolio_jeans.setAttribute("src","./images/portfolio/jeanswhite.jpg");
});
const jeans_primary = document.querySelector(".jeans_primary");
jeans_primary.addEventListener("click",()=>{
    img_portfolio_jeans0.setAttribute("src","./images/portfolio/jeans0.jpg");
});
const jeans_beige = document.querySelector(".jeans_beige");
jeans_beige.addEventListener("click",()=>{
    img_portfolio_jeans0.setAttribute("src","./images/portfolio/jeans0beige.jpg");
});
const jeans0_white = document.querySelector(".jeans0_white");
jeans0_white.addEventListener("click",()=>{
    img_portfolio_jeans0.setAttribute("src","./images/portfolio/jeans0white.jpg");
});
const jeans1_beige = document.querySelector(".jeans1_beige");
jeans1_beige.addEventListener("click",()=>{
    img_portfolio_jeans1.setAttribute("src","./images/portfolio/jeans1.jpg");
});
const jeans1_secondary = document.querySelector(".jeans1_secondary");
jeans1_secondary.addEventListener("click",()=>{
    img_portfolio_jeans1.setAttribute("src","./images/portfolio/jeans1gray.jpg");
});
const jeans1_primary = document.querySelector(".jeans1_primary");
jeans1_primary.addEventListener("click",()=>{
    img_portfolio_jeans1.setAttribute("src","./images/portfolio/jeans1blue.jpg");
});
const shoes_dark = document.querySelector(".shoes_dark");
shoes_dark.addEventListener("click",()=>{
    img_portfolio_shose.setAttribute("src","./images/portfolio/shose.jpg");
});
const shoes_success = document.querySelector(".shoes_success");
shoes_success.addEventListener("click",()=>{
    img_portfolio_shose.setAttribute("src","./images/portfolio/shosegreen.jpg");
});
const shoes_light = document.querySelector(".shoes_light");
shoes_light.addEventListener("click",()=>{
    img_portfolio_shose.setAttribute("src","./images/portfolio/shosewhite.jpg");
});
const shoes0_dark = document.querySelector(".shoes0_dark");
shoes0_dark.addEventListener("click",()=>{
    img_portfolio_shose0.setAttribute("src","./images/portfolio/shose0.jpg");
});
const shoes0_white = document.querySelector(".shoes0_white");
shoes0_white.addEventListener("click",()=>{
    img_portfolio_shose0.setAttribute("src","./images/portfolio/shose0white.jpg");
});
const shoes1_dark = document.querySelector(".shoes1_dark");
shoes1_dark.addEventListener("click",()=>{
    img_portfolio_shose1.setAttribute("src","./images/portfolio/shose1.jpg");
});
const shoes1_primary = document.querySelector(".shoes1_primary");
shoes1_primary.addEventListener("click",()=>{
    img_portfolio_shose1.setAttribute("src","./images/portfolio/shose1blue.jpg");
});
const shoes1_light = document.querySelector(".shoes1_light");
shoes1_light.addEventListener("click",()=>{
    img_portfolio_shose1.setAttribute("src","./images/portfolio/shose1white.jpg");
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})