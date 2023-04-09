
// ============= show and hide password ================
// var input = document.getElementById("passwordInput")
// var btn = document.getElementById("showBtn")

// btn.onclick = function(){
//     if(input.type == "password"){
//         input.type   = "text"
//         btn.innerText = "hide"
//     }else{
//         input.type   = "password"
//         btn.innerText = "show"
//     }
// }


// var username = "mohamed"
// console.log(username[1])


// var text  = document.getElementById("text")
// var res = document.getElementById("res")
// text.onkeyup = function(){
//     if(text.value.length >= 20){
//         text.style.outline = "red 1px solid"
//     }else{
//         text.style.outline = "black 1px solid"
//     }
//     res.innerText = "count is :"+text.value.length 
// }




// var text = document.getElementById("text")
// var save = document.getElementById("save")
// var val = document.getElementById("val")
// save.onclick = function(){
//     if(text.value.length == 0){
//         text.style.outline = "red 1px solid"
//         val.innerText = "this faild is required"
//     }else{
//         text.style.outline = "black 1px solid" 
//         val.innerText = ""
//     }
// }



// var imgs = [
//     "img/xgallery2.png.pagespeed.ic.R67GzIjQgh.webp",
//     "img/xgallery3.png.pagespeed.ic.38W7JPYvku.webp",
//     "img/xgallery4.png.pagespeed.ic.eeH-radW60.webp",
//     "img/xgallery1.png.pagespeed.ic.RiMoEHAQJU.webp"
// ]


// var img = document.getElementById("img")
// var i = 0
// document.getElementById("next").onclick = function(){
//     img.src = imgs[i%imgs.length]
//     i++
// }


// document.getElementById("back").onclick = function(){
//     img.src = imgs[i%imgs.length]
//     i--
// }




// var num1 = document.getElementById("num1")
// var num2 = document.getElementById("num2")
// var send = document.getElementById("send")
// var res = document.getElementById("res")

// send.onclick = function(){    
//     res.innerText = parseInt(num1.value) + parseInt(num2.value)
// }


// document.getElementById("red").onclick = function(){
//     document.body.style.background = "red"
// }

// document.getElementById("blue").onclick = function(){
//     document.body.style.background = "blue"
// }

// document.getElementById("green").onclick = function(){
//     document.body.style.background = "green"
// }



// document.getElementById("colors").onclick = function(w){
//     document.body.style.background = w.target.id
// }