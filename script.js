let main = document.querySelector('main')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
let addItemsButton = document.getElementById('add-items')



window.onload = function() {
    main.appendChild(createItem())
}

window.onclick = function(event) {
    if (event.target.classList.contains('delete-item')) {   
        main.removeChild(event.target.parentNode)
    }
}


function createItem() {
    let item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = '<p class="item-name">Bananas</p><img src="./item.jpg" alt="Item Image" class="item-img">'
    item.innerHTML += '<p class="item-price">5$</p><button class="delete-item">X</button>'
    return item
}

addItemsButton.onclick = function() {
    main.appendChild(createItem())
}


document.getElementById("header-logo").addEventListener("click", function() {
    main.style.background = 'blue'
})  

document.getElementById("call-get").addEventListener("click", function() {
    get("fruit.txt", changeItemNames)
})  

document.getElementById("call-post").addEventListener("click", function() {
    postJson("fruit.json", changeMarketName)
})  

function get(url, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onload = function() {   
        if (xhr.status === 200) {
            callback(xhr.response)
        }
    }
    xhr.send()
}

function postJson(url, callback) {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", url, true)
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.response))
        }
    }
    xhr.send()
}


function changeItemNames(itemName) {
    main.childNodes.forEach(child => {
        child.children[0].innerHTML = itemName
    });
}

function changeMarketName(market) {
    header.childNodes[9].innerHTML = market.name
    footer.childNodes[1].innerHTML = market.name
}