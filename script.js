async function openBrewery(){
   
    try{
        var apiUrl = "https://api.openbrewerydb.org/v1/breweries"
        var fetchUrl = await fetch(apiUrl)
        var dataFetch = fetchUrl.json()
        var finalResult = await dataFetch
        console.log(finalResult) 

        for(let i of finalResult){
            var name = i.name
            var breweryType = i.brewery_type
            var street = i.street
            var city = i.city
            var postal = i.postal_code
            var phoneNo = i.phone
            var websiteUrl = i.website_url
            console.log(name,breweryType,street,city,postal,phoneNo,websiteUrl)

            var parent = document.createElement('div')
            parent.setAttribute('class','col-sm-12 ')

            parent.innerHTML=`
                <div class="card-header">
                    <h3 class="head">${name}</h3>
                </div>
                <div class="card-body">
                    <p class = "ptag"><b>Brewery Type :</b> ${breweryType}</p>
                    <p class = "ptag"><b>Address :</b> ${street},${city},${postal}</p>
                    <p class = "ptag"><b>Phone Number :</b> ${phoneNo}</p>
                    <a class="btn btn-outline-primary" href ="${websiteUrl}" target = "newtag">Click here</a>
                </div>`

            document.querySelector('body').append(parent)

            
        }
        
    }
    catch(err){
        console.log(err)
    }
    
    
}
openBrewery()




function textFunc(){
    let input = document.getElementById('inputText').value
    input = input.toLowerCase()
    let text = document.getElementsByClassName('card')

    for(var i=0;i<text.length;i++){
        if(!text[i].innerHTML.toLowerCase().includes(input)){
            text[i].style.display="none"
            
        }
        else{
            text[i].style.display="list-item"
            
        }
    }
}
