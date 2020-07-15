function insert() {
    var car=document.getElementById('cars');

    var add_car=document.getElementById('demo')
    var list=document.createElement('li')
    list.innerText= car.value
    add_car.appendChild(list)
}

function remove() {
    var del_car=document.getElementById('demo')
    del_car.removeChild(del_car.lastElementChild)
}
function ul() {
    var uli=document.getElementById('demo')
    uli.removeChild(uli.Child)
}