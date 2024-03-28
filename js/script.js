let cg = console.log
let $ = document

let modalParentDiv = $.querySelector(".modal-parent")
let modalDiv = $.querySelector(".modal")
let btn = $.querySelector(".button")
let span = $.querySelector("#span")
let sectionElem = $.querySelector("section")

btn.addEventListener("click", function(){
    modalParentDiv.style.display = "block"
    sectionElem.style.filter = "blur(10px)"
    btn.blur()
})

span.addEventListener("click" , function(){
    modalParentDiv.style.display = "none"
    sectionElem.style.filter = "blur(0px)"

})

$.body.addEventListener("keyup", function(event){
if(event.key === "Escape" && modalParentDiv.style.display == "block" ){
    modalParentDiv.style.display = "none"
    sectionElem.style.filter = "blur(0px)"
}
})