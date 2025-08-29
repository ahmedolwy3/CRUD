let tittle = document.getElementById("tittle");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");         
let total = document.getElementById("total");
let count = document.getElementById("count");   
let category = document.getElementById("category");
let submit = document.getElementById("submit");


// get total function//
function getTotal(){
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) 
        - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }
    else{
        total.innerHTML = '';
        total.style.background = '#a00d02';
    }
    
}
 

//create product//
//save in local storage//
    let dataPro;
 if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
 }else{
    dataPro = [];
 }



 submit.onclick = function(){
    let newPro= {
        tittle:tittle.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    dataPro.push(newPro);
    localStorage.setItem('product', JSON.stringify(dataPro) );
    console.log(dataPro);

    clearData();
    
 }

//clear inputs//
function clearData(){
    tittle.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';

}


//read//
function showData(){
    
}

//count//
//delete//
//update//  
//search//      
//clean data//