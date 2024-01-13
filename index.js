var mbar=document.querySelector(".menue");
var sbar=document.querySelector(".mob");
var cbar=document.querySelector(".cls")
var flag =0;
mbar.addEventListener("click",function(){
    if(flag==0)
    {
        sbar.style.left="0"
        flag=1

    }
    else{
        sbar.style.left="-100%"
        flag=0
    }
})
gsap.to(".mob",{
    left:"-100%",
    scrollTrigger:{
        trigger:"#nav",
        start:"100% 0%",
        scrub:1,
        flag : 0
    }})   
var m=0
var shp=document.querySelector("#nav h3");
var sle=document.querySelector(".sale");
shp.addEventListener("mouseenter",function(){
        sle.style.opacity="1"
})
shp.addEventListener("mouseleave",function(){
    sle.style.opacity="0"
})