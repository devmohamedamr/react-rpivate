// var nav  = document.getElementById("nav")

// window.onscroll = function(){
//     if(window.scrollY >= 500){
//         nav.classList.add("navred")
//         nav.classList.remove("nav")
//     }else{
//         nav.classList.remove("navred")
//         nav.classList.add("nav")
//     }
// }


// var gototop = document.getElementById("gototop")
// window.onscroll = function(){
//     if(window.scrollY >= 100){
//         gototop.style.display = "block" 
//     }else{
//         gototop.style.display = "none" 
//     }
// }


// var room = document.getElementById("room")

// window.onscroll = function(){
//     if(window.scrollY >= room.clientHeight){
//         room.style.opacity = 1
//     }
// }




// console.log(1)
// console.log(2)
// console.log(3)


// setTimeout(function(){
//     console.log("saher")
// },1000)


// setTimeout(function(){
//     document.getElementById("loader").style.display = "none"
// },1000)
// window.onload = function () {
//     document.getElementById("loader").style.display = "none"
// }



// setInterval(function(){
//     console.log("test")
// },1000)



var imgs = [
    "img/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp",
    "img/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp",
    "img/xgallery3.png.pagespeed.ic.38W7JPYvku.webp",
    "img/xgallery4.png.pagespeed.ic.eeH-radW60.webp"
]

var i = 0
setInterval(function(){
    document.getElementById("img").src = imgs[i]
    if(i>=imgs.length){
        i = 0
    }
    console.log(i)
    i++
},1000)


