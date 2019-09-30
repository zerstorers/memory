var table = document.createElement("table")
document.body.appendChild(table)

var numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

for (i = 0; i < numbers.length; i++) {
    var random_index = Math.floor(Math.random() * (i + 1));
    var temp = numbers[i];
    numbers[i] = numbers[random_index];
    numbers[random_index] = temp;
}
number = 0;

for (let i = 0; i < 3; i++){
    var tr = document.createElement("tr")
    table.appendChild(tr)
    for (let j = 0; j < 4; j++){
        var td = document.createElement("td")
        tr.appendChild(td)
        td.innerHTML = numbers[number]
        number = number + 1
        // td.className = "hidden"
        td.addEventListener("click", function (){
            this.style.backgroundColor = "white"
        })
                
        
    }
}





    


    
