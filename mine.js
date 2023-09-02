let titel = document.getElementById('titel')
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
console.log(titel ,price,taxes,ads,discount,total,count,category,submit)
function gettotal() 
{
    if (price.value !='') {
        let result = (+price.value + +taxes.value + +ads.value)
    
      -  +discount.value;
        total.innerHTML = result;
        total.style.background = 'blue' ;
    }
}
