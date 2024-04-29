


let list=document.getElementById("list");
add.addEventListener("click",function(){
    let val=document.getElementById("myInput").value;
    list.innerHTML+=`<li>
    <span>${val}</span>
    <button class="removeItem">sil</button>
    <span class="ready">hazir</span>
</li>`
document.getElementById("myInput").value="";


let removeBtn=document.querySelectorAll("#list li .removeItem");
removeBtn.forEach(listItem => {
    list.addEventListener("click",function(){
        list.parentElement.remove();
    })
});



let readyBtn=document.querySelectorAll("#mylist li .readyItem");
readyBtn.forEach(element => {
    element.addEventListener("click",function(){

      element.parentElement.style.textDecoration = "line-through";

    })
});

})

