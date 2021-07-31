ctr = 0

let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

function increment() {
    ctr = ctr + 1
    countEl.innerText = ctr
}

function save(){

    let countstr = ctr +  "-"

    saveEl.innerText += countstr

    countEl.textContent = 0

    ctr = 0 


}




