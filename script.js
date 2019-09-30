var table = document.createElement("table")
document.body.appendChild(table)
var number = 0

for (let i = 0; i < 3; i++){
    var tr = document.createElement("tr")
    table.appendChild(tr)
    for (let j = 0; j < 3; j++){
        var td = document.createElement("td")
        tr.appendChild(td)
        number = number +1
        td.innerHTML = number
        td.className = "hidden"
        td.addEventListener("click", function (){
            this.style.backgroundColor = "white"
        })
                
        
    }
}




    


    
