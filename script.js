// var numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
var table = document.createElement("table")
document.body.appendChild(table)
var UserLine = document.getElementById("Userline")
var UserCol = document.getElementById("UserCol")
var btn = document.getElementById("button")
var click1 = null;
var click2 = null;



btn.addEventListener("click", function () {
    table.innerHTML = ""

    var col = UserCol.value
    var line = UserLine.value

    var nb = col * line
    numbers = []

    for (let i = 1; i <= nb / 2; i++) {
        numbers.push(i)
        numbers.push(i)
    }

    for (i = 0; i < numbers.length; i++) {
        var random_index = Math.floor(Math.random() * (i + 1));
        var temp = numbers[i];
        numbers[i] = numbers[random_index];
        numbers[random_index] = temp;
    }
    console.log(numbers);

    number = 0;

    for (let i = 0; i < line; i++) {
        var tr = document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < col; j++) {
            var td = document.createElement("td")
            tr.appendChild(td)
            td.innerHTML = numbers[number]
            number = number + 1
            td.className = "hidden"
            td.addEventListener("click", function () {
                this.style.backgroundColor = "white"

                if (click1 == null) {
                    click1 = this
                }
                else {
                    click2 = this
                    if (click1.innerHTML != click2.innerHTML) {
                        click1.style.backgroundColor = "black"
                        click2.style.backgroundColor = "black"
                        click1 = null
                        click2 = null

                    }
                }
                if (click1.innerHTML == click2.innerHTML){
                    click1.style.backgroundColor = "green"
                    click2.style.backgroundColor = "green"
                }
                   




            })

        }
    }

})