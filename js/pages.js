let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let app = document.getElementById("app")
let info = document.getElementById("info")
let background = document.getElementById("background")

app.style.display = "none"
page2.style.display = "none"

page1.addEventListener("click", function(){
    page1.style.display = "none"
    page2.style.display = "block"
})

page2.addEventListener("click", function(){
    page2.style.display = "none"
    background.style.display = "none"
    app.style.display = "block"
})

function showPlan(){

}

function showInfo(){

}