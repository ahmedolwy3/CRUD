let searchmood = "tittle";
function getSearchMood(id){
    let search = document.getElementById("search");
    if( id == "searchTittle"){
        searchmood = tittle;
        search.placeholder = "search by tittle";
    }else{
        searchmood = category;
        search.placeholder = "search by category";

}
   search.focus();
}


function searchData(value)

 {
        let table = '';

    if (searchMood == "tittle")
        {
        for(let i=0; i<dataPro.length; i++){
            if(dataPro[i].tittle.includes(value)){
                  table += `
              <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].tittle}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td> 
                    <td>
                    <button onclick="updateData(${i})" id="update">update</button>
                    </td>
                    <td>
                    <button onclick="deleteData(${i})" id="delete">delete</button>
                    </td>

                </tr>
        `
            }
        }
    }

 else{

 }
     document.getElementById("tbody").innerHTML = table;
 }
