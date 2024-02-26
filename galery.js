// selecting all required elements
const filterpic = document.querySelector("pic");
const filterimg = document.querySelector("images");

window.onload =()=>{ //once window loaded
    filterpic.onclick = (selectedpic)=> { // when user clicked on filteritem div
    if(selecteditem.target.classList.contians("pic")){ // if user click element has .pic class
    filteritem.queryselector(".active"). classList.remove("active"); //remove the active class which is in the first element
    selecteditem.target.classList.add("active"); //add that active class on the user selected element or item
    let filterName = selecteditem.target.getattribute("data-name"); //getting data-name value of the user selected item and storing in a filtername variable
    filterimg.forEach((image)=>{
        Let filterimages =image.getAttribute("data-name"); //getting inage data-name value
        // if user selected item data-name value is equal to image data-name value
        // or user selected item data-name value is equal to "all"
        if((filterimages == filterName) || filterName =="all"){
            images.classList.remove("hide")
            images.classList.add("show");
        }else{
            images.classList.add("hide");
            images.classList.remove("show");
        }
    
    });
    }
 }
}