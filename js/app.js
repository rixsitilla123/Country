let elList = document.querySelector(".country-list")



const getData = async (URL) => {
    const res = await fetch(URL)
    const data = await res.json()
    return data 
}

getData("https://restcountries.com/v3.1/all").then(res => {
    renderCountry(res, elList)
})

function renderCountry(arr, list){
    list.innerHTML = "" 
    arr.map(item => {
        let elItem = document.createElement("li")
        elItem.innerHTML = `
            <div class="flex flex-col">
                <img class="w-[350px] h-[200px]" src="${item.flags.png} width="350" height="200"/>
                <strong>${item.altSpellings[1]}</strong>
                <strong>${item.capital ? item.capital[0] : "-"}</strong>
            </div>
            
        `
        list.appendChild(elItem)
    })
}