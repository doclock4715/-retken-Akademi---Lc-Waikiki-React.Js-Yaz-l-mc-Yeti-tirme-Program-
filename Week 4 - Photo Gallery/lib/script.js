
 let imgCell = document.querySelectorAll(".cell") /* To get cell css class */

 for(var i=0;i<imgCell.length;i++){
    let c = "https://source.unsplash.com/random/"+(i+300)+"x"+(i+300); /* Why addition? because if it is 300x300
     every photo is same. I needed to chane pixel value */
    imgCell[i].style.cssText = " background-image: url("+c+");" /* give bg img to cell class */
}  
  


 
