let quantity = document.querySelectorAll('.produit .quantity')
let prixUnit = document.querySelectorAll('.produit .prix')
let total  = document.querySelectorAll('.total .finalTotal')
let btnAdd =document.querySelectorAll('.produit .add')
let totalProduit=document.querySelectorAll('.produit .totalProduit')
let btnSub = document.querySelectorAll('.produit .sub')
let btnDelt = document.querySelectorAll('.produit .remove')
let sum =parseInt(prixUnit[0].innerHTML)+parseInt(prixUnit[1].innerHTML)+parseInt(prixUnit[2].innerHTML)
let q=1
for(let i=0;i<quantity.length;i++){
    btnAdd[i].addEventListener('click',()=>{
        parseInt(btnAdd[i].nextElementSibling.innerHTML++)  
        totalProduit[i].innerHTML=(parseInt(btnAdd[i].nextElementSibling.innerHTML)*parseInt(prixUnit[i].innerHTML)).toString().concat('$')
     

        
        sum=parseInt(totalProduit[0].lastChild.data)+parseInt(totalProduit[1].lastChild.data)+parseInt(totalProduit[2].lastChild.data)
    
        total[0].innerHTML = sum.toString().concat('$')
         
        console.log(totalProduit)
    })
    btnSub[i].addEventListener('click',()=>{
        if( parseInt(btnSub[i].previousElementSibling.innerHTML)>1){
            parseInt(btnSub[i].previousElementSibling.innerHTML--)
        }
      
       totalProduit[i].innerHTML=(parseInt(btnAdd[i].nextElementSibling.innerHTML)*parseInt(prixUnit[i].innerHTML)).toString().concat('$')
     

        
       sum=parseInt(totalProduit[0].lastChild.data)+parseInt(totalProduit[1].lastChild.data)+parseInt(totalProduit[2].lastChild.data)
   
       total[0].innerHTML = sum.toString().concat("$")
    
    })
    btnDelt[i].addEventListener('click',(e)=>{
        e.target.parentElement.remove()

        sum = sum -+parseInt(totalProduit[i].lastChild.data)
        total[0].innerHTML = sum.toString().concat("$")


    })


}
    

total[0].innerHTML = sum.toString().concat('$')

