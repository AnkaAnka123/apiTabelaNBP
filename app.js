// show Data Time of Tabels
const showEffectiveDate = function(){
  fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
  .then((res) => {
    return res.json();
  })
  .then((data) =>{
    console.log(data);
    let effectiveDate = '';
      data.forEach((tables)=>{
        effectiveDate += `
         ${tables.effectiveDate};
      `;
    })
      document.getElementById('effectiveDate').innerHTML = effectiveDate;
    });
 }
 showEffectiveDate();
document.getElementById('viev-table').addEventListener('click', getTable);


// Get Table from API
function getTable(e){
  fetch('http://api.nbp.pl/api/exchangerates/tables/a/?format=json')
  .then((res) => {
    return res.json();
  })
  .then((data) =>{
    console.log(data);
    let output = '';
   
   data.forEach((tables, i, rates)=> {

  
    for( var i=0; i<tables.rates.length; i++){
                output += `
                <tr>
                <td>${tables.rates[i].currency}</td>
                <td>${tables.rates[i].code}</td>
                <td>${tables.rates[i].mid}</td>
              </tr>
                `;
      
    };
    document.getElementById('currency-table').innerHTML = output;
    });
  })
.catch((err) =>{
  console.log(err)
})
e.preventDefault();
}

