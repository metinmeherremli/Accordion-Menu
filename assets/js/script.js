let label = document.getElementsByClassName("accordion")
for (let i = 0; i <label.length; i++){
    label[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
 
}